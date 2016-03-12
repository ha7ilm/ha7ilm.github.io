---
title: Calculating CPU usage with python on Linux
layout: post
---
This small script prints overall CPU usage in a Linux system. You can use the get_cpu() function to get the CPU usage between 0.0 and 1.0 (all CPU cores were taken into consideration, so the maximal value is also 1.0 on a multi-core system).


	import os, time
	
	last_worktime=0
	last_idletime=0
	
	def get_cpu():
		global last_worktime, last_idletime
		f=open("/proc/stat","r")
		line=""
		while not "cpu " in line: line=f.readline()
		f.close()
		spl=line.split(" ")
		worktime=int(spl[2])+int(spl[3])+int(spl[4])
		idletime=int(spl[5])
		dworktime=(worktime-last_worktime)
		didletime=(idletime-last_idletime)
		rate=float(dworktime)/(didletime+dworktime)
		last_worktime=worktime
		last_idletime=idletime
		if(last_worktime==0): return 0
		return rate
	
	
	while True:
		print "get_cpu()",get_cpu()
		time.sleep(0.5)

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).

