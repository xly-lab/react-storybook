import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './index';
import { Header } from '../Header';
import { Button } from '../Button';
import { Page } from '../Page';

export default {
  title: 'Design System/test/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Index = Template.bind({});

Index.args = {
  title: (
    <Header
      user={{
        name: 'Jane Doe',
      }}
    />
  ),
  body: <Page />,
  footer: (
    <>
      <Button label="1" />
      <Button label="2" />
    </>
  ),
};
