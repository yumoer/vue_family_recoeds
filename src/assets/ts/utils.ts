import {userThemeStore} from "@/stores/theme";
const themeStore = userThemeStore()
console.log(themeStore.isLight)
export const themeChange = function themeChange(){
    const body = document.documentElement as HTMLElement;
    if (themeStore.isLight) {
        themeStore.setTheme()
        body.setAttribute('data-theme', 'dark');
    }else {
        themeStore.setTheme()
        body.setAttribute('data-theme', '');
    }
}
