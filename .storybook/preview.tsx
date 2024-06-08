import { theme } from "../src/theme/theme";
import { themeToCssVariables } from "../src/theme/themeToCssVariables";
import React from "react";
import type { StoryFn } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <div style={themeToCssVariables(theme)}>
      <Story />
    </div>
  ),
];
