import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import color from "@alabaster/common/color";
export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <div style={{ color: color.blueLightest, backgroundColor: color.blackAlpha80 }}> Colors</div>;

console.log(color)
export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
