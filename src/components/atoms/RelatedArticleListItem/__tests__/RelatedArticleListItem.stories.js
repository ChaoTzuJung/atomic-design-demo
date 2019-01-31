import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { storiesOf } from 'util/facade';

import RelatedArticleListItem from 'components/atoms/RelatedArticleListItem';

const stories = storiesOf('Commons|atoms/RelatedArticleListItem', module);

stories.addDecorator(withKnobs);

stories.add('__interactive', () => (
	<RelatedArticleListItem
		singleEllipsis={boolean('Truncating Single Line Text', true)}
		title={text('title', '雇主品牌建立八步法')}
		content={text('content', '在大數據與人工智能的時代，企業面臨激烈的人才爭奪戰，尤其是業務行銷及ST...')}
	/>
));


stories.add('with mutiline', () => (
	<RelatedArticleListItem
		mutilineEllipsis={boolean('Truncating Multiple Line Text', true)}
		title={text('title', '雇主品牌建立八步法')}
		content={text('content', '在大數據與人工智能的時代，企業面臨激烈的人才爭奪戰，尤其是業務行銷及ST...')}
	/>
));
