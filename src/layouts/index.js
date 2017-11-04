import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'bootstrap/scss/bootstrap.scss';
import 'styles/global.scss';


const fonts = `
	@font-face {
		font-family: minion-pro;
		src:
			url("https://use.typekit.net/af/dd26e8/0000000000000000000151d6/21/l?subset_id=2&fvd=n4&v=3") format("woff2"),
			url(https://use.typekit.net/af/dd26e8/0000000000000000000151d6/21/d?subset_id=2&fvd=n4&v=3) format("woff"),
			url(https://use.typekit.net/af/dd26e8/0000000000000000000151d6/21/a?subset_id=2&fvd=n4&v=3) format("opentype");
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: brandon-grotesque;
		src:
			url("https://use.typekit.net/af/e8cca1/0000000000000000000132e3/21/l?subset_id=2&fvd=n7&v=3") format("woff2"),
			url(https://use.typekit.net/af/e8cca1/0000000000000000000132e3/21/d?subset_id=2&fvd=n7&v=3) format("woff"),
			url(https://use.typekit.net/af/e8cca1/0000000000000000000132e3/21/a?subset_id=2&fvd=n7&v=3) format("opentype");
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: brandon-grotesque;
		src:
			url("https://use.typekit.net/af/685bd7/0000000000000000000132dd/21/l?subset_id=2&fvd=n3&v=3") format("woff2"),
			url(https://use.typekit.net/af/685bd7/0000000000000000000132dd/21/d?subset_id=2&fvd=n3&v=3) format("woff"),
			url(https://use.typekit.net/af/685bd7/0000000000000000000132dd/21/a?subset_id=2&fvd=n3&v=3) format("opentype");
		font-weight: 300;
		font-style: normal;
	}
	
	@font-face {
		font-family: 'icomoon';
		src:
			url('/fonts/icomoon.ttf') format('truetype'),
			url('/fonts/icomoon.woff') format('woff'),
			url('/fonts/icomoon.svg#icomoon') format('svg');
		font-weight: normal;
		font-style: normal;
	}
`;

const IndexLayout = ({ children }) => (
	<div>
		<Helmet>
			<html lang="en" />
			<title>Aleksey Mironenko | Front-end developer</title>
			<meta name="description" content="Aleksey Mironenko, Front-end developer. I create meaningful web apps." />
			<link rel="author" href="Aleksey Mironenko" />
			<meta name="application-name" content="Aleksey Mironenko" />
			<link rel="icon" href="favicon.png" />
			<link rel="image_src" href="img/preview.png" />
			<meta name="geo.region" content="UA-30" />
			<meta name="geo.placename" content="Kiev" />
			<meta name="geo.position" content="50.5;30.5" />
			<meta name="ICBM" content="50.5, 30.5" />
			<meta name="google" content="notranslate" />
			<style type="text/css">{fonts}</style>
		</Helmet>
		<div>
			{children()}
		</div>
	</div>
);

IndexLayout.propTypes = {
	children: PropTypes.func,
};

IndexLayout.defaultProps = {
	children: null,
};

export default IndexLayout;
