import React from 'react';
import './Button.scss';
import classnames from 'classnames';

export interface ButtonProps {
  className?: string;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: string;
  label: string;
  startIcon?: string;
}

const Button = ({
  className,
  color = 'primary',
  disabled = false,
  endIcon: EndIcon,
  label,
  startIcon: StartIcon,
}: ButtonProps): React.ReactElement => (
  <button
    type="button"
    className={classnames('button', color && `button__${color}`, className)}
    disabled={disabled}
  >
    {StartIcon && <StartIcon />}
    {label}
    {EndIcon && <EndIcon />}
  </button>
);

export default Button;
