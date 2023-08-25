import React from "react";
import { Meta, Story } from "@storybook/react";
import Image from "../Image";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/Image",
  component: Image,
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

const Template: Story<HeaderComponentProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a Image",
};
