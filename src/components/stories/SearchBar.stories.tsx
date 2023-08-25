import React from "react";
import { Meta, Story } from "@storybook/react";
import SearchBar from "../SearchBar";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/SearchBar",
  component: SearchBar,
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

const Template: Story<HeaderComponentProps> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "This is a SearchBar",
};
