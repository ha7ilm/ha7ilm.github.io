---
title: fork() and stdin behaviour
layout: post
---

I've stumbled upon this: if we `fork()` a process, its standard input and output file descriptors remain the same for both processes. It means that the forked process can `read()` from *stdin*, and then the read data is taken away, and the original process can't read it.

Let's see what happens if the `fork()`-ed process reads all the data it can (and then displays the throughput):

<script src="https://gist.github.com/ha7ilm/52171f12b690e54250dc.js"></script>

As output we get:

	$ cat /dev/urandom | ./test3
	parent wait
	through: 10979870 bytes/s 2688
	through: 10966458 bytes/s 5360
	through: 10961687 bytes/s 8032

Now let's see what happens if we start 3 processes that read all the data, from the same stdin:

<script src="https://gist.github.com/ha7ilm/40e57a7b636a1351800e.js"></script>

	$ cat /dev/urandom | ./test3
	parent wait
	through: 3063292 bytes/s 751
	through: 4972108 bytes/s 1219
	through: 2667597 bytes/s 654
	through: 4738431 bytes/s 2316
	through: 3480123 bytes/s 1701
	through: 2551281 bytes/s 1247
	through: 2981188 bytes/s 2187
	through: 5534326 bytes/s 4060
	through: 2258710 bytes/s 1657

We see that any of them only get about third of the data.<br />
Of course it is no use, I'm just showing this to clarify the behaviour in a similar situation.

* In normal cases, you create pipes and communicate with the subprocess over those, just like in this [popen2](https://media.unpythonic.net/emergent-files/01108826729/popen2.c) implementation, where `pipe()`, `dup2()` and `execl()` is used.
* If you want to redirect the *stdout* of the main process to a single forked subprocess, then you can just `close(STDIN_FILENO)` from your main process, and `read(STDIN_FILENO, ...)` from the subprocess.

> The source of this post is my previous blog at [HA5KFU](http://ha5kfu.sch.bme.hu).
