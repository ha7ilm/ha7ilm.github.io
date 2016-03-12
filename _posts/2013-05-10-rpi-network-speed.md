---
layout: post
title: Checking out Raspberry Pi network speed
---
I've just installed a tool called iperf, that can actually determine the real available network bandwith between two nodes in your network.
The result listed below might not be the most accurate, as I was connected to the Pi with a Linksys 8 port switch in between.

	# iperf -s -p 8888 &
	-----------------------------------------------------------
	Server listening on TCP port XXX
	TCP window size: 85.3 KByte (default)
	------------------------------------------------------------
	[ 4] local 152.66.211.100 port XXX connected with YYY port 40041
	[ ID] Interval Transfer Bandwidth
	[ 4] 0.0-10.1 sec 98.4 MBytes 82.0 Mbits/sec

The interesting part is, I've figured out that I can even measure bandwith without iperf installed on the client side, by simply doing:

	cat /dev/zero | nc <iperf-server-machine> <port>
