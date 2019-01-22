import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { SearchBarContainer } from 'components/atoms/SearchBar';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|atoms/SearchBar', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const searchBar = (
		<div style={{ padding: '5px' }}>
			<SearchBarContainer
				placeholder={text('placeholder', '請輸入關鍵字')}
				onInputChange={action('input change')}
				submit={action('submit event')}
			/>
		</div>
	);

	return searchBar;
});


stories.add('with default', () => {
	const searchBar = (
		<div style={{ padding: '5px' }}>
			<SearchBarContainer
				placeholder='請輸入關鍵字'
			/>
		</div>
	);

	return searchBar;
});
