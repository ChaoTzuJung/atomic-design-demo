import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SquareButton from 'components/atoms/SquareButton';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ Buttons ]/SquareButton', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
	const squareButton = (
		<div>
			<SquareButton onClick={action('click')}>button</SquareButton>
		</div>
	);

	return squareButton;
});
