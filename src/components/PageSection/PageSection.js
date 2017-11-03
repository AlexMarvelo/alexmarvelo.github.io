import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PageSectionStyles } from 'constants/display';
import SectionArrow from 'components/SectionArrow';
import styles from './PageSection.module.scss';


class PageSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winHeight: window.innerHeight,
		};
		this.setWinHeight = this.setWinHeight.bind(this);
		window.addEventListener('resize', this.setWinHeight);
	}

	setWinHeight() {
		this.setState(state => ({
			...state,
			winHeight: window.innerHeight,
		}));
	}

	render() {
		const { children, background, showArrow } = this.props;
		const { winHeight } = this.state;
		return (
			<section
				className={classNames(styles.pageSection, {
					[styles.darkBg]: background === PageSectionStyles.DARK,
					[styles.lightBg]: background === PageSectionStyles.LIGHT,
					[styles.whiteBg]: background === PageSectionStyles.WHITE,
					[styles.turquoiseBg]: background === PageSectionStyles.TURQUOISE,
				})}
				style={{
					height: winHeight,
				}}
			>
				{children}
				{showArrow && (
					<SectionArrow background={background} />
				)}
			</section>
		);
	}
}

PageSection.propTypes = {
	children: PropTypes.element,
	background: PropTypes.string,
	showArrow: PropTypes.bool,
};

PageSection.defaultProps = {
	children: null,
	background: PageSectionStyles.LIGHT,
	showArrow: true,
};

export default PageSection;
