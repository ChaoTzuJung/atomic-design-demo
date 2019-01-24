import React from 'react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';

import ArticleList from 'components/molecules/ArticleList';

import { storiesOf, action } from 'util/facade';

const stories = storiesOf('Commons|molecules/ArticleList', module);

stories.addDecorator(withKnobs);

const articlesData = [
	{
		id: 0,
		title: '勞基法第23條中所定之"應提供工資各項目計算方式明細"是要怎麼提供? 要一一寫在薪資單中嗎?',
		content: (
			'【勞動基準法第23條】規定之「應提供工資各項目計算方式明細」，建議可在薪資單上加註固定發放、' +
			'常發放項目的計算方式，若薪資單上空間有限、加註不易，在電子薪資單查詢系統上附上各項工資計算' +
			'方式的檔案查詢亦可。' +
			'【勞動基準法第23條】規定之「應提供工資各項目計算方式明細」，建議可在薪資單上加註固定發放、' +
			'常發放項目的計算方式，若薪資單上空間有限、加註不易，在電子薪資單查詢系統上附上各項工資計算' +
			'方式的檔案查詢亦可。'
		),
		link: '',
	},
	{
		id: 1,
		title: '特休到職後一定要折現嗎?員工若想要累計假期的話，可以選擇延後補休嗎?',
		content: (
			'依據【勞動基準法第38條】規定，年度終結未休之日數，經勞雇雙方協商遞延至次一年度實施者' +
			'，於次一年度終結或契約終止仍未休之日數，雇主應發給工資。'
		),
		link: '',
	},
];

stories.add('__interactive', () => {
	const articleList = (
		<div style={{ width: '700px' }}>
			<ArticleList
				hasMoreData={boolean('hasMoreData', true)}
				articles={object('articles', articlesData)}
				loading={boolean('loading', false)}
				onClickMore={action('onClickMore')}
			/>
		</div>
	);

	return articleList;
});
