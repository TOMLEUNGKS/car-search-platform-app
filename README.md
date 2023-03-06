# Car-Trading-App with @ionic/vue

Ionic Framework integration for Vue 3 apps.

## Development 

1. Install Ionic Cli:

```shell
npm install -g @ionic/cli
```

2. Install project dependencies :

```shell
npm install
```

3. Run local development server :

```shell
ionic serve
````

## Tests

* E2E Tests are found in the `packages/vue/test-app/tests` directory and use Cypress.
* When making changes to `@ionic/vue` or `@ionic/vue-router` you can run `npm run sync` in the `test-app` directory to ensure that the test application is using your built changes. Be sure to build in the `vue` and `vue-router` directories first.
* Tests can be run in headless mode by running `npm run cypress`.
* If you want to open the Cypress test runner, you can run `node_modules/.bin/cypress open`.
* Bug fix and feature PRs should have new tests verifying the PR functionality.

## Contributing

See our [Contributing Guide](https://github.com/ionic-team/ionic-framework/blob/main/.github/CONTRIBUTING.md).

## Need Help?

Post your question on the [Ionic Forum](http://forum.ionicframework.com/).
