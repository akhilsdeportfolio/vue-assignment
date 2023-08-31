import {defineStore} from 'pinia';



const userStore= defineStore('user',{
    state:()=>{
        return ({data:{},userFound:false})
    },
    actions:{
        addUserData:function(data)
        {
            this.data=data;
        },
        setUserLoggedIn:function(value)
        {
            this.userFound=value
        }
    },
    getters:{
        getData:(state)=>state.data,
        getUserLoggedIn:(state)=>state.userFound,
        getUserInfo:(state)=>{
            return state.data
        }
    }
})

export default userStore;