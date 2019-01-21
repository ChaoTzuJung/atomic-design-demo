import React from 'react';
import { withKnobs, boolean, color } from '@storybook/addon-knobs';

import Hamburger from 'components/atoms/Hamburger';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ Graphics ]/Hamburger', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const hamburger = (
		<div style={{ padding: '5px' }}>
			<Hamburger
				open={boolean('open', false)}
				color={color('color', '#686868')}
				background={boolean('background', false)}
			/>
		</div>
	);

	return hamburger;
});

stories.add('with default', () => {
	const hamburger = (
		<div style={{ padding: '5px' }}>
			<Hamburger />
		</div>
	);

	return hamburger;
});
