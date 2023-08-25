import React from "react";
import { Meta, Story } from "@storybook/react";
import CardText from "../CardText";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/CardText",
  component: CardText,
  argTypes: {
    className: {
      control: "text",
    },
    styles: {
      control: "object",
    },
    children: {
      control: "object",
    },
  },
};

const Template: Story<HeaderComponentProps> = (args) => <CardText {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a CardText",
};
