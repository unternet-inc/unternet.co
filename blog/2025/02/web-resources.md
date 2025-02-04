---
date: 2025-02-03
tags: posts
layout: post
title: 'Last week at Unternet: Adding web resources'
---

Keyword search and the pay-per-click has terraformed the web, and not necessarily in a great way. This [beautifully illustrated Verge article](https://www.theverge.com/c/23998379/google-search-seo-algorithm-webpage-optimization) is a great place to start to read more into exactly the forces at play here. Ultimately, for end users, finding stuff online feels a lot less like getting good recommendations from a trusted friend, and more like being served the same predictable slop at a bad canteen.

This week we pushed a feature to our reference client aiming to bring a _little_ more of a sense of curation & agency to the search experience. Instead of searching across the entire internet, you can add websites to the "context bar" just as you would an applet. Now, the client can use websites as tools, and conduct a search across just the sources you pick out.

![A screen capture of the Unternet client, with the user adding two music publications as sources, then conducting a search for Australian bands to watch, and receiving text including links to the two publications](/assets/blog/2025-02-web-resources-demo.gif)

(For those interested, [here's a note](https://docs.unternet.co/s/4f1a7345-2654-418e-bb7a-ec081db8ef1c) I sketched out for how the "kernel" of our client handles sending these various types of tool to the model.)

**Also in the last week:**

- Our contributor Vinay wrote up brand new getting started docs for Web Applets, which will be dropping later this week
- Thanks to engineer Oli, the web applets inspector now validates JSON
- Ryan, who is joining us part-time on design, has been iterating on brand and vibes. I'm excited to share that work soon
