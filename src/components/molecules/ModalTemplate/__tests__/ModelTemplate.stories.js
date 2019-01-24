import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import ModalTemplate from 'components/molecules/ModalTemplate';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|molecules/ModalTemplate', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => {
	const modalTemplate = (
		<div>
			<ModalTemplate
				className=""
				title={text('text', 'title')}
				small={boolean('small', false)}
				hasCloseBtn={boolean('hasCloseBtn', false)}
				onClose={action('onClose')}
			>
				{text('modal-children', 'texttexttexttexttexttexttexttexttext')}
			</ModalTemplate>
		</div>
	);

	return modalTemplate;
});
