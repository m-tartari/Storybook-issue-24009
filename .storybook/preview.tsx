/* istanbul ignore file */

import React from "react";
import { Preview } from "@storybook/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { initialize as initializeMSW, mswLoader } from "msw-storybook-addon";

import theme from "../src/style/theme";
import themeMUI from "./ThemeMUI";

// Initialize MSW
initializeMSW();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themeMUI,
    },
    msw: {
      handlers: {},
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  loaders: [mswLoader],
};

export default preview;
