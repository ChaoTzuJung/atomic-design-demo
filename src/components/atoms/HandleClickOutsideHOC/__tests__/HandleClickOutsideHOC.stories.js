import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import HandleClickOutsideHOC from 'components/atoms/HandleClickOutsideHOC';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|atoms/[ HOCs ]/HandleClickOutsideHOC', module);

stories.addDecorator(withKnobs);

const TestComponent = () => (
	<div
		style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: 'gray',
			width: '400px',
			height: '100px',
			color: 'white',
		}}
	>
		click outside and check action logger
	</div>
);

const HandleClickOutside = HandleClickOutsideHOC(TestComponent);

stories.add('with default', () => {
	const handleClickOutside = (
		<div>
			<HandleClickOutside
				onClickOutside={action('onClickOutside')}
			/>
		</div>
	);

	return handleClickOutside;
});
