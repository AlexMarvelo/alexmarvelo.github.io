import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RectangleButton from 'components/RectangleButton';
import styles from './DevSection.module.scss';


const text = `I prefer using technologies of the reactive stack,
			believing in power of FRP. I have experience working
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
						<RectangleButton onClick={() => openCvSection()}>
							<span className="font-weight-light">My</span> <span className="font-weight-bold">CV</span>
						</RectangleButton>
					</div>
					<div className={classNames('col-sm', styles.photoContainer)}>
						<img src="img/tag-sign.png" className={styles.photo} width="100%" alt="Coding" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

DevSection.propTypes = {
	openCvSection: PropTypes.func.isRequired,
};

export default DevSection;
