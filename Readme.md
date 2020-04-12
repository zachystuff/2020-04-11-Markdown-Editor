# Today's Objective: Markdown Editor

## My Entry

Simple Markdown Editor by Zachycodes

<img src="editor.gif" alt="editor gif">


### [Live Demo](https://zachycodes-markdown-editor.herokuapp.com/)

## Authors

* **Zach Yusuf** - *Initial work* - [Simple Markdown Editor by Zachycodes](https://github.com/zachystuff/2020-04-11-Markdown-Editor)

### Technologies Used

<table style="{ empty-cells: hide }">
  <tr>
  </tr>
  <tr>
    <td align="center"><b>Front-end<b></td>
    <td align="center"><b>Back-end<b></td>
    <td align="center"><b>Deployment<b></td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/></td>
    <td align="center"><img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" title="Node.js" width="60px"/></td>
    <td align="center"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--K2q0A5SX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/2elgd5zp07wkeilkna63.png" alt="Heroku" title="Heroku" width="60px"/></td>
  </tr>
  <tr>
    <td align="center"><img src="https://i.redd.it/3vr72d9jitw21.png" alt="CSS_Modules" title="CSS_Modules" width="80px"/></td>
    <td align="center"><img src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png" alt="Express" title="Express" width="60px"/></td>
    <td></td>
  </tr>
</table>

#### NPM modules

1.) Dual Scroll with [react-scroll-sync](https://www.npmjs.com/package/react-scroll-sync).
2.) Markdown Logic with [showdown](https://www.npmjs.com/package/showdown).

## Prize

$25 CAD Amazon gift card + bragging rights.

Tip: Read the [General Information Document](General%20Information.md) for more info on how to get started and submit.

## Objective

Today's objective is to create your own Markdown Editor.

Markdown, as you probably already know, is a formatting language for text-based documents. This document is written in Markdown. You can see its source to get a taste for what Markdown looks like.

Some examples of Markdown Editors include:

* [StackEdit](https://stackedit.io/) (simple web-based)
* [Dillinger](https://dillinger.io/) (simple web-based)
* [Typora](https://typora.io/) (installed, with advanced features)
* [hackmd](https://hackmd.io/) (this is a lot more than just a simple markdown editor)

## Requirements

Create a Markdown editor, like the above, that has the following components:

* Input area
* Compilation logic (you can use a library for this)
* Preview panel (no need to do live preview, using a submit button is fine)

Also, you should try to have a good stylesheet for the output HTML (you can use something like Bootstrap, Bulma, etc.)

### Bonus points

You get bonus points for any features other than the above that you can successfully demo. 

For example:

* Live preview (where your edits in the input area automatically show up in the preview panel)
* Syntax highlighting for input area
* Selectable themes for input area
* Selectable themes for preview panel
* Print to PDF
* Locally installed (using Electron, for example)
* Responsive design 

That's it!

The most interesting, useful, and cool designs will have a chance of winning -- and they must be written well, too. So, get creative :-)

## How to build a simple markdown editor

Building a markdown editor is remarkably simple. You can use libraries for a lot of the functionality, and stitch them together using JavaScript logic.

Here are some suggested components for the various components above:

### Input Area - Suggested Libraries

* CodeMirror
* Ace Editor

### Compilation Logic

* [Showdown](https://github.com/showdownjs/showdown)
* [markdown-it](https://github.com/markdown-it/markdown-it)
* [markedjs](https://github.com/markedjs/marked)

### Preview Panel

Well, for this one, you just output the compiled HTML to the DOM. :-)

## Frameworks:

It is completely possible to build this using jQuery. You can use React, Vue, Angular if you wish.

## Restrictions

* Your project must use JavaScript.

There are no other restrictions.

## Tips for success:

1. The project is intentionally simple so you can focus on code quality.
1. The requirements are intentionally minimalistic so you can get as creative as you'd like.
1. You get a LOT of time for code review comments. So you can win even if you feel your project isn't great, simply on the strength of your code review comments!
1. Keep in mind, 33% of your score is based on aesthetic appeal! So try to make it look nice.
