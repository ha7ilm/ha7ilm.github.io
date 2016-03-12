---
title: LUT based frequency translation in libcsdr
layout: post
---
I've just written a `shift_table_cc` function for <a href="https://github.com/simonyiszk/csdr">libcsdr</a>.

This function uses a LUT to calculate the sine and cosine waves required for shifting the spectrum.
The first quadrant of the sin(x) function is stored in the LUT. The resolution (sine table size) is given as a parameter.

I've been testing different sine table sizes. Below some results are presented.

For value 30:

<img src="/images/ha5kfu-shift_table_30.png" width="100%" />

For value 1000:

<img src="/images/ha5kfu-shift_table_1000.png" width="100%" />

For value 10000:

<img src="/images/ha5kfu-shift_table_10000.png" width="100%" />

For value 32768:

<img src="/images/ha5kfu-shift_table_32768.png" width="100%" />

A plain sine wave was the input for `shift_table_cc`. The shift ratio was set to -0.11.

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

