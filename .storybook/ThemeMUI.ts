/* istanbul ignore file */
import { create } from "@storybook/theming";

import theme from "../src/style/theme";

export default create({
  base: theme.palette.mode,
  inputBg: theme.palette.background.default,
});
