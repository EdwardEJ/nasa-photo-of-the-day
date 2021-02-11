import React from 'react';

// const useStyles = makeStyles({
//   root: {
//     padding: '3%',
//     textAlign: 'center',
//     height: '100%',
//     '& h2': {
//       textAlign: 'center',
//     },
//     '& img': {
//       padding: '3%',
//     },
//     '& iframe': {
//       width: '960px',
//       height: '540px',
//     },
//     '& p': {
//       fontSize: '2rem',
//       lineHeight: '1.5'
//     },
//     '@media (max-width:450px)': {
//       '& h2': {
//         fontSize: '3rem',
//       },
//       '& p': {
//         fontSize: '1.5rem'
//       }
//     },
//   }
// })

const DisplayInfo: React.FC<{}> = (
	{
		// info
	}
) => {
	return (
		<></>
		// <section className={classes.root}>
		// 	{info.title ? (
		// 		<Typography variant='h2'>Image of {info.title}</Typography>
		// 	) : (
		// 		'Select a date!'
		// 	)}
		// 	{info.media_type === 'image' ? (
		// 		<img src={info.url} alt={info.title} />
		// 	) : null}
		// 	{info.media_type === 'video' ? (
		// 		<iframe title={info.title} src={info.url}></iframe>
		// 	) : null}
		// 	<p>{info.explanation}</p>
		// 	<footer>&#169; Copyright {info.copyright}</footer>
		// </section>
	);
};

export default DisplayInfo;
