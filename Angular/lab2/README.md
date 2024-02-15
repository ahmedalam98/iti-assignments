# Lab2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

For package.json versions :

Major.Minor.Patch

\*2.1.3 ==> [3.3.2 - 2.3.5 - 2.1.5] ==> 3.3.2 ( not recommended because of major version change)
^2.1.3 ==> [3.3.2 - 2.3.5 - 2.1.5] ==> 2.3.5
~2.1.3 ==> [3.3.2 - 2.3.5 - 2.1.5] ==> 2.1.5

---

// main.ts

```
bootstrapApplication(AppComponent, appConfig).catch((err) =>
console.error(err)
);
```

// bootstrapApplication is not related to bootstrap css framework
// it is a (function) that bootstraps the application ( first lunched app - the first component to be loaded )
