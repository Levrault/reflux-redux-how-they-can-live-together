module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    // Required for our dynamic CSS theming => require(`./Button.${_BRAND_}.scss`);
    "import/no-dynamic-require": 0,
    // We use the 'import' plugin which allows for cases "flow" awareness.
    "no-duplicate-imports": 0,
    // A .jsx extension is not required for files containing jsx.
    "react/jsx-filename-extension": 0,
    // This rule struggles with flow and class properties.
    "react/sort-comp": 0,
    // We use global requires in various places, e.g. code splitting instances.
    "global-require": 0,
    // We use development dependencies (as react-test-renderer) in unit tests
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.spec.js"]}],
    // We can't guess what our object contains
    "react/forbid-prop-types": [0, { "forbid": ["object"] }],
    // enable quote in html
    "react/no-unescaped-entities": false
  },
  "globals": {
    // Following are symbols from testing libraries
    "afterEach": false,
    "beforeEach": false,
    "afterAll": false,
    "beforeAll": false,
    "describe": false,
    "it": false,
    "expect": false,
    "assert": false,
    "jest": false,
    "browser": false
  }
};
