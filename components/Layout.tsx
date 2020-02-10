import * as React from 'react';
//import Link from 'next/link';
import Head from 'next/head';
import '../styles/layout.scss';
type Props = {
  title?: string;
};
const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
            rel="shortcut icon"
            href="/static/favicon/favicon.ico"
          />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="content">
        <header className="app-header">
          <div className="container">
            <h1>My Movies</h1>
          <div className="sub-header">
          <p>
            Select movie for more details.
          </p>
        </div>
        </div>
        </header>
        {children}
      </div>
      <footer className="app-footer">
      © Biren Rao 2020 - 2021 
      </footer>
    </div>
  );

export default Layout;
