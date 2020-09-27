import React, { useState } from 'react';
import { searchArtists } from '../../api/search';
import { ArtistPreview } from '../../components/ArtistPreview/ArtistPreview';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Artist } from '../../models/Artist';
import './Artists.scss';

export const Artists: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([])
  const getArtists = async (nameQuery: string) => {
    setArtists(await searchArtists(nameQuery))
  }

  return (
    <div className="Artists">
      <div className="content-area">
        <h1 className="col-lg-12">Artist search</h1>
        <div className="col-lg-12 bottom-spacing">
          <SearchBox
            id="artistSearch"
            label="Search by artist name"
            onSearch={getArtists}
          />
        </div>
        {artists.map(artist => (
          <div key={artist.id} className="col-lg-3">
            <ArtistPreview artist={artist}/>
          </div>
        ))}
      </div>
    </div>
  );
}
