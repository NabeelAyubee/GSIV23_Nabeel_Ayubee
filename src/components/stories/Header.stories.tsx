import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from "../Header";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/Header",
  component: Header,
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

const Template: Story<HeaderComponentProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a Header",
};
