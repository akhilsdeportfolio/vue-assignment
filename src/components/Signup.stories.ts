import { Meta, Story } from "@storybook/vue3";
import Signup from "./Signup.vue"; // Adjust the path to your component

export default {
  title: "Components/Login",
  component: Signup,
} as Meta;

const Template: Story = (args) => ({
  components: { Signup },
  setup() {
    return { args };
  },
  template: '<Signup v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
