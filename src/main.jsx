// Libraries
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

// Component
import App from "./App.jsx";

// Context Providers
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

// Style
import "./index.css";

// Root element
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <LanguageProvider>
    <ThemeProvider>
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </LanguageProvider>
);
