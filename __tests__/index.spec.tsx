import * as React from 'react';
import { mount, shallow } from 'enzyme';
import IndexPage from '../pages/index';
import { items } from './items';

let tree: any;

beforeEach(() => {
  tree = shallow(<IndexPage items={items} pathname={''} />);
});
describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(<IndexPage />);
      expect(wrap.find('h1').text()).toBe('My Movies');
    });

    it('renders inadex page correctly', () => {
      expect(tree.debug()).toMatchSnapshot();
    });
  });

});
})
