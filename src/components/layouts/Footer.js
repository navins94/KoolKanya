import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../partials/Icon';

const Footer = () => {
	const footerLinks = [
		{ label: 'Home', href: '#', ariaLabel: 'Navigate to Home' },
		{
			label: 'Terms and Conditions',
			href: '#',
			ariaLabel: 'Navigate to Terms and Conditions',
		},
		{
			label: 'Privacy Policy',
			href: '#',
			ariaLabel: 'Navigate to Privacy Policy',
		},
		{
			label: 'Collection Statement',
			href: '#',
			ariaLabel: 'Navigate to Collection',
		},
		{ label: 'Help', href: '#', ariaLabel: 'Navigate to Help' },
		{
			label: 'Manage Account',
			href: '#',
			ariaLabel: 'Navigate to Manage Account',
		},
	];

	return (
		<footer className="st-footer">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="st-footer-upper">
							<div className="st-footer-menu">
								<ul className="st-footer-menu__list">
									{footerLinks.map((item, i) => (
										<li
											key={`footer-menu-item-${i}`}
											className="st-footer-menu__item"
										>
											<Link
												className="st-footer-menu__link"
												to="/"
												aria-label={item.ariaLabel}
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="st-footer-copyright">
								<span className="st-footer-copyright__text">
									Copyright &#169; 2016 DEMO Streaming All Rights Reserved.
								</span>
							</div>
						</div>
						<div className="st-footer-lower">
							<div className="st-footer-lower-wrapper">
								<div className="st-footer-social">
									<Link className="st-link" to="/">
										<Icon id="facebook" className="st-icon--social" />
									</Link>
									<Link className="st-link" to="/">
										<Icon id="twitter" className="st-icon--social" />
									</Link>
									<Link className="st-link" to="/">
										<Icon id="instagram" className="st-icon--social" />
									</Link>
								</div>
								<div className="st-footer-store">
									<Link className="st-link" to="/">
										<Icon id="app" className="st-icon--store" />
									</Link>
									<Link className="st-link" to="/">
										<Icon id="play" className="st-icon--store" />
									</Link>
									<Link className="st-link" to="/">
										<Icon id="windows" className="st-icon--store" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
