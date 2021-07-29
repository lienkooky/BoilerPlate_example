import { combineReducers } from 'redux';
import user from './User_reducer';
// redux combineReducuers => rootReducer의 reducer들 한번에 합친다.
// 여기서 쓴 모든 것들이 index.js의 reducer로 감

const rootReducer = combineReducers({ user });

export default rootReducer;
