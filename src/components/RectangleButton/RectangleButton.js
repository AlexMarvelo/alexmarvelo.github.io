import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RectangleButton.module.scss';


const RectangleButton = ({ children, onClick, colorInvert }) => (
	<button
		className={classNames(styles.button, {
			[styles.colorInvert]: colorInvert,
		})}
		onClick={onClick}
	>
		{children}
	</button>
);

const {
	oneOfType, string, element, func, bool,
} = PropTypes;
RectangleButton.propTypes = {
	children: oneOfType([string, element]).isRequired,
	onClick: func,
	colorInvert: bool,
};

RectangleButton.defaultProps = {
	onClick: () => {},
	colorInvert: false,
};

export default RectangleButton;
