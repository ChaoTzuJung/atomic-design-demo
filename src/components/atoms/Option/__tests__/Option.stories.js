import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { storiesOf } from 'util/facade';

import Option from 'components/atoms/Option';

const stories = storiesOf('Commons|atoms/Option', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const option = (
		<div>
			<Option>{text('option label', 'option')}</Option>
		</div>
	);

	return option;
});

stories.add('with default', () => {
	const option = (
		<div>
			<Option>option</Option>
		</div>
	);

	return option;
});

stories.add('with reverse', () => {
	const option = (
		<div>
			<Option reverse>{text('option label', 'option')}</Option>
		</div>
	);

	return option;
});

stories.add('with border', () => {
	const option = (
		<div>
			<Option border>{text('option label', 'option')}</Option>
		</div>
	);

	return option;
});
