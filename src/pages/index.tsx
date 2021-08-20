import {
	Box,
	Button,
	Center,
	FormErrorMessage,
	Heading,
} from '@chakra-ui/react';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import { DisplayInfo, DisplayInfoProps } from '../components/DisplayInfo';
import { InputDateField } from '../components/InputDateField';
import { API_KEY, BASE_URL } from '../constants';
import { InferGetStaticPropsType, GetStaticProps } from 'next';


const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
	// const [searchDate, setSearchDate] = useState<string>();
	// const [info, setInfo] = useState<DisplayInfoProps>();
	// const router = useRouter();

	return (
		<>
			<Box maxW={800} m='auto'>
				<Heading textAlign='center'>Astronomy Picture of the Day</Heading>
				<Formik
					initialValues={{ searchDate: '' }}
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
							// setSearchDate(searchDate);
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

export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log('CTX', ctx);
	const url =
		// searchDate
		// ? `${BASE_URL}?api_key=${API_KEY}&date=${searchDate}`
		// :
		`${BASE_URL}?api_key=${API_KEY}`;

	const response = await fetch(url);
	const data: DisplayInfoProps = await response.json();

	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			data,
		},
	};
};

export default Index;
