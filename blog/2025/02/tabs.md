---
date: 2025-02-10
tags: posts
layout: post
title: 'Last week at Unternet: Tabs & workspaces'
---

Before I started Unternet, I was talking to an old friend back in Sydney about how I was thinking of building a new type of web browser. "Oh great," he said, "please can you get rid of tabs? I _hate_ tabs, there has to be a better solution."

It turns out there's a vocal group of people hate tabs &mdash; I hear this a lot in user research, and you can find the same sentiment in [studies on browser use](https://joe.cat/images/papers/tabs.pdf).

But if you ask me, the problem isn't really _tabs_, but rather the inherent friction in browsers between having a document open, and putting it away in a useful place. Consider VS Code, a popular programming text editor, which uses tabs for open files, but combines that with a file explorer. There's nothing particularly stressful about having lots of files open in tabs in VS Code, because they're so easy to organize and retrieve. By contrast, closing a tab in a browser means you will likely never see that document again.

So tabs for multitasking? Yes! Tabs for organizing? ...we can do better.

This week, Unternet's client now supports tabs for multitasking! This is a key step to getting from _"cool demo buddy"_ to _"I am using this every day for serious work"_.

![A screen capture of the Unternet client, showing the user creating a workspace tab, renaming it, and switching between tabs](/assets/blog/2025-02-tabs.gif)

Unlike typical browser tabs, these don't represent **_documents_**. Rather, they represent **_workspaces_** – collections of open websites & [applets](/docs/web-applets/introduction), threads of queries, and resources (those icons in the bottom toolbar). Basically everything you need on the table to work on a task.

You may notice that we're steering away from the "Chrome tab" visual styling, and towards a Figma-style tab to accompany that shift. These metaphors are important! (In fact, the initial version of the Unternet client had browser-style tabs instead of threads. Early users were so bought in to Chrome's "a tab is a process" mental model that they got confused.)

We've got plans for ensuring the _filing & organizing_ piece is a huge improvement on the current browser model, in a way guaranteed to satisfy my pal from Sydney &mdash; more on that in future updates.

**Also in the last week...**

- Vinay has written some early documentation and a getting started guide, which you can now find at our new [docs page](/docs/web-applets/introduction) &mdash; there's a lot to cover, so expect this to expand over the next few weeks to include more about how the protocol works, how to implement a client, etc.
- Our designer Ryan has continued to circle in on some very cool new branding directions 🌐
- We've added a rich text editor applet to our [directory](/directory)
- A few new companies have come on board as early partners building their own Web Applets integrations. If that interests you, [get in touch](mailto:rupert@unternet.co)!
