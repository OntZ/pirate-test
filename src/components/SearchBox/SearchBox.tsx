import React, { useState } from 'react';
import { className } from '../../utils/className';
import './SearchBox.scss';

const cls = className('SearchBox')

type Props = {
  id: string;
  label: string;
  onSearch: (query: string) => void
}

export const SearchBox: React.FC<Props> = (props) => {
  const [query, setQuery] = useState('');
  const {id, label, onSearch} = props;

  return (
    <div className={cls()}>
      <label
        htmlFor={id}
        className={cls('label')}
      >
        {label}
      </label>
      <input
        id={id}
        className={cls('input')}
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <button
        className={cls('button')}
        onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
}
