import React from "react";
import { Meta, Story } from "@storybook/react";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import HomeIcon from "@mui/icons-material/Home";

interface HeaderComponentProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export default {
  title: "Components/NavBar",
  component: NavBar,
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

const Template: Story<HeaderComponentProps> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <SearchBar />
      <HomeIcon sx={{ color: "grey", marginRight: "2rem" }} />
    </>
  ),
};
