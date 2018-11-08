import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from './Dashboard';

class App extends Component {
	render() {
	return (
	  <main>
					<BrowserRouter>
								<Route exact path="/" component={Dashboard} />
					</BrowserRouter>

	  </main>
	);
	}
}

export default App;
