import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      user: "",
    };
  },
  getters: {
    getState: (state) => {
      return state;
    },
  },
  actions: {
    updateState: function (data: any) {
      console.log(data)
      localStorage.setItem("user", data.user);
      localStorage.setItem("name", data.name);
      localStorage.setItem("token", data.token);
      this.$state.user = data.user;
      this.$state.name = data.name;
      this.$state.token = data.token;
    },
  },
});
