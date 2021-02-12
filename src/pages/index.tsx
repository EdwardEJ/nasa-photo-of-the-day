import { Box, Button, Center, Heading } from '@chakra-ui/react';
import { cleanup } from '@testing-library/react';
import Axios from 'axios';
import { Form, Formik, validateYupSchema } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { DisplayInfo, DisplayInfoProps } from '../components/DisplayInfo';
import { InputDateField } from '../components/InputDateField';
import { API_KEY, BASE_URL } from '../constants';

const Index: React.FC<{}> = ({}) => {
	const [searchDate, setSearchDate] = useState<string>();
	const [info, setInfo] = useState<DisplayInfoProps>();

	const url = searchDate
		? `${BASE_URL}?api_key=${API_KEY}&date=${searchDate}`
		: `${BASE_URL}?api_key=${API_KEY}`;

	useEffect(() => {
		const fetchData = async () => {
			const response = await Axios.get(url);
			setInfo(response.data);
		};
		fetchData();
		return () => {
			cleanup;
		};
	}, [url]);

	if (!info) {
		<Center>
			<p>Looks like there isn't any information for this date</p>
		</Center>;
	}

	const validateDateSchema = Yup.object().shape({
		searchDate: Yup.date().min(
			new Date(),
			`Date must be be on or before ${new Date()}`
		),
	});

	return (
		<>
			<Box maxW={800} m='auto'>
				<Heading textAlign='center'>Astronomy Picture of the Day</Heading>
				<Formik
					initialValues={{ searchDate: '' }}
					onSubmit={async (values, { setErrors }) => {
						const { searchDate } = values;

						if (Date.now() === Date.parse(searchDate)) {
							setSearchDate(searchDate);
						}
						await validateYupSchema(validateDateSchema, searchDate);
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

			<DisplayInfo {...info} />
		</>
	);
};

export default Index;
