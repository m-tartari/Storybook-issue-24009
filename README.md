# Storybook v7.4.0 bad `import { composeStories } from "@storybook/react"` while testing

To reproduce the error install dependecies and run the tests:

```shell
npm ci
npm run test
```

or

```shell
yarn install --frozen-lockfile
yarn runtest
```

the test fails with:

```
 FAIL  src/ToggleButton/ToggleButton.test.tsx
  ● Test suite failed to run

    Cannot find module '@storybook/core-events/preview-errors' from 'node_modules/@storybook/preview-api/dist/index.js'

    Require stack:
      node_modules/@storybook/preview-api/dist/index.js
      node_modules/@storybook/react/dist/index.js
      src/ToggleButton/ToggleButton.test.tsx

      12 | // Imports a specific story for the test
      13 | import { toggleButtonClasses as classes } from "@mui/material/ToggleButton";
    > 14 | import { composeStories } from "@storybook/react";
         | ^
      15 | import * as stories from "./ToggleButton.stories";
      16 | import userEvent from "@testing-library/user-event";
      17 |

      at Resolver.resolveModule (node_modules/jest-resolve/build/resolver.js:324:11)
      at Object.<anonymous> (node_modules/@storybook/preview-api/dist/index.js:6:402)
      at Object.<anonymous> (node_modules/@storybook/react/dist/index.js:1:1492)
      at Object.<anonymous> (src/ToggleButton/ToggleButton.test.tsx:14:1)
      at TestScheduler.scheduleTests (node_modules/react-scripts/node_modules/@jest/core/build/TestScheduler.js:333:13)
      at runJest (node_modules/react-scripts/node_modules/@jest/core/build/runJest.js:404:19)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.278 s
Ran all test suites.
```
