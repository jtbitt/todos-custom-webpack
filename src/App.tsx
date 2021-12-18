import { StrictMode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import { store } from '@store';
import { LoadingIndicator } from '@components';

import { ErrorBoundary } from './ErrorBoundary';
import { Layout } from './Layout';
import { Routes } from './Routes';

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <CssBaseline>
            <Layout>
              <ErrorBoundary>
                <Suspense fallback={<LoadingIndicator />}>
                  <Routes />
                </Suspense>
              </ErrorBoundary>
            </Layout>
          </CssBaseline>
        </Router>
      </Provider>
    </StrictMode>
  );
};
