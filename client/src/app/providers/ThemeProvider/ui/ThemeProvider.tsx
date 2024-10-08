import { FC, useMemo, useState, ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme,  ThemeContext } from "shared/lib/context/ThemeContext"


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProvider {
    children?: ReactNode;
}
  

const ThemeProvider: FC<ThemeProvider> = ({children}) => {


    const [theme, setTheme] = useState<Theme>(defaultTheme)



    const defaultProps = useMemo( () => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value = { defaultProps }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider