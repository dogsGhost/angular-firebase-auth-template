# Angular Project Template with Firebase Email Auth

Base for starting an Angular project that uses email/password for user authentication. 

**NOTE**: email verification is not included here.

If Angular CLI is not already installed, install it:

`npm install -g @angular/cli`

Install required packages:

`npm install`

In `src/environments/firebase.config.ts`, replace the placeholder values with the correct values from [your firebase project](https://console.firebase.google.com/).

In `src/app/home/home.component.html`, find the comments within the template tag for where to replace the contents with whatever component you want to display on the homepage when a user is logged in.
