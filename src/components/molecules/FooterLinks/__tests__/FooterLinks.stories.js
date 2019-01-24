import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import FooterLinks from 'components/molecules/FooterLinks';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/FooterLinks', module);

stories.addDecorator(withKnobs);

stories.add('with default', () => {
	const footerLinks = (
		<div>
			<FooterLinks />
		</div>
	);

	return footerLinks;
});
