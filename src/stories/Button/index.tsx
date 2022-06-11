import React from 'react';
import './index.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * border-radius
   */
  radius?: number;
  /**
   * theme color
   */
  theme?: 'dark' | 'light';
  /**
   * font color
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  radius = 5,
  label,
  theme,
  color,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, theme].join(' ')}
      style={{
        backgroundColor,
        borderRadius: radius + 'px',
        color,
      }}
      {...props}
    >
      {label}
    </button>
  );
};
