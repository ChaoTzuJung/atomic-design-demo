import React from 'react';

import SquareButton from 'components/atoms/SquareButton';
import notFoundImage from 'images/search/not-found.png';

import styles from './index.css';

const NotFound = ({
	image = notFoundImage,
	notFoundTitle = '找不到符合搜尋字詞',
	errorMsg = '您可以嘗試重新搜尋，或填寫意見表單。',
	buttonText = '返回首頁',
}) => (
	<div className={styles.notFound}>
		<div className={styles.image}>
			<img alt="not found" src={image} />
		</div>
		<div className={styles.title}>{notFoundTitle}</div>
		<div className={styles.subtitle}>{errorMsg}</div>
		<a
			href="https://www.surveycake.com/s/yPb9V"
			rel="noopener noreferrer"
			target="_blank"
		>
			<SquareButton>{buttonText}</SquareButton>
		</a>
	</div>
);

export default NotFound;
