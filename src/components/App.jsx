import React, { useState } from 'react';
import '../styles/App.css';
import DisplayInfo from './DisplayInfo';
import Searchbar from './Searbar';

import { Grid } from '@material-ui/core';

import { useSetInfo } from '../hooks/useSetInfo';

function App() {
	const [currentDate, setCurrentDate] = useState('');
	const [info] = useSetInfo(currentDate);

	console.log('testing change');

	return (
		<Grid container direction='column'>
			<Grid item xs={12}>
				<Searchbar onDate={(newDate) => setCurrentDate(newDate)} />
			</Grid>
			<Grid item>
				<DisplayInfo info={info} />
			</Grid>
		</Grid>
	);
}

export default App;
