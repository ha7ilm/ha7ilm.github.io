---
layout: post
title: Returning structs in emscripten
---
Based on the discussion [over here](https://groups.google.com/forum/#!topic/emscripten-discuss/k3oTNGasf6s), I've created a simple code sample.

C code:

	typedef struct shift_addition_data_s
	{
		float sindelta;
		float cosdelta;
		float rate;
	} shift_addition_data_t;
	
	shift_addition_data_t shift_addition_init(float rate)
	{
		rate*=2;
		shift_addition_data_t out;
		out.sindelta=sin(rate*PI);
		out.cosdelta=cos(rate*PI);
		out.rate=rate;
		return out;
	}

How to call it from JavaScript:

	function test_struct_return_value()
	{
		v=STACKTOP;
		STACKTOP+=4*3;
		_shift_addition_init(v,0.2);
		console.log( 
			"sinval=", getValue(v,'float'), 
			"cosval=", getValue(v+4,'float'), 
			"rate=", getValue(v+8,'float') 
		);
		STACKTOP=v;
	}

Note that we had to pass `v` to `_shift_addition_init`.<br />
Thanks for the guys on the list for figuring this out.

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

