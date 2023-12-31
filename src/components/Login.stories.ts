import { Meta, Story } from "@storybook/vue3";
import Login from "./Login.vue"; // Adjust the path to your component

export default {
  title: "Components/Login",
  component: Login,
} as Meta;

const Template: Story = (args) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
