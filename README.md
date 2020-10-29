# Venturus Squad Management Tool

### App dependencies

* yarn v1.22.5
* node v10.15.3

### Installing dependencies 
In the root directory of the app, run this command:

`$ yarn install` 

## Running app

To run app on production mode, run the command bellow:

`$ yarn build`

This command will build the css library, run react in production mode and serve in [localhost on the port 5000](http://localhost:5000).

## Testing code

To run tests run the following commands:

`$ yarn test` for test in development

and

`$ yarn test:coverage` for run test with coverage. PS: this test generate a directory named `coverage` on the root of the project. You can check a more detailed status of the code coverage on `coverave/lcov-report/index.html`.

## Code Architecture

It contains code architecture commonly used by the community, with some modifications:

* `src/assets` : contains all the static files.
* `src/common` : contains the common components used in the app.
* `src/contexts` : contains the contexts and hooks of the application
* `src/pages` : contains the app pages. Note that local components where created inside each page necessities.
* `src/services` : contains the services used on the app.
* `src/utils` : contains utils shared in the app.

### StyleGuide

This project utilizes [AirBnb StyleGuide](https://github.com/airbnb/javascript/tree/master/react) with some modifications in the rules:
* no-console: "warn"
* react/jsx-props-no-spreading: "off"
* no-alert: "off"

## Here are some GIFS of the production app

This app is mobile first layout:

![Alt Text](https://github.com/dmarcogabriel/venturus-squad-management-team/tree/master/assets/responsive.gif)
![Alt Text](https://github.com/dmarcogabriel/venturus-squad-management-team/tree/master/assets/responsive-2.gif)

You can search for players and drag them to the position:

![Alt Text](https://github.com/dmarcogabriel/venturus-squad-management-team/tree/master/assets/search-drag-drop.gif)

It brings to you some metrics:

![Alt Text](https://github.com/dmarcogabriel/venturus-squad-management-team/tree/master/assets/screenshot.png)


