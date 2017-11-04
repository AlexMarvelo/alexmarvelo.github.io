/* eslint max-len:0 */
import React from 'react';
import PropTypes from 'prop-types';


const TagSignSVG = ({ className, color }) => (
	<svg
		version="1.0"
		xmlns="http://www.w3.org/2000/svg"
		width="300pt"
		height="190pt"
		viewBox="0 0 300 240"
		preserveAspectRatio="xMidYMid meet"
		className={className}
	>
		<g transform="translate(0,240) scale(0.1,-0.1)" fill={color} stroke="none">
			<path d="M1821 2381 c-22 -22 -771 -2263 -771 -2309 0 -19 8 -40 20 -52 26 -26 91 -27 112 -2 9 9 187 533 397 1164 373 1118 382 1147 367 1176 -8 16 -23 32 -31 36 -31 12 -75 6 -94 -13z" />
			<path d="M728 1953 c-9 -2 -157 -157 -328 -344 -171 -186 -327 -355 -345 -375 -33 -35 -34 -37 -16 -53 10 -9 165 -176 344 -372 286 -312 343 -368 379 -369 3 0 20 12 37 26 23 19 31 34 31 58 0 29 -35 71 -295 354 l-295 322 295 321 c259 282 295 325 295 353 0 49 -55 91 -102 79z" />
			<path d="M2220 1947 c-33 -16 -55 -57 -47 -88 3 -13 137 -167 297 -342 l291 -317 -144 -158 c-79 -86 -210 -229 -291 -317 -81 -88 -149 -171 -153 -184 -13 -53 55 -114 102 -93 13 6 173 174 356 374 183 200 338 366 344 370 6 5 4 12 -6 20 -9 7 -165 176 -348 376 -182 199 -336 362 -341 362 -4 0 -14 2 -22 5 -7 3 -24 -1 -38 -8z" />
		</g>
	</svg>
);

TagSignSVG.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
};

TagSignSVG.defaultProps = {
	className: '',
	color: '#000000',
};

export default TagSignSVG;
