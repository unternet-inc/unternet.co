---
date: 2025-01-27
tags: posts
layout: post
title: The next user agent
---

Hey, Rupert here from [Unternet](https://unternet.co). We're building a new, intelligent client for the web &mdash; and will be posting about our progress [here](https://unternet.co/blog) every week.

## Why the web?

I love the web. It's incredible to me that, in a world of corporate control and closed ecosystems, we have a shared substrate of software crafted from collaborative volunteer deliberation. And it's thriving.

At the core of it all is the '[user agent](https://www.w3.org/WAI/UA/work/wiki/Definition_of_User_Agent)', the program which acts as our gateway to the web &mdash; routing our requests, and interpreting web markup & code. For most of us, the user agent we're most familiar with is our web browser. But they can take many shapes & forms: email clients, web crawlers, command-line tools, feed readers.

You may have noticed that browsers have gone largely unchanged for decades now. A lot of people present that as a bad thing, but I don't think so &mdash; rather, it's just kind of reached its ultimate form like an alligator or a shark. (It's good! We have solved browsing documents!)

But we no longer live in a document-oriented web, we exist in an incredibly rich application-centric web that has evolved at breakneck speed in spite of the browser's stagnation. App developers invented their own proprietary technologies instead of waiting for the web to catch up (this has had [some negative side effects](https://pluralistic.net/2024/04/24/naming-names/#prabhakar-raghavan)). And as we moved functionality away from our computers and into cloud apps, we as users lost control — a big chunk of information and files are now stuck deep in the walled gardens of our various web apps, none of which talk to each other. We have to log into things twenty times a day. Everything is a subscription, or selling our data for ads. Nothing "just works".

The thesis of Unternet is that we're due for a new modern user agent, one that will be the centre of gravity for our digital world even more than the browser is today.

## How it began

At the start, I just wanted to do something useful with language models.

Back at Google Creative Lab in 2019, we worked on a project called "[ML Tools for Writers](https://www.youtube.com/watch?v=ayc7PJzqVhs)", which is where I first learned to wrangle GPT-2. I was coached by [Ross Goodwin](https://rossgoodwin.com/) on how to manipulate special characters in the training input of the transformer to get specific results from the output, like telling a story in reverse, generating a biography based on a few keywords, or building in structure that could be turned into graphical UI elements. Of course, you couldn't just use prompting, we had to custom train a model using a secret code of special characters like little spell charms that would direct the model's behaviour. The end result was real, graphical software that would obey the natural, gooey, non-deterministic rules of language.

So when ChatGPT launched while I was at Mozilla, despite appreciating it for garnering such public enthusiasm, I disagreed with the exclamations that text conversation was the future of computing. I already knew it was possible to [create rich interfaces](https://x.com/rupertmanfredi/status/1653780093712633859) using these models, and apply them strategically to do new kinds of computing operations. That was the future I was excited for! Not texting a slightly misinformed & sycophantic ghost in the shell.

I moved to [Adept](https://www.adept.ai/blog/introducing-adept) to work closely with a talented research team building some of the underlying models that would power this capability, prototyping interfaces to solve real problems, and putting probably some of the first production-ready agents into service at scale. But it quickly became clear to me that what we really needed to do was build an application platform, and if _anyone_ is going to build a platform like this, they'd better be doing it out in the open where it can't be controlled by a single powerful company. They should be extending something like... the web.

## Where we're going

Ok, so let's talk about the vision. We're building something that will:

- Act like an operating system for your files & applications, wherever they are
- Adapt to the human user through flexible interfaces & natural language
- Put ultimate control & data in the hands of the user, not the cloud

(The early version of this _was_ called _Operator_ — or I guess it technically still is, but because I don't want to have a multi-million dollar legal stoush with OpenAI we'll probably have to pick another name. This name was chosen to evoke the telephone operators of yesteryear, who were [in fact expert knowledge workers](https://dl.acm.org/doi/10.1145/223904.223921), specializing in understanding a caller's intent, clarifying & providing information, and patching into the right external service when more support was needed. A mediator for a dense network of connections, the original user agents.)

But we're not just making a product. My secret admission (don't tell [Betaworks](https://www.betaworks.com/camp/ai-camp-native-applications)!) is that Unternet is not really an "AI company", but rather a web technology company leveraging the power of these models in a post-app world. This means we're not just building a new user agent, but also the web stack to power it which anyone can take advantage of. Our first release is [Web Applets](https://github.com/unternet-co/web-applets), a lightweight protocol for sending actions & receiving data from a web app. It's how our product is able to spin up a map to search for cafes nearby, then answer a question about which one has a 4+ star review, stocks oat milk, and is less than a 10 minute walk from home.

<img src="/blog/assets/operator-maps-demo.gif" alt="Operator asking a follow-up question to a map" width="100%" />

There will be more that we build in the open, and with like-minded communities like [User & Agents](https://www.userandagents.com/) or [Mozilla Builders](https://builders.mozilla.org/), in the near future.

There's plenty to talk about, which I'll save that for future updates, but I'll end on this note: I am confident that this new user agent is going to come, and it will be awesome. But will it be something that's owned by one company & designed to extract from us, or owned by all of us & designed to empower us? If you — like me — are in favor of the latter, then get involved.

What you can do:

- Please tell your friends about us, and send them a [link to our blog](https://unternet.co/blog)
- Try integrationg [Web Applets](https://github.com/unternet-co/web-applets) into your own software, report bugs, and contribute to our [applets directory](https://unternet.co/applets) so anyone can use what you build
- [Register for user research](https://forms.gle/E72aMBRHqJABUNhJ6) &mdash; we're settling on the most compelling early use cases and your input would be greatly appreciated

Over the next few updates I'll give you more details about alpha testing. In the meantime, if you want to lend a hand or have a chat, drop by our Discord anytime.
