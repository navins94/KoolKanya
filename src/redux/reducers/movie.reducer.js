import { movieConstants } from './../constants';
import { dynamicSort } from './../../utils';

const initialState = {};

export function movie(state = initialState, action) {
	switch (action.type) {
		case movieConstants.MOVIE_REQUEST:
			return {
				...state,
				movieListRequesting: true,
				movieListSuccess: false,
				movieListFailure: false,
			};
		case movieConstants.MOVIE_SUCCESS:
			const fetchedData = action.data;

			const filteredMovieList = fetchedData.entries.filter(
				(movie) => movie.programType === 'movie' && movie.releaseYear >= 2010,
			);

			const sortedMovieList = filteredMovieList
				.sort(dynamicSort('title'))
				.slice(0, 21);

			return {
				...state,
				movieListRequesting: false,
				movieListSuccess: true,
				movieListFailure: false,
				movieListData: sortedMovieList,
			};
		case movieConstants.MOVIE_FAILURE:
			return {
				...state,
				movieListRequesting: false,
				movieListSuccess: false,
				movieListFailure: true,
			};
		default:
			return state;
	}
}
