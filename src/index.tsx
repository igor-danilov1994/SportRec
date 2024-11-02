import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import './styles/global.css';
import {ErrorBoundary} from "./components/ErrorBoundary";
import {App} from "./App";
import {LanguageProvider} from "./store/languageContect";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <ErrorBoundary>
              <Router>
                  <LanguageProvider>
                      <App />
                  </LanguageProvider>
              </Router>
      </ErrorBoundary>
  </StrictMode>
);

reportWebVitals();
