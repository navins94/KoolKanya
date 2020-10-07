import React from 'react';

import iconFacebook from './../../assets/svg/social/facebook-white.svg';
import iconTwitter from './../../assets/svg/social/twitter-white.svg';
import iconInstagram from './../../assets/svg/social/instagram-white.svg';
import iconStoreApple from './../../assets/svg/store/app-store.svg';
import iconStorePlay from './../../assets/svg/store/play-store.svg';
import iconStoreWindows from './../../assets/svg/store/windows-store.svg';

const Icon = (props) => {
	return (
		<span className={'st-icon ' + (props.className ? props.className : '')}>
			<img
				src={
					(props.id === 'facebook' && iconFacebook) ||
					(props.id === 'twitter' && iconTwitter) ||
					(props.id === 'instagram' && iconInstagram) ||
					(props.id === 'app' && iconStoreApple) ||
					(props.id === 'play' && iconStorePlay) ||
					(props.id === 'windows' && iconStoreWindows)
				}
				alt={props.id}
			/>
		</span>
	);
};

export default Icon;
