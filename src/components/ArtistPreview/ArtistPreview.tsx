import React from 'react';
import { Artist } from '../../models/Artist';
import './ArtistPreview.scss';

type Props = {
  artist: Artist;
}

export const ArtistPreview: React.FC<Props> = (props) => {
  const { artist } = props;
  return (
    <div className="ArtistPreview">
      {artist.title}
    </div>
  );
}
