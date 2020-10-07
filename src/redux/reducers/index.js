import { combineReducers } from 'redux';
import { movie } from './movie.reducer';
import { series } from './series.reducer';

const rootReducer = combineReducers({
	movie,
	series,
});

export default rootReducer;
