---
layout: post
---

<h1>Support my <a href="/projects">work on open source!</a></h1>

<h2 style="margin: 0;"><a href="/about">Hire me.</a></h2>Writing code is my profession, and I have already solved problems for several companies.

<h2 style="margin: 0;">Want to integrate OpenWebRX into your product?</h2>OpenWebRX is dual licensed, so that it is available to be built into future commercial transceivers. <a href="" class="sdrhu-m-dev">Contact me</a> about that. If you support me this way, expect me to care about my open source contributors also while doing business.

<h2 style="margin: 0;">Say thanks!</h2>
You can donate to say thanks for OpenWebRX development here:

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" id="paypalform">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="4T7XAD3GE4Z62">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

<h2>Update on the donation programme // 2018-11-23</h2>

<p>I'm discontinuing the previous donation programme, in which I collected donations for reaching various development goals with OpenWebRX. From now on, you can still donate to say thanks for the work that has been done so far.</p>
<p>The change has several reasons. Firstly, putting a lot more effort into OpenWebRX development has become unsustainable for me, having a very high opportunity cost. I started this project while I was in the middle of my university studies. Since then I've finished university, and soon I'm starting my 4-year PhD studies (in case I'll get admitted, but I do hope so). While this is going to be an exciting new chapter in my life, it also means that I can't live off like a "student" anymore: even though I'm keeping to maintain a modest lifestyle, at the age of 28, I have to be able to save money for a house, maybe also for a car, and for being able to support my family later.</p>

<p>In addition, while OpenWebRX is a good playground for hams and students interested in radio communications, it does not interest enough developers to truly use the power of the open source community: it has remained mostly a one man effort of me. My motivation also very much decreased after having issues between my open source project and several companies. Some of those were resolved (like with KiwiSDR), some were not, but as a conclusion, I feel that only a few people and companies really understand what "contributing to open source" means.</p>

<p>One lesson learned was that open sourcing something is also a business choice: if we want to do something serious (not just another hobby project), then it should be made self-sustainable in the long-term. To give a second chance to this project, I started to explore commercial opportunities related to OpenWebRX in March. We'll see what will turn out of that, but the open source version will still remain available on GitHub as promised. On the other hand, hopefully going towards the PhD will allow me to work on other projects where I'll be able to make more impact than I could with OpenWebRX, even though I liked this project really much.</p>

<p>I'd still like to say a huge thanks to everyone who supported my work with donations. 
The donations were used to cover my daily expenses (e.g. rent, food, buying flowers for my beautiful girlfriend, buying DSP books, etc.) Note that I paid out approx. 35% of the donated amounts as taxes to the local government.</p>

<p>The contributions I've made in return are listed below:</p>

<ul>
<li>I have implemented the FastDDC algorithm for the CPU (although not finished the integration with OpenWebRX). It is available in the <a href="https://github.com/simonyiszk/csdr">CSDR repo</a>. I have <a href="https://www.youtube.com/watch?v=fgFto-Oj-uw">given a talk on that</a> at SDRA-2016.</li>
<li>I have <a href="https://www.youtube.com/watch?v=-QERqK1XAy0">given an educational talk</a> on writing an SDR receiver in C at SDRA-2018. That was also based on my earlier work on CSDR. </li>
<li>I have added BPSK31 and BPSK63 support to OpenWebRX and CSDR.</li>
<li>I have added RTTY support to CSDR (but not integrated that with OpenWebRX).</li>
<li>I have published my <a href="https://sdr.hu/static/msc-thesis.pdf">Master's thesis</a> on implementing digital demodulators in OpenWebRX.</li>
<li>I have <a href="https://www.youtube.com/watch?v=VlXUpMS43BY">given a talk</a> on the digital demod support in OpenWebRX at SDRA-2017.</li>
<li>I have implemented a squelch in OpenWebRX, along with an S-meter, sliders for waterfall colors, waterfall color auto adjustment, zoom buttons (UI elements similar to KiwiSDR).</li>
<li>Updated OpenWebRX to keep working on Chrome after policy changes related to Web Audio API.</li>
<li>I have added a 3D waterfall diagram on the UI (at the time of writing, OpenWebRX is the only web-based SDR program that can do this).</li>
<li>I operated the SDR.hu website. The last year I paid for the hosting, too.</li>
<li>I personally solved the problems of a lot of users who had issues with registration, putting a receiver online, etc.</li>
<li>I have redesigned the internals of SDR.hu so that it now complies with the EU GDPR. This was really a lot of work, but it ensured that the site could stay online after 25 May 2018. You can now access, modify and delete the data collected about you on registration. (You can access this dashboard after logging in.) Also added a forgotten password feature, and a Privacy Policy.</li>
<li>I have rewritten the map page on SDR.hu to use OpenStreetMap when Google Maps API went paid-only. I also added day and night overlay to the new map.</li>
<li>I have configured all of my sites to use HTTPS.</li>
</ul>

<p>Looking at the remaining goals in the previous donation programme, I won't be able to accomplish those. I've spent a lot of time on those in parallel with studying and work. Right now I have to think about my future instead. If there was commercial interest in those, it was probably different. Anyway, a product like OpenWebRX is usually built by a team of several people specialized to different fields (DSP, web design, backend, frontend, etc.) and for serious money. I've done all that work myself and given that away to the community.</p>

<p> </p>

<p>You can read about the previous donation program here:</p>

<hr/>

<h2 style="margin: 0;">Support development directly via PayPal.</h2>

I am doing OpenWebRX in my free time, while I am working on other projects to make a living. OpenWebRX is a dual licensed project, which means that I am keeping the doors open for its use as a part of commercial products later, although I will keep OpenWebRX open (see the previous section). However, it is currently still a hobby project for me, without a company behind it to support the development. If you want to support my work that I give away for free to ham radio operators and SDR enthusiasts, you can donate via PayPal.


Currently I'm working on the following things:

<ul>
<li><strong>GPGPU and FastDDC:</strong> Improving the DDC algorithms and making the first GPGPU accelerated web-based SDR receiver that is open source. I will also document the algorithms for anyone to use them later. See <a href="2016/03/13/recent-work.html">my article for more</a>.
<br /><span style="color: #999;">Donated amount: <span style="font-weight: bold;" id="don-gpgpu"></span> collected out of 5000 USD (~20% funded)</span>
<!--<a href="#to_paypal" class="bitcoinbar" data-address="gpgpu" data-goal="5000" data-formid="paypalform" data-purpose="Support GPGPU development for OpenWebRX"></a>-->
<br /><br /></li>


<li><strong>Better UI:</strong> Various improvements including a <s>squelch</s>, <s>S-meter</s>, spectrum graph, frequency labels, and better mobile support.
<br /><span style="color: #999;">Donated amount: <span style="font-weight: bold;" id="don-ui"></span> collected out of 2500 USD (~35% funded)</span>
<!--<a href="#to_paypal" class="bitcoinbar" data-address="ui" data-goal="2500" data-formid="paypalform" data-purpose="Support UI development for OpenWebRX"></a>-->
<br /><br />
<center><span style="text-align: center; color: #999; font-style: italic;">2016-03-21 UPDATE: Finished a squelch slider, auto squelch adjustment, an S-meter, sliders for waterfall colors, waterfall color auto adjustment, zoom buttons. Also added a new goal: frequency labels.</span></center>
<center><span style="text-align: center; color: #999; font-style: italic;">2017-07-12 UPDATE: Added a 3D waterfall diagram to the UI.</span></center><br />
</li>


<li><strong>Digital demodulators:</strong> This year I am going to introduce PSK31 and RTTY digital demodulators into OpenWebRX and csdr. I am going to document these just as I did with other algorithms in <a href="https://sdr.hu/static/bsc-thesis.pdf">my BSc thesis</a>.
<br /><span style="color: #999;">Donated amount: <span style="font-weight: bold;" id="don-digital"></span> collected out of 2500 USD (~50% funded)</span>
<!--<a href="#to_paypal" class="bitcoinbar" data-address="digital" data-goal="2500" data-formid="paypalform" data-purpose="Support digital demodulator development for OpenWebRX"></a>-->
<br /><br /><center><span style="text-align: center; color: #999; font-style: italic;">2017-07-12 UPDATE: Finished the BPSK31 demodulator, and documented it in my <a href="https://sdr.hu/static/msc-thesis.pdf">Master's thesis</a>.</span></center><br /></li>

</ul>

<script>
$.get("https://sdr.hu/static/donations/gpgpu", (data)=>$("#don-gpgpu").html(data+" USD"))
$.get("https://sdr.hu/static/donations/ui", (data)=>$("#don-ui").html(data+" USD"))
$.get("https://sdr.hu/static/donations/digital", (data)=>$("#don-digital").html(data+" USD"))
</script>

In addition, I've also received **9800 USD** in total from ValentFX (owner of KiwiSDR) between 2016 and 2017.

**Thank you for your support!** 

**Important:** I plan to implement all of these features even if I get no donations. On the other hand, I am not providing a service in return of the donations, and I keep the right to choose which features to work on and implement. The donated amounts are not updated automatically, however, I am updating them regularly (<s>2-3 business days</s> 30 business days). 

> The fundraising has been started in March, 2016.   
