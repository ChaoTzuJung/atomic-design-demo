import React from 'react';
import classnames from 'classnames';
import styles from './index.css';

const Badge = ({ text, colorType, className, outline }) => (
	<span className={classnames(styles.badge, className, styles[colorType], outline ? styles.outline : '')}>
		<div className={styles.text}>{text}</div>
	</span>
);

export default Badge;
