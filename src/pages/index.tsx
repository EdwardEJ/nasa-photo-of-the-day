import {
	Box,
	Button,
	Center,
	FormErrorMessage,
	Heading,
} from '@chakra-ui/react';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { DisplayInfo, DisplayInfoProps } from '../components/DisplayInfo';
import { InputDateField } from '../components/InputDateField';
import { API_KEY, BASE_URL } from '../constants';

const Index = () => {
	  const [data, setData] = useState<DisplayInfoProps>()
	  const [loading, setLoading] = useState(true)
	  const [searchDate, setSearchDate] = useState('')
	  const [error, setError] = useState(undefined)
	
	const url =
		searchDate
		?
		`${BASE_URL}?api_key=${API_KEY}&date=${searchDate}`
		:
		`${BASE_URL}?api_key=${API_KEY}`;
	
	useEffect(() => {
    const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
        setData(data)
       } catch (err) {
        //  setError(err)
       } finally {
         setLoading(false)
       }
    }
    fetchData()
	}, [url])
	
	return loading ? <h2>Loading... </h2> : (
		<>
			<Box maxW={800} m='auto'>
				<Heading textAlign='center'>Title</Heading>
				<Formik
					initialValues={{ searchDate: searchDate }}
					onSubmit={async (values, { setErrors }) => {
						const { searchDate } = values;

						let todayMidnight = new Date();
						todayMidnight.setUTCHours(24, 0, 0, 0);

						let searchDateMidnight = new Date(searchDate);

						if (searchDateMidnight >= todayMidnight) {
							console.log(
								'Search date is further ahead than today midnight GMT'
							);
							console.log(
								'SET ERRORS: ',
								setErrors,
								'FORM ERROR MESSAGE: ',
								FormErrorMessage,
								'ERROR MESSAGE: ',
								ErrorMessage
							);
						} else {
							setSearchDate(searchDate);
						}
					}}>
					{({ isSubmitting }) => (
						<Form>
							<InputDateField
								label='Search Date'
								name='searchDate'
								type='date'
							/>

							<Center>
								<Button
									mt={4}
									colorScheme='teal'
									isLoading={isSubmitting}
									type='submit'
									size='sm'>
									Search Date
								</Button>
							</Center>
						</Form>
					)}
				</Formik>
			</Box>

			<DisplayInfo {...data} />
		</>
	);
};

export default Index;
