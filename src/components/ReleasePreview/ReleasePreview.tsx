import React from 'react';
import { Link } from 'react-router-dom';
import { Release } from '../../models/Release';
import { className } from '../../utils/className';
import './ReleasePreview.scss';

const cls = className('ReleasePreview')

type Props = {
  release: Release;
}

export const ReleasePreview: React.FC<Props> = (props) => {
  const { release } = props;
  return (
    <div className={cls()}>
      <div className={cls('name')}>
        {release.title}
      </div>
      <div className={cls('year')}>
        {release.year}
      </div>
    </div>
  );
}
