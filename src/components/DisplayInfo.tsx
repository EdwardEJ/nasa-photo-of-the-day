import React from 'react';
import { Box, Center } from '@chakra-ui/react';

export interface DisplayInfoProps {
	title?: string;
	explanation?: string;
	media_type?: string;
	url?: string;
}

export const DisplayInfo: React.FC<DisplayInfoProps> = ({
	title,
	media_type,
	url,
	explanation,
}) => {
	return (
		<Box maxW={800} m='auto'>
			<Center>
				<p>{title}</p>
			</Center>
			<Center>
				{media_type === 'image' ? <img src={url} alt={title} /> : null}
				{media_type === 'video' ? (
					<iframe title={title} src={url}></iframe>
				) : null}
			</Center>
			<p>{explanation}</p>
		</Box>
	);
};
