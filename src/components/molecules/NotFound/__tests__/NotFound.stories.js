import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import NotFound from 'components/molecules/NotFound';
import notFoundImage from 'images/search/not-found.png';

import { storiesOf } from 'util/facade';

const stories = storiesOf('Commons|molecules/NotFound', module);

stories.addDecorator(withKnobs);

stories.add('__interactiv', () => {
	const notFound = (
		<div>
			<NotFound
				image={notFoundImage}
				notFoundTitle={text('notFoundTitle', '找不到符合搜尋字詞')}
				errorMsg={text('errorMsg', '您可以嘗試重新搜尋，或填寫意見表單。')}
				buttonText={text('buttonText', '意見表單')}
			/>
		</div>
	);

	return notFound;
});

stories.add('with default', () => {
	const notFound = (
		<div>
			<NotFound
				notFoundTitle="找不到符合搜尋字詞"
				errorMsg="您可以嘗試重新搜尋，或填寫意見表單。"
				buttonText="意見表單"
			/>
		</div>
	);

	return notFound;
});
