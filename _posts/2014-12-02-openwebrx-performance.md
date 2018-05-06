---
title: OpenWebRX performance tests
layout: post
---
<a href="https://sdr.hu/openwebrx">OpenWebRX</a> serving 10 clients simultaneously (and also running the browser windows on the same machine), without audio underruns.

* Server CPU: Intel Core i7
* samp_rate: 1024000

<img src="/images/ha5kfu-openwebrx-i7.png" width="100%" />

I had to increase the number of clients above 15 to notice the first underrun (although it was still usable).

Please note that digital downconversion (DDC) is a very CPU intensive task, and if you use OpenWebRX with the default sample rate, it can serve even more clients.

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

