import ReactDOM from 'react-dom/client';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
);

