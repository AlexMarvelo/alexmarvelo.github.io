import React from 'react';
import PropTypes from 'prop-types';
import LogoSignSVG from 'components/LogoSignSVG';
import styles from './LogoSection.module.scss';


const Section = ({ name }) => (
	<div className={styles.container}>
		<LogoSignSVG className={styles.logo} color="#ffffff" />
		<h1 className={styles.title}>{name}</h1>
	</div>
);

Section.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Section;
