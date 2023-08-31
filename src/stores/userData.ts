import { defineStore } from 'pinia';

interface UserData {
  data: any; 
  userFound: boolean;
}

export const userStore = defineStore('user', {
  state: (): UserData => ({
    data: {},
    userFound: false
  }),
  actions: {
    addUserData(data: any): void {
      this.data = data;
    },
    setUserLoggedIn(value: boolean): void {
      this.userFound = value;
    }
  },
  getters: {
    getData(state): any {
      return state.data;
    },
    getUserLoggedIn(state): boolean {
      return state.userFound;
    },
    getUserInfo(state): any {
      return state.data;
    }
  }
});

export default userStore;
