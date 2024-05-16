import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import type { Preview } from '@storybook/react'
import '@/styles/index.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
