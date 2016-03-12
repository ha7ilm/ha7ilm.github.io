---
title: Read-only root filesystem on Raspbian 
layout: post
---

While running Raspbian on my Raspberry Pi (Model B), the SD card repeatedly got corrupted when I removed the +5V power without properly halting the system.

The easiest solution was to make everything read-only from boot time.
I did that by modifying `/etc/fstab`:

<pre>
proc /proc proc defaults 0 0
/dev/mmcblk0p1 /boot vfat defaults<span style="color:Red;font-weight:bold;">,ro</span> 0 2
/dev/mmcblk0p2 / ext4 defaults,noatime<span style="color:Red;font-weight:bold;">,ro</span> 0 1
</pre>

The drawbacks:

* Of course, you can't write to files or create new files. 
* You can't setup new applications.
* Log files and the lock files of some processes are not written at all.

However, the system seems to work at all. Luckily, you can easily remount a read-only filesystem in read-write mode, e. g. if you want to do some development.

**Warning! The code below is only an example, you should check how your system is partitioned.**

<tt>/usr/bin/pi-rw:</tt>

	#!/bin/bash
	sudo mount -n -o remount,rw,defaults /dev/mmcblk0p1 /boot
	sudo mount -n -o remount,rw,defaults,noatime /dev/mmcblk0p2 /

So my Pi starts in read-only mode, and if I want to switch to read-write mode I execute:

	pi-rw

If I want to change back to read-only mode, I reboot the system - as some processes always hold the root partition, you can check that by typing: 

	fuser -vm /

I feel that it's a quick and dirty fix for the problem, some more sophisticated solutions may exist.
One example is [IPE, a blackout-proof flavor or Raspbian](http://nutcom.hu/?page_id=108).

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

