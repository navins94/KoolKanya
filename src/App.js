import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Series from './components/pages/Series';
import Movies from './components/pages/Movies';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/series" component={Series} />
				<Route path="/movies" component={Movies} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
