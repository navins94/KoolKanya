import React, { useEffect } from 'react';
import Layout from '../layouts/Layout.js';
import ProgramCard from '../partials/ProgramCard.js';
import { connect } from 'react-redux';
import { seriesActions } from '../../redux/actions';

const Series = (props) => {
	useEffect(() => {
		const { dispatch } = props;
		dispatch(seriesActions.getSeries());
	}, []);

	const {
		seriesListData,
		seriesListRequesting,
		seriesListSuccess,
		seriesListFailure,
	} = props;
	const seriesList = (
		<div className="st-program-card__list">
			{seriesListData &&
				seriesListData.map((card, i) => (
					<ProgramCard
						key={`series-card-${i}`}
						title={card.title}
						src={card.images['Poster Art'].url}
					/>
				))}
		</div>
	);

	return (
		<Layout>
			<div className="st-scrollable-content">
				<div className="container">
					<div className="row">
						<div className="col">
							{seriesListRequesting && 'Loading...'}
							{seriesListSuccess && seriesList}
							{seriesListFailure && 'Oops, something went wrong...'}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

function mapStateToProps(state) {
	const {
		seriesListData,
		seriesListRequesting,
		seriesListSuccess,
		seriesListFailure,
	} = state.series;
	return {
		seriesListData,
		seriesListRequesting,
		seriesListSuccess,
		seriesListFailure,
	};
}

export default connect(mapStateToProps)(Series);
