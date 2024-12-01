import "@fontsource/noto-sans-kr/400.css"
import "@fontsource/noto-sans-kr/700.css"
import "../src/index.css"

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
