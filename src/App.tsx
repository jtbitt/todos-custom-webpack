import { StrictMode, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { CssBaseline } from '@material-ui/core';

// import { store } from '@store';
// import { LoadingIndicator } from '@components';

import { ErrorBoundary } from './ErrorBoundary';
// import { Layout } from './Layout';
import { Routes } from './Routes';

export const App = () => {
  return (
    <StrictMode>
      {/* <Provider store={store}> */}
      <Router>
        {/* <CssBaseline> */}
        {/* <Layout> */}
        <ErrorBoundary>
          {/* <Suspense fallback={<LoadingIndicator />}> */}
          <Routes />
          <div>Hello new boilerplate</div>
          {/* </Suspense> */}
        </ErrorBoundary>
        {/* </Layout> */}
        {/* </CssBaseline> */}
      </Router>
      {/* </Provider> */}
    </StrictMode>
  );
};
