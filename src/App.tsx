import React, { useEffect } from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import { reduxWorks } from './store/app/actions';
import { IApplicationState } from './store/rootReducer';

const App: React.FC = () => {
  const message = useSelector((state: IApplicationState) => state.app.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reduxWorks());
  });

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
