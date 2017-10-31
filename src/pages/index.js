import React from 'react';
import PageSection, { PageSectionStyles } from 'components/PageSection';
import LogoSection from 'components/LogoSection';


const IndexPage = () => (
	<div>
		<PageSection background={PageSectionStyles.DARK}>
			<LogoSection name="Aleksey Mironenko" />
		</PageSection>
		<PageSection background={PageSectionStyles.WHITE} showArrow={false}>
			<div className="container">
				asdasd 2
				asdasd
				<br />
				asdasd
			</div>
		</PageSection>
	</div>
);

export default IndexPage;
