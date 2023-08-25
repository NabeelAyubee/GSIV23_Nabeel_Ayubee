import React from "react";
import { Meta, Story } from "@storybook/react";
import Paragraph from "../Paragraph";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/Paragraph",
  component: Paragraph,
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

const Template: Story<HeaderComponentProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a Paragraph",
};
