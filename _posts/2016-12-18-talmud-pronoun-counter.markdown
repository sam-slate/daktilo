---
layout: post
permalink: talmud-pronoun-counter
title:  "Talmud Pronoun Counter"
subtitle: ""
date:   2016-12-18 23:34:01
categories: [coding, python, visualization]
redirect: false
---

The Github repository of this project can be found [here][github-repo].

This program was created for a class on the [Talmud][talmud]. It uses the [Sefaria API][sefaria-api] to access the text of pages in the Berakhot. It stores the frequency of he series and she series pronouns of each page in a dictionary and creates an excel file named "output.csv" out of this dictionary.

Some results:
![fast facts][fast-facts]
![frequency][frequency]

---

## Project Reflection

This project was one of my first learning experiences with scripting in python and using APIs. The Sefaria API was particularly difficult to rangle and I'm glad I was able to work it all out! It was also fun to create an excel spreadsheet as an output. A short and sweet program that led me to bigger and better things in python :)


[talmud]: https://www.myjewishlearning.com/article/talmud-101/
[sefaria-api]:   https://github.com/Sefaria/Sefaria-Project/wiki/API-Documentation
[github-repo]:   https://github.com/sam-slate/TalmudPronounCounter
[fast-facts]: https://github.com/sam-slate/TalmudPronounCounter/raw/master/FastFacts.png?raw=true
[frequency]: https://github.com/sam-slate/TalmudPronounCounter/raw/master/graph.png?raw=true
