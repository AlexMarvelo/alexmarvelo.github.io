/* eslint max-len:0 */
import React from 'react';
import PropTypes from 'prop-types';


const LogoSignSVG = ({ className, color }) => (
	<svg
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		width="100px"
		height="100px"
		viewBox="0 0 220 226"
		preserveAspectRatio="xMidYMid meet"
		className={className}
	>
		<g transform="translate(0,226) scale(0.1,-0.1)" fill={color} stroke="none">
			<path d="M1008 1937 l-95 -192 413 -828 414 -828 190 1 c105 1 190 3 190 5 0 5 -1008 2026 -1012 2031 -2 1 -47 -83 -100 -189z" />
			<path d="M186 292 c-53 -105 -96 -194 -96 -197 0 -2 86 -4 190 -4 135 1 190 5 189 13 0 6 -42 94 -93 196 l-94 185 -96 -193z" />
		</g>
	</svg>
);

LogoSignSVG.propTypes = {
	color: PropTypes.string,
	className: PropTypes.string,
};

LogoSignSVG.defaultProps = {
	color: '',
	className: '',
};

export default LogoSignSVG;
