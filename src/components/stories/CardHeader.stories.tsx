import React from "react";
import { Meta, Story } from "@storybook/react";
import CardHeader from "../CardHeader";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/CardHeader",
  component: CardHeader,
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

const Template: Story<HeaderComponentProps> = (args) => <CardHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a CardHeader",
};
