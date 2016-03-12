---
title: Playing audio with gr-ha5kfu if Audio Sink fails
layout: post
---
I've got continuous underruns and overruns, clicks with Audio Sink in GNU Radio, so I used the *Execute External Process Sink* in *gr-ha5kfu*, with `csdr`, and the `mplayer` command line tools.

I used the following command line:

	csdr convert_f_i16 | mplayer -cache 1024 -quiet -rawaudio samplesize=2:channels=1:rate=48000 -demuxer rawaudio -

Now I've got smooth playback.

<img src="/images/ha5kfu-gr-ha5kfu-mplayer.png" width="100%" />

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).
