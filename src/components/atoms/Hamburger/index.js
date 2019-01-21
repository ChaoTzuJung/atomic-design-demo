import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Hamburger = ({
	open,
	color = '#686868',
	background,
	className,
}) => (
	<div
		className={classnames(styles.hamburger, className, {
			[styles.open]: open,
			[styles.background]: background,
		})}
	>
		<div className={styles.row}>
			<span className={styles.line} style={{ background: color }} />
			<span className={styles.line} style={{ background: color }} />
		</div>
		<div className={styles.row}>
			<span className={styles.line} style={{ background: color }} />
			<span className={styles.line} style={{ background: color }} />
		</div>
		<div className={styles.row}>
			<span className={styles.line} style={{ background: color }} />
			<span className={styles.line} style={{ background: color }} />
		</div>
	</div>
);

export default Hamburger;
