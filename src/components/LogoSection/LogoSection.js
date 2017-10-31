import React from 'react';
import PropTypes from 'prop-types';
import styles from './LogoSection.module.scss';


const Section = ({ name }) => (
	<div className={styles.container}>
		<img src="img/logo-light.png" alt={name} className={styles.logo} />
		<h1 className={styles.title}>{name}</h1>
	</div>
);

Section.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Section;
