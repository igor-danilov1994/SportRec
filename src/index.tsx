import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {QueryClientProvider} from 'react-query';

import './index.css';
import './styles/global.css';
import {ErrorBoundary} from "./components/ErrorBoundary";
import {App} from "./App";
import {LanguageProvider} from "./store/languageContect";
import {queryClient} from 'api/queryClient';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
              <Router>
                  <LanguageProvider>
                      <App />
                  </LanguageProvider>
              </Router>
          </QueryClientProvider>
      </ErrorBoundary>
  </StrictMode>
);

reportWebVitals();
