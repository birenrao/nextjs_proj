import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Movies } from '../interfaces';
import ListDetail from '../components/ListDetail';
import { AppContextInterface, AppContextProvider } from '../components/AppContext';
import { itemsFull, results } from './items';

let tree: any;
const result: Movies = results && results[0] || [];
const sampleAppContext: AppContextInterface = {
  movieRootPath: 'https://image.tmdb.org/t/p/w300',
  movieList: itemsFull,
};
beforeEach(() => {
  tree = mount(<AppContextProvider value={sampleAppContext}>
    <ListDetail item={result} /></AppContextProvider>);
});
describe('components', () => {
  describe('List', () => {
    it('renders List detail component correctly', () => {
      expect(tree.debug()).toMatchSnapshot();
    });
  });
});
