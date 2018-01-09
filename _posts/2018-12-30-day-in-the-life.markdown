---
layout: post
title:  "Day in the Life: A Disability Game"
subtitle: "A text-based, choose-your-own-adventure game describing a day in in the life of someone with a physical disability. "
date:   2017-12-30 23:34:01
categories: [coding, disability, c++]
redirect: false
---
Press the play button below and type input in the black box!

<iframe height="600px" width="100%" src="https://repl.it/@samslate/dayinthelife?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

A link to the game online is [here][play-online] and the Github repository can be found [here][github-repo].

---

This game was created for a class on disability studies to demonstrate the difficulties of having an invisible physical disability at Tufts University.

I chose to use basic C++ classes with few added libraries in order to better help the students I was TAing with their assignments. This limits the code in terms of how dynamic it can be but makes the classes simpler and easy to understand.

I started from scratch in building the framework of a choose-your-own-adventure game. Since I wanted to be able to change the gameplay easily, I built out an abstract framework that can read in from information files the events and choices central to the game. 

Hope you enjoy!

---

## Project Reflection

This project felt really important to me and I spent a lot of time working on it when I should have been working on other things. 

The idea to code in C++ with no other libraries seemed like a good idea at the time, and it did help me help students who were coding similarly (one highlight is desperately asking for help with file input/output from the professor I was TAing for). It caused me massive headaches however and left me frustrated with how to turn my finished product into something accessible and usable. Repl.it definitely saved my life here (thanks to some help from the Tufts CS group!) but I'd still like to make the code reusable and am having a hard time doing that with C++.

I feel like this project reaffirmed that I can use CS to build things that matter to me. Maybe I can't paint a painting or write a poem to express myself, but I can create a game that shows a bit of my experience and my pain. 


[play-online]:   https://repl.it/@samslate/dayinthelife
[github-repo]:   https://github.com/sam-slate/day-in-the-life
[jekyll-help]: https://github.com/jekyll/jekyll-help
