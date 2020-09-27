import { combineReducers, Reducer } from "redux";
import reducer from './app/reducer';
import { ActionTypes, IAppState } from "./app/types";

export interface IApplicationState {
  app: IAppState
}

const rootReducer: Reducer<IApplicationState, ActionTypes> = combineReducers({
  app: reducer,
});

export default rootReducer;