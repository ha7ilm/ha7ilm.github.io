---
title: "John Seamons and ValentF(x) are selling their reputation on Kickstarter"
layout: post
---
It is hard to write a post like this. I hoped I would never have to.

What happened to OpenWebRX, has happened to other SDR software as well. I've seen both small and large projects disappear or close the source code because someone has tried to benefit from the work of the original developers without taking care to ethics and sometimes even misusing licenses.

When I started the OpenWebRX project, I already knew about this. And guess what? I've decided that I will **never** close the source code of OpenWebRX. Even if other people make money on it. 

Now I've got a big challenge. But I'm continuing to keep myself to this promise.

What happens on <a href="http://kickstarter.com/projects/1575992013/kiwisdr-beaglebone-software-defined-radio-sdr-with">Kickstarter</a> right now is more than just commercial use (which is allowed by the terms of the (A)GPL license used for OpenWebRX). It is a smart way of taking the whole project out of the hands of the original developer, while being legal in terms of the licenses.

**John Seamons has forked OpenWebRX, and sells his own hardware with it. The web interface is clearly the selling point of the device. After getting a lot of help from me, most of which was inevitable for his success, now John and ValentF(x) are leaving me with nothing, except a 'Thank you!'. John has told me that OpenWebRX is a large part of his project, and he also claimed that my work has reduced the time-to-market of his product by maybe a year or so.**

Why I'm standing up here is that forking open source software (which means changing the code in a way that is incompatible with the original version, and taking development in another direction), and funding it through Kickstarter is a very unusual way of getting things done. **I acknowledge that John has very much work in his board and the accompanying software, however, he treated me and my project in an unethical manner.**

It all started when I publicly released OpenWebRX in November, 2014. I have been looking around on the Internet for groups and individuals who whould have to know about it. John had a post about his WRX project (which is now KiwiSDR). It was an FPGA-based receiver board, which seemed some kind of hobby project to me. John wanted a web interface for the WRX, however, he was unable to obtain a license for using the WebSDR source code. So I wrote an e-mail to him about OpenWebRX. He was very happy about it, and said that this might be the thing that he really missed. I also helped him with additional advice for porting some DSP routines from C to Javascript. 

Later I've seen that he actually made use of my project, when he put the first receiver online. He made improvements to the web interface, and also rewrote the backend, so it now uses the stream coming from the FPGA. John released <a href="http://github.com/jks-prv/Beagle_SDR_GPS">his source code</a> on GitHub, which contained code from OpenWebRX along with other projects. For example, the receiver makes use of code from openHPSDR. The repo seem to be hacked together from multiple projects to get things done fast, without the actual effort made to contribute to the projects it was created from. While John always said that he actually tried to keep it compatible with the original OpenWebRX, I never received any pull requests from him. His fork is made only for selling his board: you cannot use any other hardware with it.

When John has actually realized that my <a href="http://sdr.hu">sdr.hu</a> webpage is visited by some people who he could sell his receivers to, he asked me if he could list his online receivers on my page. That's how he gained attention: **many people found out about the KiwiSDR through my site**, and as a result, a few days later it was featured on several other websites like <a href="http://www.rtl-sdr.com/kiwisdr-30-mhz-bandwidth-sdr-for-hf/">rtl-sdr.com</a>.

When people found out about John's receivers, some wanted to port the new features from his repo back to OpenWebRX. Since I've changed the license on OpenWebRX from GPL to dual licensed AGPL + commercial (so that now I have some kind of business model behind it, encouraging people to share their code and companies to buy it), a pull request like this needed the permission of John as well. **The contribution agreement he signed** is the standard ICLA that everyone signs before contributing to the project. **In addition,** he gave us permission to port back features from the web interface of KiwiSDR to OpenWebRX, so that people who actually wanted to do it, were able to.

In theory, the ICLA allows me to sell a commercial version of OpenWebRX with his new features. In practice, now a <a href="https://github.com/simonyiszk/openwebrx/pull/20/files">volume slider and mute button</a> has been ported from KiwiSDR to OpenWebRX by an external developer, and nothing else. (Maybe you can feel how advanced this feature is to do, although really useful.) I don't have any business partners yet and do OpenWebRX as a free time project, while John is the one who actually makes business out of it. Personally I don't feel I can make use of his code much, that's why I implemented the new waterfall controls and the S-meter myself. **However, signing the ICLA can be a good reason for him to claim I am "on board" with his project. He goes away with 50,000 USD to build a business if the Kickstarter is successful, while I get only a few <a href="http://blog.sdr.hu/support">donations</a> and keep doing OpenWebRX for hobby.**

Every time we were in contact, John was trying to keep me feel that he is actually not doing it for commercial success, just to build a few boards that he can give away for cheap. When we talked on Skype he told me that this product is not going to make a pile of money. I should have been suspicious about this as he was also talking about business analysis, and the way of determining the price of the product so that it can be successful after the Kickstarter as well. You have to know that other SDR projects like the 753% funded <a href="https://www.kickstarter.com/projects/mossmann/hackrf-an-open-source-sdr-platform">HackRF</a> and the 191% funded <a href="https://www.kickstarter.com/projects/1085541682/bladerf-usb-30-software-defined-radio/">bladeRF</a> were very much of a success on Kickstarter, so he already knew what to expect. Now while the KiwiSDR is actually less capable than the two devices mentioned (no tuner, no transmit), it is actually getting sold with the help of the OpenWebRX web interface that was originally my work.

With the help of John, I might also lose other opportunities related to the project, including making custom modified versions for companies. I am working hard towards my Master's degree at the university, and have to work on paying projects as well in order to make a living. Despite this, I'm still investing much of my time into open source (see my <a href="/2016/03/13/recent-work.html">recent work over here</a>), but I will not be able to keep up with someone who actually has a business to fund the development. In addition, John Seamons told me that he doesn't have to work to make a living. He has spent his life working at big companies in the Silicon Valley, and also had his own consulting business there. Now he lives in New Zealand. Seems like now he makes use of his time to monetize the open source projects of a folk like me, and thinks that I can be easily swept under the carpet.

The last straw was when John actually asked me if I wanted to be on the Kickstarter page among the founders of KiwiSDR. I have clearly asked him if he will support my work on open source, and he ignored it multiple times, making it clear that **he only wants to put my name on his project, so that people actually think that they are supporting the original developer as well, while John and ValentF(x) take all the income.**

After people actually asked about these things on the Kickstarter page in the comments, John has decided to change his mind (or at least show that), and said that he agrees with everything I've written in my <a href="/2016/03/13/recent-work.html">previous blog post</a> (including that he actually takes my opportunities), and he will support me with me with an undisclosed amount if people help him to make his business on Kickstarter. Unfortunately, John forgot to tell me about these plans when I specifically asked it before.

While John might be used to doing business like this (hope not), he doesn't seem to understand that open source has different rules to play. John and ValentF(x), who would want to do business with you after this? You are likely to win 50,000 USD now, but this post will remain here forever. 

The high-tech world (including open source) is built on trust. I do not understand, why would ever anyone ruin his own reputation for 50,000 USD? 

<hr />

However, this article should not end this sad. As <a href="/2016/03/13/recent-work.html">I have aready written</a>, I cannot be discouraged in my work by someone like John. Even if he goes away with a pile of money. Even if others go away with a pile of money. I am doing <a href="/projects">this work</a> so that amateur radio operators and SDR enthusiasts can play with it, and students can learn from it. And I'm going to write more open source, as I've got a tremendous amount of inspiration from people.

I have been working as a software developer for several years. In the beginning, I coded websites if people asked me to. Later I coded Verilog or VHDL, if a company was in need. I dived into the embedded software until the assembly level, if it was needed to make a product happen. But in life, I am really into three things: open source, Software Defined Radio and teaching people. 

Things won't stop with KiwiSDR.

<hr />

*Note: this article has last been edited on 2016-03-26 at 00:27 CET*


