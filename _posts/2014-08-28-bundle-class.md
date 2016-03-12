---
title: "\"Bundle\" utility class in python"
layout: post
---
I liked [this python recipe](http://code.activestate.com/recipes/52308/) and I've extended it a bit, to make this class also iterable.

	class Bundle:
		def __init__(self, **kwds):
			self.__dict__.update(kwds)
		def __iter__(self):
			l=[]	
			for d in self.__dict__:
				l.append(getattr(self,d))
			return iter(l)
	
	o=Bundle(text="asdf",pos=(22,22))
	print o.text
	print o.pos
	print "now iterating through:"
	for i in o:
		print i

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

