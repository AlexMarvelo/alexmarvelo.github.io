import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PageSectionStyles } from 'constants/display';
import styles from './SectionArrow.module.scss';


const SectionArrow = ({ background }) => (
	<span
		className={classNames('icon-keyboard_arrow_down', styles.arrow, {
			[styles.darkBg]: background === PageSectionStyles.DARK,
			[styles.lightBg]: background === PageSectionStyles.LIGHT,
			[styles.whiteBg]: background === PageSectionStyles.WHITE,
			[styles.turquoiseBg]: background === PageSectionStyles.TURQUOISE,
		})}
	/>
);

SectionArrow.propTypes = {
	background: PropTypes.string,
};

SectionArrow.defaultProps = {
	background: PageSectionStyles.LIGHT,
};

export default SectionArrow;
