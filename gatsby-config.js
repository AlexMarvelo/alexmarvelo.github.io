module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-62121578-2',
				// Setting this parameter is optional
				// anonymize: true
			},
		},
	],
};
