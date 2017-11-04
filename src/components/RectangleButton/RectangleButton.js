import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './RectangleButton.module.scss';


const RectangleButton = ({
	children, onClick, colorInvert, className, href, download,
}) => {
	const classString = classNames(styles.button, className, {
		[styles.colorInvert]: colorInvert,
	});
	return href ? (
		<a
			href={href}
			className={classString}
			onClick={onClick}
			download={download}
		>
			{children}
		</a>
	) : (
		<button
			className={classString}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

const {
	oneOfType, string, element, func, bool,
} = PropTypes;
RectangleButton.propTypes = {
	children: oneOfType([string, element]).isRequired,
	onClick: func,
	colorInvert: bool,
	className: string,
	href: string,
	download: bool,
};

RectangleButton.defaultProps = {
	onClick: () => {},
	colorInvert: false,
	className: '',
	href: null,
	download: false,
};

export default RectangleButton;
