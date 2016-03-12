---
title: Headless first boot with Odroid-C1

---
It was quite easy, but I'd like to highlight some information:

* You can download the Ubuntu 14.04 image from here (EU mirror). I copied it to an SD card with dd.
* As I have not ordered a power supply for the board (and it has a quite uncommon connector), I had to short R87 in order to power it from the MicroUSB port (just as it can be done with the Raspberry Pi).
* I shorted the Boot Media Selector so that I can use my MicroSD card.
* The Ubuntu image has DHCP and SSH enabled by default. I've found the IP address of the board on my network with:
<br />`nmap -sP 192.168.0/24`
<br />(This detects all IP addresses on a class C network, by pinging all possible ones. Warning: use the `nmap` tool only on your own network, as using it may be misunderstood as a security intrusion attempt!)
* Now I could log in to the board:
<br />`ssh odroid@192.168.0.104`
<br />The default password is `odroid` (just as the username).

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

