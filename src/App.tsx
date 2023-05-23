import React from 'react';
import CreateNinja from './components/ninja/CreateNinja';
import NinjaList from './components/ninja/NinjaList';

function App() {
	return (
		<React.Fragment>
			<CreateNinja />
			<NinjaList />
		</React.Fragment>
	);
}

export default App;
