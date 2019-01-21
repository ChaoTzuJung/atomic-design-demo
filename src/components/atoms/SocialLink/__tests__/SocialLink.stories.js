import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SocialLink from 'components/atoms/SocialLink';

import { storiesOf } from 'util/facade';

import FacebookSvg from 'images/icon/facebook.inline.svg';

const stories = storiesOf('Commons|atoms/SocialLink', module);

stories.addDecorator(withKnobs);

stories.add('with default', () => {
	const socialLink = (
		<div style={{ width: '50px' }}>
			<SocialLink
				className=""
				link={`https://www.facebook.com/sharer/sharer.php?u=${
					encodeURIComponent(document.URL)
				}`}
				Icon={FacebookSvg}
			/>
		</div>
	);

	return socialLink;
});
