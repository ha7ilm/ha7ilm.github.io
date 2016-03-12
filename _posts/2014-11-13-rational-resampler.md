---
title: Rational Resampler problems
layout: post
---

If you have zero signal coming out of the Rational Resampler block in GNU Radio, or such strange signal as on the top right:

<img src="/images/ha5kfu-gr-resamp-illustr.png" width="100%" />

...then you may not have enough filter taps in the "Taps" parameter of your Rational Resampler.
Such resampler operates on the interpolated samples (the original sample stream stuffed with zeros), and if your interpolation and decimation factors are high, you are likely to need a longer filter kernel. You can make your filter kernel longer if you set the transition bandwidth smaller.

Example expression for Taps:

<pre>firdes.low_pass(1,1,0.5*min(1./interpolation,1./decimation),0.05)</pre>

New expression that produces smooth waveform:

<pre>firdes.low_pass(1,1,0.5*min(1./interpolation,1./decimation),<span style="color:Red; font-weight: bold;">0.001</span>)</pre>

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

