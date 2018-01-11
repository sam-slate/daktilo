---
layout: post
permalink: cb-research
title:  "My Summer as a Computational Biology Research Assistant"
subtitle: "Finding patterns in data and finding truth within myself"
date:   2017-10-09 23:34:01
categories: [research, coding]
redirect: false
---

This past summer, I had the great pleasure to work with Professor [Lenore Cowen][lenore] in the [Bioinformatics and Computational Biology][BCB] (BCB) Research Group at Tufts University.

As a research assistant, I worked on various projects that were central to Professor Cowen's research. Most of these projects were focused on her cutting-edge diffusion algorithm, [DSD][DSD], and its various applications in computational biology. 

My main partner in crime was my good friend Lily Liu, but I was also able to work with a bunch of other research assistants who brought insight into my projects and a spiritual light into the windowless computer science building.

Here we all are:
![A picture of us!][bcb-pic]

---

## My Main Project

My main project for the summer was to try to find an answer to the question: if we have a bunch of proteins we know are associated with a certain attribute, how can we best predict which other proteins are most likely to be associated with that attribute given a web of interactions between proteins? In other words, we know a bunch of proteins that are "guilty" and we know which other proteins they interact with and which proteins those proteins interact with (and so on). How do we then make a list of which proteins are most likely to be "guilty" as well?

The simple answer would be to say: "in our web of protein interactions, just pick the proteins that are the closest to the known ones!" This method is pretty acurate for this kind of problem, but we were wondering if there were other methods that took into account more subtle information about the web of interactions and was more accurate in its predictions. 

For those who are into the technical or scientific side of this project, a more in depth explanation can be found on a GitHub repository for the project [here][github-repo].

For those who are less into that side, the good news is that **we were mostly succesful at this task!** We implemented a version of Professor Cowen's algorithm that performed better than the standard algorithm out there. 

A picture of our poster is below:

![poster][poster]


---

## Project Reflection

I had an amazing time working with Professor Cowen and the group. As a whole, they created a wonderful and supportive learning environment. I felt inspired by the work that we accomplished and excited about the future of the field.

I came in with little biology experience, little python experience, and little experience with a person saying "here's a problem, try to solve it." Although overwhelming at times, my work always felt fulfilling and I could tell I was learning a ton. It was amazing to look around at the end of the summer and realize Lily and I had accomplished something pretty significant with our findings. We had written 30 different scripts apiece, had combed through massive data files, had (many) moments of defeat and (fewer) moments of victory, had to rewrite much of our code at different points, and by the end had something tangible that we had accomplished.

Pretty neat. 

(Also, as a thank you to the amazing Professor Cowen, I created a poster for her. The details can be found in this post [here]({{ site.baseurl }}{% post_url 2017-09-29-plot-font %}). 


[lenore]: http://www.cs.tufts.edu/~cowen/
[BCB]:   http://bcb.cs.tufts.edu/
[DSD]: http://dsd.cs.tufts.edu/
[bcb-pic]: http://bcb.cs.tufts.edu/images/IMG_2132.JPG
[github-repo]:   https://github.com/sam-slate/dsd-phenotype-ranking-example-code
[poster]: https://raw.githubusercontent.com/sam-slate/dsd-phenotype-ranking-example-code/master/FinalPoster.jpg


