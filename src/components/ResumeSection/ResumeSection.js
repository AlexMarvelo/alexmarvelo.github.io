import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PageSectionStyles } from 'constants/display';
import SectionArrow from 'components/SectionArrow';
import styles from './ResumeSection.module.scss';


const ResumeSection = ({ collapsed }) => (
	<section
		className={classNames(styles.section, {
			[styles.collapsedSection]: collapsed,
		})}
	>
		<div className={classNames('container', styles.container)}>
			<img src="CV.png" className={styles.doc} alt="My resume" width="100%" />
		</div>
		<SectionArrow background={PageSectionStyles.LIGHT} />
	</section>
);

ResumeSection.propTypes = {
	collapsed: PropTypes.bool,
};

ResumeSection.defaultProps = {
	collapsed: false,
};

export default ResumeSection;
