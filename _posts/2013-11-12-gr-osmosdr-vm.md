---
layout: post
title: How to use GNU Radio gr-osmosdr block on a VM
---

First question: why would anyone want to set up GNU Radio on a virtual machine?
Because you can connect to an `rtl_tcp` server to get I/Q samples from there, and do actual processing on the VM.

The problem came when running a GRC flowgraph which contains a `gr-osmosdr` block has failed with a mysterious-looking segmentation fault.


	$ python top_block.py
	linux; GNU C++ version 4.7.2; Boost_104900; UHD_003.005.004-157-g7641b42a
	Using Volk machine: sse4_a_32_orc
	gr-osmosdr v0.1.0-44-g0d10f5e9 (0.1.1git) gnuradio 3.7.2
	built-in source types: file fcd rtl rtl_tcp uhd hackrf netsdr
	Segmentation fault

I've discovered that it happens because the VM has no USB support (on which I was not suprised as we're talking about a machine that only virtually exists and there's no physical access to the hardware.) `rtl_tcp` and `rtl_test` also failed without any single error message, saying only "segmentation fault". Having found a report about this bug in CUPS, I've realized that the whole problem could be solved if libusb was properly initialized, like the attached *debdiff* file says:


	+- libusb_init(NULL);
	++ err = libusb_init(NULL);
	++ if (err)
	++ {
	++ fprintf(stderr, "WARNING: Unable to initialize USB access via libusb, libusb error %i\n", err);
	++ return (NULL);
	++ }
	++

So the problem seemed to be laying in *librtlsdr* - segfault is happening in the `gr-osmosdr` block while loading *librtlsdr*. I've patched `librtlsdr.c` to handle this situation correctly, but unfortunately `gr-osmosdr` uses other libraries as well (as it supports UHD, HackRF, etc.), and most of these initialize *libusb* the wrong way. I've still kept getting segfault, but now in UHD... So instead of patching all of the components, to get rid of this, I disabled any unneeded libraries in `CMakeLists.txt` in `gr-osmosdr/lib`, inserting zeros to sufficient places.

<pre>
	########################################################################
	# Setup IQBalance component
	########################################################################
	GR_REGISTER_COMPONENT("Osmocom IQ Imbalance Correction" ENABLE_IQBALANCE GNURADIO_IQBALANCE_FOUND)
	if(ENABLE_IQBALANCE)
	add_definitions(-DHAVE_IQBALANCE=1)
	include_directories(${GNURADIO_IQBALANCE_INCLUDE_DIRS})
	GR_OSMOSDR_APPEND_LIBS(${GNURADIO_IQBALANCE_LIBRARIES})
	endif(ENABLE_IQBALANCE)
	########################################################################
	# Setup OsmoSDR component
	########################################################################
	GR_REGISTER_COMPONENT("sysmocom OsmoSDR" ENABLE_OSMOSDR <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_OSMOSDR)
	GR_INCLUDE_SUBDIRECTORY(osmosdr)
	endif(ENABLE_OSMOSDR)
	########################################################################
	# Setup FCD component
	########################################################################
	GR_REGISTER_COMPONENT("FUNcube Dongle" ENABLE_FCD <span style="color:Red; font-weight: bold;">0</span>)
	GR_REGISTER_COMPONENT("FUNcube Dongle Pro+" ENABLE_FCDPP GNURADIO_FCDPP_FOUND)
	if(ENABLE_FCD)
	add_definitions(-DHAVE_FCD=1)
	endif(ENABLE_FCD)
	if(ENABLE_FCDPP)
	add_definitions(-DHAVE_FCDPP=1)
	endif(ENABLE_FCDPP)
	if(ENABLE_FCD OR ENABLE_FCDPP)
	GR_INCLUDE_SUBDIRECTORY(fcd)
	endif(ENABLE_FCD OR ENABLE_FCDPP)
	########################################################################
	# Setup File component
	########################################################################
	GR_REGISTER_COMPONENT("IQ File Source" ENABLE_FILE GNURADIO_BLOCKS_FOUND)
	if(ENABLE_FILE)
	GR_INCLUDE_SUBDIRECTORY(file)
	endif(ENABLE_FILE)
	########################################################################
	# Setup RTL component
	########################################################################
	GR_REGISTER_COMPONENT("Osmocom RTLSDR" ENABLE_RTL <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_RTL)
	GR_INCLUDE_SUBDIRECTORY(rtl)
	endif(ENABLE_RTL)
	########################################################################
	# Setup RTL_TCP component
	########################################################################
	GR_REGISTER_COMPONENT("RTLSDR TCP Client" ENABLE_RTL_TCP GNURADIO_BLOCKS_FOUND)
	if(ENABLE_RTL_TCP)
	GR_INCLUDE_SUBDIRECTORY(rtl_tcp)
	endif(ENABLE_RTL_TCP)
	########################################################################
	# Setup UHD component
	########################################################################
	GR_REGISTER_COMPONENT("Ettus USRP Devices" ENABLE_UHD UHD_FOUND <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_UHD)
	GR_INCLUDE_SUBDIRECTORY(uhd)
	endif(ENABLE_UHD)
	########################################################################
	# Setup MiriSDR component
	########################################################################
	GR_REGISTER_COMPONENT("Osmocom MiriSDR" ENABLE_MIRI <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_MIRI)
	GR_INCLUDE_SUBDIRECTORY(miri)
	endif(ENABLE_MIRI)
	########################################################################
	# Setup HackRF component
	########################################################################
	GR_REGISTER_COMPONENT("HackRF Jawbreaker" ENABLE_HACKRF <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_HACKRF)
	GR_INCLUDE_SUBDIRECTORY(hackrf)
	endif(ENABLE_HACKRF)
	########################################################################
	# Setup bladeRF component
	########################################################################
	GR_REGISTER_COMPONENT("nuand bladeRF" ENABLE_BLADERF <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_BLADERF)
	GR_INCLUDE_SUBDIRECTORY(bladerf)
	endif(ENABLE_BLADERF)
	########################################################################
	# Setup NetSDR component
	########################################################################
	GR_REGISTER_COMPONENT("RFSPACE NetSDR" ENABLE_NETSDR <span style="color:Red; font-weight: bold;">0</span>)
	if(ENABLE_NETSDR)
	GR_INCLUDE_SUBDIRECTORY(netsdr)
	endif(ENABLE_NETSDR)
</pre>

If everything is all right, you can see the sufficient modules disabled in the cmake output. After building again, segmentation fault errors will go away.
