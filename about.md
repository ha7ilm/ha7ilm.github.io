---
layout: post
---

# Hi!

My name is András.<br />
With my friends at <a href="http://rfsparkling.com/">rfsparkling.com</a>, we solve problems, and also have fun with open source.

You can find me on [LinkedIn](https://www.linkedin.com/in/andrás-retzler-69651b95) and [GitHub](https://github.com/ha7ilm), and contact me by <a href="mailto:{{ site.email }}">e-mail</a>.

<script>

loginf=function() { document.cookie = "betatester="+$("#pw").val()+"; expires=0; path=/"; window.location.href="/";}; 

$("#submitbtn").click(loginf);
$("#pw").keypress(function(ev){var keycode = (ev.keyCode ? ev.keyCode : ev.which); if(keycode==13) loginf();});

$(function() {
    var BV = new $.BigVideo({useFlashForFirefox:false});
	BV.init();
    BV.show("/gfx/sdrhu-bigvideo-1.ogv" ,{ambient:true});
	$("#big-video-wrap").css("z-index", -1);
});
</script>
