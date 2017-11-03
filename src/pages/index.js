import React, { Component } from 'react';
import { PageSectionStyles } from 'constants/display';
import PageSection from 'components/PageSection';
import LogoSection from 'components/LogoSection';
import AboutSection from 'components/AboutSection';
import DevSection from 'components/DevSection';
import ContactSection from 'components/ContactSection';
import ResumeSection from 'components/ResumeSection';


class IndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cvCollapsed: true,
		};
		this.openCvSection = this.openCvSection.bind(this);
	}

	openCvSection() {
		this.setState(state => ({
			...state,
			cvCollapsed: false,
		}));
	}

	render() {
		return (
			<main>
				<PageSection background={PageSectionStyles.DARK}>
					<LogoSection name="Aleksey Mironenko" />
				</PageSection>
				<PageSection background={PageSectionStyles.WHITE}>
					<AboutSection />
				</PageSection>
				<PageSection background={PageSectionStyles.LIGHT} showArrow={this.state.cvCollapsed}>
					<DevSection openCvSection={this.openCvSection} />
				</PageSection>
				<ResumeSection collapsed={this.state.cvCollapsed} />
				<PageSection background={PageSectionStyles.TURQUOISE} showArrow={false}>
					<ContactSection />
				</PageSection>
			</main>
		);
	}
}

export default IndexPage;
