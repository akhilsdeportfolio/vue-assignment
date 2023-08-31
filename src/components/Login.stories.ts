// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import LoginVue from './Login.vue';


const meta: Meta<typeof LoginVue> = {
  component: LoginVue,
};

export default meta;

type Story = StoryObj<typeof LoginVue>;

export const Login:Story={
  render:(args)=>({
    components:{LoginVue},
    template:'<LoginVue />'
  })
}
