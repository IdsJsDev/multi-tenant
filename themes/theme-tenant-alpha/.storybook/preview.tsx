import type { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/tokens.css'
import './storybook.css'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        Default: 'theme-default',
        Alpha: 'theme-alpha',
        Beta: 'theme-beta',
        Gamma: 'theme-gamma',
      },
      defaultTheme: 'Default',
      parentSelector: 'body',
    }),
  ],
}

export default preview
