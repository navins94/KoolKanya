import React, { useEffect } from 'react';
import Layout from '../layouts/Layout.js';
import ProgramCard from '../partials/ProgramCard.js';
import { connect } from 'react-redux';
import { movieActions } from '../../redux/actions';

const Movie = (props) => {
	useEffect(() => {
		const { dispatch } = props;
		dispatch(movieActions.getMovies());
	}, []);

	const {
		movieListData,
		movieListRequesting,
		movieListSuccess,
		movieListFailure,
	} = props;
	const movieList = (
		<div className="st-program-card__list">
			{movieListData &&
				movieListData.map((card, i) => (
					<ProgramCard
						key={`movie-card-${i}`}
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
							{movieListRequesting && 'Loading...'}
							{movieListSuccess && movieList}
							{movieListFailure && 'Oops, something went wrong...'}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

function mapStateToProps(state) {
	const {
		movieListData,
		movieListRequesting,
		movieListSuccess,
		movieListFailure,
	} = state.movie;
	return {
		movieListData,
		movieListRequesting,
		movieListSuccess,
		movieListFailure,
	};
}

export default connect(mapStateToProps)(Movie);
