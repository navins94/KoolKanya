import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout.js';
import imgArtboxBg from './../../assets/img/placeholder.png';

const CategoryCard = (props) => (
	<div className="st-content-card">
		<Link to={`/${props.id}`} className="st-content-card-wrapper">
			<div className="st-content-card__artbox">
				<img
					className="st-content-card__artbox__img h-center"
					src={imgArtboxBg}
					alt="A movie cut board"
				/>
				<span className="st-content-card__artbox__text h-center">
					{props.id}
				</span>
			</div>
			<span className="st-content-card__label">Popular {props.id}</span>
		</Link>
	</div>
);

const Content = () => (
	<div className="st-scrollable-content">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="st-content-wrapper">
						<CategoryCard id="series" />
						<CategoryCard id="movies" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

const Index = () => (
	<Layout>
		<Content />
	</Layout>
);

export default Index;
