sailsjs-angularjs-passportjs-todo
======

a simple todo app with SailsJS and AngularJS (+PassportJS)

authenticate with:

* Dropbox 
* GitHub 
* Google+

Passport supports authentication with an extensive [list of third-party providers](http://passportjs.org/guide/providers/). Contribute with more.  

# Sails

Sails.js makes it easy to build custom, enterprise-grade Node.js apps. It is designed to resemble the MVC architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app development. It's especially good for building realtime features like chat.

[https://github.com/balderdashy/sails](https://github.com/balderdashy/sails)

# Angular

AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly. It automatically synchronizes data from your UI (view) with your JavaScript objects (model) through 2-way data binding. To help you structure your application better and make it easy to test, AngularJS teaches the browser how to do dependency injection and inversion of control. Oh yeah and it also helps with server-side communication, taming async callbacks with promises and deferreds; and make client-side navigation and deeplinking with hashbang urls or HTML5 pushState a piece of cake. The best of all: it makes development fun!

[https://github.com/angular/angular.js](https://github.com/angular/angular.js)

# Passport

Passport is Express-compatible authentication middleware for Node.js.

[https://github.com/jaredhanson/passport](https://github.com/jaredhanson/passport)

## How to

### node.js
```
$ git clone https://github.com/oitozero/sailsjs-angularjs-passportjs-todo
$ cd sailsjs-angularjs-todo
!! configure credentials in config/middleware.js !!
$ npm install
$ sails lift

```