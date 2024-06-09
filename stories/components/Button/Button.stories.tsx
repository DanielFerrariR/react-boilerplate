import type { Meta, StoryObj } from '@storybook/react';

import flag from 'src/assets/flag.svg';
import caret from 'src/assets/caret.svg';
import { Button, ButtonProps } from 'src/components/Button';

const meta: Meta<ButtonProps> = {
  component: Button,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    color: {
      defaultValue: 'primary',
    },
    disabled: {
      defaultValue: false,
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
    startIcon: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    label: 'Button',
    startIcon: flag,
  },
};

export const PrimaryWithCaret: Story = {
  args: {
    label: 'Button',
    endIcon: caret,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    color: 'secondary',
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    label: 'Button',
    color: 'secondary',
    startIcon: flag,
  },
};

export const SecondaryWithCaret: Story = {
  args: {
    label: 'Button',
    color: 'secondary',
    endIcon: caret,
  },
};
