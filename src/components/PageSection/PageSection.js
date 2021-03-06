import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PageSectionStyles } from 'constants/display';
import SectionArrow from 'components/SectionArrow';
import styles from './PageSection.module.scss';


const mobileThreshold = 768;

class PageSection extends Component {
	constructor(props) {
		super(props);
		this.isBrowser = typeof window !== 'undefined';
		this.state = this.isBrowser ? {
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		} : {};
	}

	render() {
		const {
			children, background, showArrow, preload,
		} = this.props;
		const { winWidth, winHeight } = this.state;
		return (
			<section
				className={classNames(styles.pageSection, {
					[styles.centerContent]: winWidth <= mobileThreshold,
					[styles.fullHeight]: preload && !this.isBrowser,
					[styles.darkBg]: background === PageSectionStyles.DARK,
					[styles.lightBg]: background === PageSectionStyles.LIGHT,
					[styles.whiteBg]: background === PageSectionStyles.WHITE,
					[styles.turquoiseBg]: background === PageSectionStyles.TURQUOISE,
				})}
				style={{
					height: winWidth > mobileThreshold ? winHeight : 'auto',
					minHeight: winHeight,
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

const { string, element, bool } = PropTypes;
PageSection.propTypes = {
	children: element,
	background: string,
	showArrow: bool,
	preload: bool,
};

PageSection.defaultProps = {
	children: null,
	background: PageSectionStyles.LIGHT,
	showArrow: true,
	preload: false,
};

export default PageSection;
