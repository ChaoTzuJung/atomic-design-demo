import React from 'react';
import { withKnobs, color } from '@storybook/addon-knobs';

import { storiesOf } from 'util/facade';

import LoadingSpinner from 'components/atoms/LoadingSpinner';

const stories = storiesOf('Commons|atoms/[ Graphics ]/Loading', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const spinner = (
		<div style={{ width: '50px' }}>
			<LoadingSpinner className="" color={color('color', '#FF7800')} />
		</div>
	);

	return spinner;
});

stories.add('with default', () => {
	const spinner = (
		<div style={{ width: '50px' }}>
			<LoadingSpinner />
		</div>
	);

	return spinner;
});

