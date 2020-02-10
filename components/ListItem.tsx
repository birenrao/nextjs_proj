import * as React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Movies } from '../interfaces';
import { AppContextConsumer } from './AppContext';
type Props = {
  data: Movies;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <AppContextConsumer>
    {appContext => appContext && (
  <Link href="/movies/[id]" as={`/movies/${data.id && data.id || 0}`}>
    <a>
      <h4>{data.title}</h4>
      <div className="imageContainer">
    <LazyLoadImage
      alt={data.title}
      effect="blur"
      delayTime={300}
      src={`${appContext.movieRootPath}${data.backdrop_path}`}  />
  </div>
  <p>{data.overview}</p>
    </a>
  </Link>)}
  </AppContextConsumer>
);

export default ListItem;
