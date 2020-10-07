import { seriesConstants } from './../constants';
import feedData from './../../assets/Mock/feed.json';

export const seriesActions = {
	getSeries,
};

function getSeries() {
	return (dispatch) => {
		dispatch(request());
		setTimeout(() => {
			dispatch(success(feedData));
		}, 1000);
	};

	function request(data) {
		return { type: seriesConstants.SERIES_REQUEST, data };
	}
	function success(data) {
		return { type: seriesConstants.SERIES_SUCCESS, data };
	}
}
