---
title: "hpsdrtool"
layout: post
---

I've created a python script that can read the I/Q samples from a HPSDR Atlas + Metis + Mercury receiver, and write them to the standard output. The code is available on GitHub:

<a href="https://github.com/ha7ilm/hpsdrtool">https://github.com/ha7ilm/hpsdrtool</a>

Big thanks to János, HA5FT for the huge amount of help!

The script is very experimental, and does not allow changing a lot of settings yet: it can set the center frequency, switch the preamplifier on/off, and it can currently use only one receiver. 

However, it can already be used with OpenWebRX with the following settings in `config_webrx.py`:

```
# >> HPSDR Mercury as signal source
start_rtl_command="hpsdrtool 192.168.0.103 --freq {center_freq} --preamp".format(center_freq=center_freq)
format_conversion="csdr convert_s24_f"
samp_rate=192000
```

You might also use the script to record the I/Q samples from HPSDR to a file.

This is how `hpsdrtool` works with OpenWebRX:

<img src="/images/hpsdr1.png" style="max-width: 100%" />

<img src="/images/hpsdr2.png" style="max-width: 100%" />


