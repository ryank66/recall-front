# RecallFront

## Purpose
This project demonstrates an angular front end hitting a restful service written in java. Users start out by selecting a year and make. A order list will populate with all models from that year and make. The list is alphabetically sorted and can be filtered using the search box. Upon selecting a model, the recall data table will populate with a list of recalls for the particular year/make/mode. The restful backend leverages the nhtsa api for its data.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## RESTful Services
All restful service requests are hardcoded to hit localhost:8080. Must deploy the recall rest repo locally for this to work!

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
