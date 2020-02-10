import * as React from 'react';
import Link from 'next/link';
import List from '../components/List';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { dataFetchWrapper } from '../utils/apiCall';
import getConfig from 'next/config';
import { AppContextInterface, AppContextProvider } from '../components/AppContext';
const { publicRuntimeConfig } = getConfig() || {};
type Props = {
  items: any;
};

const IndexPage: NextPage<Props> = ({ items }) => {
  const sampleAppContext: AppContextInterface = {
    movieRootPath: publicRuntimeConfig && publicRuntimeConfig.imageRootPath || '',
    movieList: items,
  };
  return (
    <AppContextProvider value={sampleAppContext}>
      <Layout>
        {items && <List items={items.results} /> || <div className="errorMSg">
          Error: due to some technical issues movies details are not available  </div>}
        <div className="goupCTA">
          <Link href="/">
            <a>Go home</a>
          </Link>
        </div>
      </Layout>
    </AppContextProvider>);
};

IndexPage.getInitialProps = async () => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items = await dataFetchWrapper(
    'https://api.themoviedb.org/3/discover/movie?api_key=c857fa67fba523ad3ce66df18e7ab279&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
  );
  return { items };
};

export default IndexPage;
