import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getArtistReleases } from '../../api/getArtistReleases';
import { ReleasePreview } from '../../components/ReleasePreview/ReleasePreview';
import { Release } from '../../models/Release';
import { className } from '../../utils/className';
import './ArtistReleases.scss';

const cls = className('ArtistReleases')

enum SortBy {
  TITLE = 'title',
  YEAR = 'year'
}

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams> & {
}

export const ArtistReleases: React.FC<Props> = (props) => {
  const [releases, setReleases] = useState<Release[]>([])
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.YEAR)

  useEffect(() => {
    const getReleases = async () => {
      setReleases (await getArtistReleases(props.match.params.id, sortBy))
    }
    getReleases()
  }, [props.match.params.id, sortBy])

  return (
    <div className={cls()}>
      <div className="content-area">
        <h1 className="col-lg-12">
          Artist releases
        </h1>
        <div className="col-lg-12">
          <Link to="/">Home</Link>
        </div>
        <div className="col-lg-12">
          Sort by:
          <button onClick={() => setSortBy(SortBy.TITLE)}>Title</button>
          <button onClick={() => setSortBy(SortBy.YEAR)}>Year</button>
        </div>
        <div className="col-lg-12">
          <h2>Releases sorted by {sortBy}</h2>
        </div>
        <div className="col-lg-12">
          <div className="inner-grid-6">
            {releases.map(release => (
              <div key={release.id} className="col-lg-2">
                <ReleasePreview release={release}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
