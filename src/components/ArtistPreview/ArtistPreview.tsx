import React from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../../models/Artist';
import { className } from '../../utils/className';
import './ArtistPreview.scss';

const cls = className('ArtistPreview')

type Props = {
  artist: Artist;
}

export const ArtistPreview: React.FC<Props> = (props) => {
  const { artist } = props;
  return (
    <div className={cls()}>
      <div className={cls('name')}>
        {artist.title}
      </div>
      <div className={cls('link')}>
        <Link to={`/artist/${artist.id}`}>
          Releases
        </Link>
      </div>
    </div>
  );
}
