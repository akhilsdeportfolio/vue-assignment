// stores/counter.js
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
    state: () => {
        return ({ email: "", password: "" })
    },
    actions: {
        addEmail(value) {
            this.email = value
        },
        addPassword(value) {
            this.password = value
        },
    },
})


export default useCounterStore;