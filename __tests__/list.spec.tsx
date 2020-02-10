import * as React from 'react';
import { mount } from 'enzyme';
import List from '../components/List';
import results from './items';

let tree: any;
const result: any = results && results || [];
beforeEach(() => {
  tree = mount(<List items={result} />);
});
describe('components', () => {
  describe('List', () => {
    it('renders List component correctly', () => {
      expect(tree.debug()).toMatchSnapshot();
    });
  });
});
