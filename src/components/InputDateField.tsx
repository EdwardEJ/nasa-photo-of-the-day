import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputDateFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
};

export const InputDateField: React.FC<InputDateFieldProps> = ({
	label,
	size: _,
	...props
}) => {
	const [field, { error }] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<Input
				{...field}
				{...props}
				id={field.name}
				placeholder={props.placeholder}
			/>
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
