import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import RoundButton from 'components/atoms/RoundButton';

import { storiesOf, action } from '../../../../util/facade';

const stories = storiesOf('Commons|atoms/[ Buttons ]/RoundButton', module);

stories.addDecorator(withKnobs);

stories.add('with default', () => {
	const roundButton = (
		<div>
			<RoundButton onClick={action('click')}>button</RoundButton>
		</div>
	);

	return roundButton;
});
