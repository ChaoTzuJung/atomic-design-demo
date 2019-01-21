import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const Triangle = ({
	direction = 'right',
	color,
	size = 9,
	borderWidth,
	className,
}) => (
	<span
		className={classnames(styles.triangle, className, {
			[styles.left]: direction === 'left',
			[styles.right]: direction === 'right',
			[styles.up]: direction === 'up',
			[styles.down]: direction === 'down',
		})}
		style={{
			width: `${size}px`,
			height: `${size}px`,
			borderColor: color || '#2D2926',
			borderWidth: borderWidth ? `${borderWidth}px ${borderWidth}px 0 0` : '2px 2px 0 0',
		}}
	/>
);

export default Triangle;
