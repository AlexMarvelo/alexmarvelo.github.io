import React from 'react';
import classNames from 'classnames';
import styles from './AboutSection.module.scss';


const text = `My name is Aleksey Mironenko. I'm a self-educated front-end developer
			living in Kiev, Ukraine. Fascinated by web technologies innovations.
			I like EDM, traveling and working remotely. Studied system analysis and
			project management in 2 universities. A big fan of minimalism`;

const AboutSection = () => (
	<div className="container h-100">
		<div className="row align-items-center h-100">
			<div className="col">
				<div className="row">
					<div className="col-sm">
						<img src="img/personal-photo.jpg" className={styles.photo} width="100%" alt="It's me!" />
					</div>
					<div className={classNames('col-sm', styles.textCol)}>
						<h2 className="text-uppercase">
							<span className="font-weight-light">About</span> <span className="font-weight-bold">me</span>
						</h2>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default AboutSection;
