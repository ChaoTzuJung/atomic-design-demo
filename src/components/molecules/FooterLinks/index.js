import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const FooterLinks = ({ className }) => (
	<div className={classnames(styles.footerLinks, className)}>
		<div className={styles.row}>
			<a href="https://www.104.com.tw/index.cfm" target="_blank" rel="noopener noreferrer">
				人力銀行
			</a>
			<a href="https://pro.104.com.tw/vip/index/index" target="_blank" rel="noopener noreferrer">
				人才招募
			</a>
			<a href="https://plus.104.com.tw/" target="_blank" rel="noopener noreferrer">
				職涯社群
			</a>
		</div>
		<div className={styles.row}>
			<a href="http://ehr.104.com.tw/" target="_blank" rel="noopener noreferrer">
				人資學院
			</a>
			<a
				href="https://marketing.pro.104.com.tw/index.html"
				target="_blank"
				rel="noopener noreferrer"
			>
				企業大師
			</a>
			<a href="https://hunter.104.com.tw/" target="_blank" rel="noopener noreferrer">
				獵才顧問
			</a>
		</div>
		<div className={styles.row}>
			<a href="https://beagiver.com/" target="_blank" rel="noopener noreferrer">
				人才經營
			</a>
			<a href="https://www.104.com.tw/employerbrand/" target="_blank" rel="noopener noreferrer">
				雇主品牌
			</a>
			<a href="http://corp.104.com.tw/" target="_blank" rel="noopener noreferrer">
				企業網站
			</a>
		</div>
	</div>
);

export default FooterLinks;
