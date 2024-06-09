import type { Meta, StoryObj } from '@storybook/react';

import sampleText from 'src/assets/sampleText.svg';
import { ArchIcon, ArchIconProps } from 'src/components/ArchIcon';

const meta: Meta<ArchIconProps> = {
  component: ArchIcon,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    amplitude: {
      control: {
        type: 'range',
        min: -50,
        max: 50,
        step: 10,
      },
      defaultValue: 0,
    },
  },
};

export default meta;

type Story = StoryObj<ArchIconProps>;

export const Default: Story = {
  args: {
    icon: sampleText,
  },
};
