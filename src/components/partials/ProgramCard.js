import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = (props) => (
	<div className="st-program-card">
		<Link to="/" className="h-link">
			<img
				className="st-program-card__artbox"
				src={props.src}
				alt={props.title}
			/>
		</Link>
		<Link to="/" className="h-link">
			<h3 className="st-program-card__title h-ellipsis">{props.title}</h3>
		</Link>
	</div>
);

export default ProgramCard;
