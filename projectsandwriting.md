---
layout: page
title: Projects & Writing
subtitle: 
sitemap:
  priority: 0.9
---

# Categories:
<ul class="categories">
    {% for category in site.data.categories %}
            <li class="categories__item"><a href="{{ '/categories/' | append: category.slug | prepend: site.baseurl }}">{{ category.name }}</a></li>
    {% endfor %}
</ul>

---

<ul class="list-posts">
    {% for post in site.posts %}
    	{% if post.redirect %}
    		<li class="post-teaser">
	            <a href="{{ post.redirect}}">
	                <span class="post-teaser__title">{{ post.title }}</span>
	                <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
	            </a>
	        </li>
	    {% else %}
    		<li class="post-teaser">
	            <a href="{{ post.url | prepend: site.baseurl }}">
	                <span class="post-teaser__title">{{ post.title }}</span>
	                <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
	            </a>
	        </li>
	    {% endif %}
    {% endfor %}
</ul>