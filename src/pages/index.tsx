import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import DisplayInfo from '../components/DisplayInfo';
import Searchbar from '../components/Searbar';
// import { useSetInfo } from './utils/useSetInfo';

interface indexProps {}

const Index: React.FC<indexProps> = ({}) => {
	// const [currentDate, setCurrentDate] = useState('');
	// const [info] = useSetInfo(currentDate);

	return (
		<div>hello world</div>
		// <Box container direction='column'>
		// 	<Box item xs={12}>
		// 		<Searchbar onDate={(newDate) => setCurrentDate(newDate)} />
		// 	</Box>
		// 	<Box item>
		// 		<DisplayInfo info={info} />
		// 	</Box>
		// </Box>
	);
};

export default Index;
