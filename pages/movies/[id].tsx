import * as React from 'react'
import { NextPageContext } from 'next'
import getConfig from 'next/config';
import { Movies } from '../../interfaces'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'
import { dataFetchWrapper } from '../../utils/apiCall';
import { AppContextInterface, AppContextProvider } from '../../components/AppContext';
const { publicRuntimeConfig } = getConfig();
type Props = {
  item?: Movies
  errors?: string,
};

class InitialPropsDetail extends React.Component<Props> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query;
      const item = await dataFetchWrapper(
        `https://api.themoviedb.org/3/movie/${Array.isArray(id) ? id[0] : id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`,
      );
      return { item  };
    } catch (err) {
      return { errors: err.message };
    }
  }

  render() {
    const { item, errors } = this.props;
    const sampleAppContext: AppContextInterface = {
      movieRootPath: publicRuntimeConfig.imageRootPath,
      movieList: item,
    };
    if (errors) {
      return (
        <Layout title={'Error'}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    return (
      <AppContextProvider value={sampleAppContext}>
      <Layout
        title={`${
          item ? item.title : 'Movie Details'
        }`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
      </AppContextProvider>
    );
  }
}

export default InitialPropsDetail;
