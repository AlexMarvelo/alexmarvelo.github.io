import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RectangleButton from 'components/RectangleButton';
import TagSignSVG from 'components/TagSignSVG';
import styles from './DevSection.module.scss';


const text = `I prefer using reactive stack technologies,
			believing in the power of FRP. I have an experience working
			as a freelancer, office job, and remote job.
			Also, I find some time for contributing to the open source
			to make the world a bit better. More info about my skills
			is listed in my CV.`;

const DevSection = ({ openCvSection }) => (
	<div className="container h-100">
		<div className="row align-items-center h-100">
			<div className="col">
				<div className="row">
					<div className="col-sm">
						<h2 className="text-uppercase">
							<span className="font-weight-light">Front-end</span> <span className="font-weight-bold">dev</span>
						</h2>
						<p>{text}</p>
					</div>
					<div className={classNames('col-sm', styles.photoContainer)}>
						<TagSignSVG className={styles.photo} />
					</div>
				</div>
				<div className={styles.btnContainer}>
					<RectangleButton onClick={() => openCvSection()} className={styles.cvButton}>
						<span><span className="font-weight-light">My</span> <span className="font-weight-bold">CV</span></span>
					</RectangleButton>
				</div>
			</div>
		</div>
	</div>
);

DevSection.propTypes = {
	openCvSection: PropTypes.func.isRequired,
};

export default DevSection;
