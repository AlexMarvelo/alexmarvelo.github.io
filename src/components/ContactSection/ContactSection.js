import React from 'react';
import classNames from 'classnames';
import styles from './ContactSection.module.scss';


const Contacts = {
	FB: 'https://www.facebook.com/alx.mironenko',
	INST: 'https://www.instagram.com/alekseymironenko_',
	LINKED: 'https://www.linkedin.com/in/alekseymironenko',
	GITHUB: 'https://github.com/AlexMarvelo',
	TWITTER: 'https://twitter.com/AlexeyMironenko',
};

const contactClassName = classNames('col-sm-4 col-md-3', styles.contact);

const ContactSection = () => (
	<div className="container h-100">
		<div className="row align-items-center h-100">
			<div className="col">
				<h2 className="text-uppercase">
					<span className="font-weight-light">Get</span> <span className="font-weight-bold">connected</span>
				</h2>
				<div className={classNames('row', styles.contacts)}>
					<div className={contactClassName}>
						<a rel="nofollow" href="tel:+380996423129">
							<span className={classNames('icon-phone', styles.contactIcon)} /> +38 099 642 3129
						</a>
					</div>
					<div className={contactClassName}>
						<a rel="nofollow" href="mailto:mironenkoalexey@gmail.com">
							<span className={classNames('icon-mail', styles.contactIcon)} /> Email
						</a>
					</div>
					<div className={contactClassName}>
						<a href={Contacts.FB}>
							<span className={classNames('icon-phone', styles.contactIcon)} /> Facebook
						</a>
					</div>
					<div className={contactClassName}>
						<a rel="nofollow" href={Contacts.INST}>
							<span className={classNames('icon-instagram', styles.contactIcon)} /> Instagram
						</a>
					</div>
					<div className={contactClassName}>
						<a rel="nofollow" href={Contacts.LINKED}>
							<span className={classNames('icon-linkedin', styles.contactIcon)} /> LinkedIn
						</a>
					</div>
					<div className={contactClassName}>
						<span className={classNames('icon-phone', styles.contactIcon)} /> alexmironenko12
					</div>
					<div className={contactClassName}>
						<a rel="nofollow" href={Contacts.GITHUB}>
							<span className={classNames('icon-phone', styles.contactIcon)} /> GitHub
						</a>
					</div>
					<div className={contactClassName}>
						<a rel="nofollow" href={Contacts.TWITTER}>
							<span className={classNames('icon-twitter', styles.contactIcon)} /> Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ContactSection;
