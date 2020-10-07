import React from 'react';
import Header from './Header';
import Footer from './Footer';

const StLayout = (props) => (
	<div className="st-app">
		<Header />
		<main className="l-main">{props.children}</main>
		<Footer />
	</div>
);

export default StLayout;
