import * as React from 'react';
import { mount } from 'enzyme';
import ListItem from '../components/ListItem';
import { AppContextInterface, AppContextProvider } from '../components/AppContext';
import { itemsFull, results } from './items';

let tree: any;
const result: any = results && results[0] || [];
const sampleAppContext: AppContextInterface = {
  movieRootPath: 'https://image.tmdb.org/t/p/w300',
  movieList: itemsFull,
};
beforeEach(() => {
  tree = mount(<AppContextProvider value={sampleAppContext}>
    <ListItem data={result} /></AppContextProvider>);
});
describe('components', () => {
  describe('List', () => {
    it('renders List Item component correctly', () => {
      expect(tree.debug()).toMatchSnapshot();
    });
  });
});
