import React from "react";
import { Meta, Story } from "@storybook/react";
import CardContainer from "../CardContainer";
import CardText from "../CardText";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/CardContainer",
  component: CardContainer,
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

const Template: Story<HeaderComponentProps> = (args) => <CardContainer {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <CardText>This is a CardContainer</CardText>,
};
