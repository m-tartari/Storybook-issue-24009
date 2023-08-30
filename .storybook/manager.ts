/* istanbul ignore file */
import { addons } from '@storybook/addons'

import themeMUI from './ThemeMUI'

addons.setConfig({
  theme: themeMUI,
})
