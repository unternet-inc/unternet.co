---
layout: docs
title: Documentation
---

# Getting started

We are excited for you to build your first applet. Let's dive in!

## What we will be building

You will be building a simple applet that says hello when we send it an action. This tutorial will walkthrough how an applet communicates with an external source and is able to pass data through the communication protocol. In addition, we will cover integrating the SDK to a web app, inspecting it during development, building and deploying it so you get a feel for the end to end process. Let's get started!

![](/assets/docs/web-applets-example.png)

## Setup

First let's build a new web app. We have a handy script for you that will instantiate a simple web app. Later, we will see how to add an applet to an existing web app in your favorite framework. For now, let's keep things simple.

```jsx
npx @web-applets/create
```

**Folder structure**

```jsx
.
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── icon-128x128.png
│   └── manifest.json
├── src
│   └── main.ts
└── vite.config.js
```

This is a single page app that is loaded on the main page `index.html`. The index page loads 2 files:

- A manifest file in the public directory - The web app manifest tells the browser how your Progressive Web App should behave when installed. In addition, we will use this to add initial actions for your applet.
- Loads a JS module - `main.ts` This is where we will be adding code to define the functionality of our applet.

## Add some functionality

We will define a `set_name` action in our manifest file for our applet to use. Open the manifest file and see the `actions` section. If it isn't already populated, copy the below array and replace the empty actions array with this.

```jsx
{
  // ...
  "actions": [
    {
      "id": "set_name",
      "description": "Sets the name of the user.",
      "parameters": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          }
        }
      }
    }
  ]
}
```

In the actions array in our manifest file, we are providing information about our action such as an ID, description and typing the parameters it will accept. Our action, as per this definition, expects an Object with the key name and a string value.

```jsx
{
  name: 'some name here';
}
```

### Modify the view

So far we have only defined the action. We need to create a view that will respond to this action. Let's take a look at our `index.html`. We have a `<span>` with an `id`. We will use the value we receive from the action and populate it here.

```jsx
Hello! <span id="name">whoever you are</span>.
```

### Modify the script

So far we have defined an action and created a placeholder for it in the view layer. Let's connect the two. Open the `main.ts` file. You will notice 2 things:

1. Code that adds an action handler. The action handler uses the context object and updates shared data here
2. A callback function for the context to execute when new data is received. We will query the `<span>` element we added by ID and update the inner text to reflect new data.

```jsx
import { applets } from '@web-applets/sdk';

const context = applets.getContext();

// Define a 'set_name' action, and make it update the shared data object with the new name

context.addActionHandler('set_name', ({ name }) => {
  context.data = { name };
});

// Whenever the data is updated, update the view

context.ondata = () => {
  const nameElement = document.getElementById('name');
  if (nameElement) {
    nameElement.innerText = context.data.name;
  }
};
```

With this you have all 3 pieces required:

- A location where you define all your actions
- An orchestration layer that handles actions, global context and its properties as well as updates the view
- View layer where new changes will be rendered

### Inspect your applet

While developing, it is helpful to have a handy way to inspect your applet and be able to test these actions. We built a handy inspector that allows you to do just that. Let's install it by running `npx @web-applets/inspector`. This will install the inspector and run it in a separate port. Click the link and you should see an empty page where you can load any applet to inspect.

![](/assets/docs/web-applets-inspector.png)

Once the inspector is open, let's enter our web app's URL `http://localhost:5173/` in the inspector. You will see that the inspector loads the app on one side and displays all actions on the other side. Of course, we only have one action, but you can imagine how this would be beneficial when we have many.

![](/assets/docs/web-applets-inspector-url.png)

> **Good to know**: The inspector is a Node express server running on a different port and allows you to inspect your web app. It has some additional UI to test your actions easily.

Now that you have a handy way to test your actions, let's dispatch a sample event. In the params section, let's give it data in the format it expects.

```javascript
{
   "name": "Jane"
}
```

When you click "dispatch action", you can see the view layer respond according to the handler we had written.

![](/assets/docs/web-applets-inspector-url.png)

Congratulations! 🎉

You just created a web applet that can respond to externally dispatched events in a meaningful way.

### Build

Now that you have verified that the actions work as expected, you can build your application for distribution. Run `npm run build`. Vite should create a JS bundle and an HTML page for your applet.

### Deploy

If your applet is available on a URL, it will work in any environment where our SDK is installed. You can choose any vendor to host a static asset like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/). To deploy on vercel, use the following steps

- You can initiate a git repository by using `git init`.
- Login to [Github](https://github.com/) (or any other git provider) and create a new repository
- Follow instructions to add your github repo as an origin to your local repository

```javascript
git remote add origin git@github.com:your-username/my-applet.git
```

- Run `git push -u origin main`to have your files available in the repo
- Now you can follow the guide in vercel.com to deploy your repo and get the deployment URL

### Taking it forward

You can extrapolate this idea to define multiple actions that make sense to the applet you are creating. By having a list of actions that can be dispatched externally and writing your action handlers to respond to these events, you can create rich experiences for your consumers.

If you build something cool, make a pull request so we can list your applet in our directory for others to view and use
