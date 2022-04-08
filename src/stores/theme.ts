import {defineStore} from 'pinia'

export const userThemeStore = defineStore('theme',{
    state:()=>({
        isLight:true
    }),
    actions:{
        setTheme(){
            this.isLight = !this.isLight
        }
    }
})
