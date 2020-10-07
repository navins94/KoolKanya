import { seriesConstants } from './../constants';
import { dynamicSort } from './../../utils';

const initialState = {};

export function series(state = initialState, action) {
	switch (action.type) {
		case seriesConstants.SERIES_REQUEST:
			return {
				...state,
				seriesListRequesting: true,
				seriesListSuccess: false,
				seriesListFailure: false,
			};
		case seriesConstants.SERIES_SUCCESS:
			const fetchedData = action.data;

			const filteredSeriesList = fetchedData.entries.filter(
				(series) =>
					series.programType === 'series' && series.releaseYear >= 2010,
			);

			const sortedSeriesList = filteredSeriesList
				.sort(dynamicSort('title'))
				.slice(0, 21);

			return {
				...state,
				seriesListRequesting: false,
				seriesListSuccess: true,
				seriesListFailure: false,
				seriesListData: sortedSeriesList,
			};
		case seriesConstants.SERIES_FAILURE:
			return {
				...state,
				seriesListRequesting: false,
				seriesListSuccess: false,
				seriesListFailure: true,
			};
		default:
			return state;
	}
}
