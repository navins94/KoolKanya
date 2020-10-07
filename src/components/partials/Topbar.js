import React from 'react';

const Topbar = (props) => (
	<div className="st-content-topbar">
		<div className="container">
			<div className="row">
				<div className="col">
					<h2 className="st-content-topbar__title">{props.title}</h2>
				</div>
			</div>
		</div>
	</div>
);

export default Topbar;
