import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RectangleButton.module.scss';


const RectangleButton = ({
	children, onClick, colorInvert, className,
}) => (
	<button
		className={classNames(styles.button, className, {
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
	className: string,
};

RectangleButton.defaultProps = {
	onClick: () => {},
	colorInvert: false,
	className: '',
};

export default RectangleButton;
