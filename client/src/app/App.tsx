import "./styles/index.scss"
import { Main } from "pages/index";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/index";

function App() {
    
  const {theme} = useTheme()

    return (
      <div className={classNames("app", {}, [theme!])}>
        <Main />
      </div>
    );

  }

export default App;

