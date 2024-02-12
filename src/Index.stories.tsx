import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icons } from "./index";

const meta: Meta<typeof Icons> = {
  title: "Marbella/Icons",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Icons>;

export const Primary: Story = (args: any) => (
  <div className="flex gap-2">
    <Icons.add className="w-20 h-20" />
    <Icons.arrowDown className="w-20 h-20" />
    <Icons.arrowUp className="w-20 h-20" />
    <Icons.billing className="w-20 h-20" />
    <Icons.bringToFront className="w-20 h-20" />
  </div>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
