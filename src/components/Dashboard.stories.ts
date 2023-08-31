import { Meta, Story } from "@storybook/vue3";
import Dashboard from "./Dashboard.vue"; // Adjust the path to your component

export default {
  title: "Components/Login",
  component: Dashboard,
} as Meta;

const Template: Story = (args) => ({
  components: { Dashboard },
  setup() {
    return { args };
  },
  template: '<Dashboard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
