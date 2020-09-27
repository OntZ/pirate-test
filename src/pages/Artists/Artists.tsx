import React, { useState, useEffect } from 'react';
import { searchArtists } from '../../api/search';
import { ArtistPreview } from '../../components/ArtistPreview/ArtistPreview';
import { Artist } from '../../models/Artist';
import './Artists.scss';

export const Artists: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([])

  useEffect(() => {
    const getArtists = async () => {
      setArtists(await searchArtists('nirvana'))
    }

    getArtists()
  }, [])

  return (
    <div className="Artists">
      <h1>Hi!</h1>
      <div className="content-area">
        {artists.map(artist => (
          <div className="col-lg-3">
            <ArtistPreview artist={artist}/>
          </div>
        ))}
      </div>
    </div>
  );
}
