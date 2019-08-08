This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Firefly

## Getting started
 
The app was built using `node v8.11.4` and `yarn v1.17.3`. I run `git v2.7.4` at time of writing. To kick off the app, do the following:
- Clone the repository: `git clone https://github.com/trevithj/firefly.git`
- Install dependencies: `cd firefly && yarn`
- Start the web server: `yarn run start`

I recommend using `yarn`, as it seems more stable around dependencies. But `npm` also should work:
- Install dependencies: `npm install`
- Start the web server: `npm start`

The app should open in a browser at `http://localhost:3000/`

## The App

While some of the styling has been attempted, this is only at a basic level.
Most of the effort is in making the basic app framework at least minimally functional.
So the top menu items work to change the main view.
And the welcome header can be dismissed via the agree/disagree options.
The font is `Open Sans` as requested, and some of the `Material Icons` images are implemented.

Styling has used Bootstrap classes where immediately convenient (panels, buttons, rows) 
but I have added inline css in several places, and some components have been split out into
their own code so they can be modified and styled later.
