---
layout: post
title:  "Day in the Life"
subtitle: "A text-based, choose-your-own-adventure game describing a day in in the life of someone with a physical disability. "
date:   2017-12-30 23:34:01
categories: [design, tool]
---
Press the play button below and type input in the black box!

<iframe height="600px" width="100%" src="https://repl.it/@samslate/dayinthelife?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

A link to the game online is [here][play-online] and the Github repository can be found [here][github-repo].

---

This game was created for a class on disability studies to demonstrate the difficulties of having an invisible physical disablity at Tufts University.

I chose to use basic C++ classes with few added libraries in order to better help the students I was TAing with their assignments. This limits the code in terms of how dynamic it can be but makes the classes simpler and easy to understand.

I started from scratch in building the framework of a choose-your-own-adventure game. Since I wanted to be able to change the gameplay easily, I built out an abstract framework that can read in from information files the events and choices central to the game. 

Hope you enjoy!

[play-online]:   https://repl.it/@samslate/dayinthelife
[github-repo]:   https://github.com/sam-slate/day-in-the-life
[jekyll-help]: https://github.com/jekyll/jekyll-help
