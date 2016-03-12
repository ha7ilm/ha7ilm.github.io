---
title: GNU Radio on the Raspberry Pi 2
layout: post
---

<img src="/images/ha5kfu-pi-gnuradio.png" width="100%" />

Having followed the instructions [over here](http://www.rs-online.com/designspark/electronics/eng/blog/taking-the-raspberry-pi-2-for-a-test-drive-with-gnu-radio-2), everything worked except that the FFT plot diagrams were blank. I've got the following error message:

	libGL error: failed to load driver: swrast

It was solved by:

	sudo apt-get install libgl1-mesa-swx11

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).
