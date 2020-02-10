import * as React from 'react';
import { Movies } from '../interfaces';
import { AppContextConsumer } from './AppContext';
import '../styles/listDetail.scss';
type ListDetailProps = {
  item: Movies,
};

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: Movies,
}) => (
  <AppContextConsumer>
    {appContext => appContext && (
  <div className="container">
    <div className="movieDetails">
    <h1>{Movies.title}</h1>
    <img src={`${appContext.movieRootPath}${Movies.poster_path}`}  alt={Movies.title} />
    <p> {Movies.overview}</p>
    </div>
  </div>)}
  </AppContextConsumer>
)

export default ListDetail;
