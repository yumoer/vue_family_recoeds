import {defineStore} from 'pinia'

export const userThemeStore = defineStore('theme',{
    state:()=>({
        theme:'light'
    }),
    // actions:{
    //     setTheme(state,payload){
    //         state.theme = payload;
    //         // document.querySelector('body').className = payload;
    //     }
    // }
})
