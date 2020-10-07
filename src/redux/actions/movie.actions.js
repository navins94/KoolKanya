import { movieConstants } from './../constants';
import feedData from './../../assets/Mock/feed.json';

export const movieActions = {
	getMovies,
};

function getMovies() {
	return (dispatch) => {
		dispatch(request());
		setTimeout(() => {
			dispatch(success(feedData));
		}, 1000);
	};

	function request(data) {
		return { type: movieConstants.MOVIE_REQUEST, data };
	}
	function success(data) {
		return { type: movieConstants.MOVIE_SUCCESS, data };
	}
}
