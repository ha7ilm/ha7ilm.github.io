---
layout: post
title: Calculate the value of Pi with three lines of python
---
This is based on Newton's method on root finding:

	from math import *
	d=lambda x:x-sin(2*x)/2

Now you can try this:

	>>> d(3)
	3.139707749099463 
	>>> d(d(3))
	3.1415926491252555  
	>>> d(d(d(3)))
	3.141592653589793
	>>> d(d(d(d(3))))
	3.141592653589793
	>>> d(d(d(d(d(3)))))
	3.141592653589793

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).
