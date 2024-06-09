import { Theme } from './theme';

type CssVariables = { [key: string]: string };

export const themeToCssVariables = (theme: Theme, parents?: string[]) => {
  let cssVariables: CssVariables = {};

  for (const [key, value] of Object.entries(theme)) {
    if (typeof value === 'string') {
      cssVariables[`--${[...(parents ?? []), key].join('-')}`] = value;
    } else {
      cssVariables = {
        ...cssVariables,
        ...themeToCssVariables(value, [...(parents ?? []), key]),
      };
    }
  }

  return cssVariables;
};
