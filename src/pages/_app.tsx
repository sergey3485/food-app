import * as React from 'react';
import type { AppProps } from 'next/app';
import { ExtendedNextPage } from '../shared/types/extended-next-page';
import { GlobalStyles } from '../app/styles/global';

type NewAppProps = AppProps & { Component: ExtendedNextPage };

const MyApp = ({ Component, pageProps }: NewAppProps) => {
  const LayoutComponent = Component.Layout ?? React.Fragment;
  return (
    <>
      <GlobalStyles />
      {/* <ResetStyles /> */}
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
};

export default MyApp;
