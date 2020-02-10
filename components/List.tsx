import * as React from 'react'
import ListItem from './ListItem'
import { Movies } from '../interfaces';
import '../styles/list.scss';

type Props = {
  items: Movies[];
};

const List: React.FunctionComponent<Props> = ({ items }) => (
  <div className="grid container">
    {items && items.map(item => (
      <div className="item" key={item.id}>
        <ListItem data={item} />
      </div >
    )) || <div className="errorMSg">Error: due to some technical issues movies details are not available  </div> }
  </div>
)

export default List;
