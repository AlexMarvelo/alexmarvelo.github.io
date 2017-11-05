import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PageSectionStyles, CV_SRC, CV_DOWNLOAD_SRC } from 'constants/display';
import SectionArrow from 'components/SectionArrow';
import RectangleButton from 'components/RectangleButton';
import styles from './ResumeSection.module.scss';


const ResumeSection = ({ collapsed }) => (
	<section
		className={classNames(styles.section, {
			[styles.collapsedSection]: collapsed,
		})}
	>
		<div className={classNames('container', styles.container)}>
			<img src={CV_SRC} className={styles.doc} alt="My resume" width="100%" />
			<div className={styles.btnContainer}>
				<RectangleButton className={styles.downloadButton} href={CV_DOWNLOAD_SRC} download>
					<span><span className="font-weight-light">Download</span> <span className="font-weight-bold">CV</span></span>
				</RectangleButton>
			</div>
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
