---
layout: post
title: Solved problem with headphone jack under Linux
---
My laptop, which has Linux installed, started to miss changing the sound output from the speakers to headphones when I plugged in an audio jack. (I still can't decide whether it's caused by Wine pulseaudio bug or hibernation.) It was annoying, because I had to reboot the machine to make headphones work again.

My configuration: Debian Unstable and laptop with Intel High Definition sound card, Pulseaudio using ALSA sink as output.

I could figure out how to solve it without rebooting:

First I had to close any applications using the sound output, or simply kill the ALSA sink of Pulseaudio this way:

	pacmd list-modules

Look for module-alsa-card and read ID.

	pacmd unload-module 4

...where 4 is the ID on my system.

Restart Intel sound kernel module to resolve headphone issue:

	sudo rmmod snd_hda_intel
	sudo modprobe snd_hda_intel

Now get pulseaudio restart:

	pulseaudio -k

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).
