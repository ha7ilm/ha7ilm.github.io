---
title: Installing WSPR on Linux Mint 17
layout: post
---

<img src="/images/ha5kfu-wspr-lmint-1.png" width="100%" />

First I tried to compile it from the source at the official SVN repo, but I ran into difficulties.

The easiest way to go is to add the following PPA to `/etc/apt/sources.list`:

	deb http://ppa.launchpad.net/ki7mt/wspr/ubuntu trusty main
	deb-src http://ppa.launchpad.net/ki7mt/wspr/ubuntu trusty main

The next step is to install `wspr` with `apt-get`:

	sudo apt-get update
	sudo apt-get install wspr

Then run `wspr` by typing:

	wspr

Select the *pulse* audio input device at *Setup / Station parameters*.

<img src="/images/ha5kfu-wspr-lmint-2.png" />

On the main screen don't forget to uncheck the *Idle* button, until that the software will not do anything.

<img src="/images/ha5kfu-wspr-lmint-3.png" />

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).
