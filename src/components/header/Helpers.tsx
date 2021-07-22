import { Theme } from "../../enums/Theme"
import { CgSun } from "react-icons/cg"
import { HiMoon } from "react-icons/hi";

type HeaderNavProp = {
    className: string,
    to: string,
    translationKey: string
}

export const getThemeIcon = (themeName: string) => {
    const iconColor = themeName === Theme.light ? "#F9D784" : "#A7A7A7";
    return themeName === Theme.dark ? (<HiMoon 
        strokeWidth={1} 
        size={20} 
        color={iconColor}
    /> ) : ( <CgSun
        strokeWidth={1}
        size={20}
        color={iconColor}
    /> )
}

export const changeTheme = (currTheme: string, setTheme: any) => {
    if (currTheme === Theme.light) {
        setTheme(Theme.dark);
        localStorage.setItem("theme", Theme.dark);
    } else {
        setTheme(Theme.light);
        localStorage.setItem("theme", Theme.light);
    }
}

export const headerNavProps: HeaderNavProp[] = [
    {
        className: 'homei',
        to: "/portfolio",
        translationKey: 'HEADER_HOME'
    },
    {
        className: 'ec',
        to: '/education',
        translationKey: 'HEADER_EDUCATION_AND_CERTIFICATION'
    },
    {
        className: 'xp',
        to: "/portfolio",
        translationKey: 'HEADER_PROJECTS'
    },
    {
        className: 'projects',
        to: "/portfolio",
        translationKey: 'HEADER_CONTACT_ME'
    },
    {
        className: 'cr',
        to: "/portfolio",
        translationKey: 'HEADER_EXPERIENCE'
    }
]