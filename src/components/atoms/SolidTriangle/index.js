import React from 'react';
import classnames from 'classnames';
import styles from './index.css';

const SolidTriangle = ({
	className,
	color = '#8dc8e8',
	width = 16,
	height = 15,
	direction = 'top',
}) => (
	<div
		className={classnames(styles.solidTriangle, className, {
			[styles.up]: direction === 'up',
			[styles.right]: direction === 'right',
			[styles.down]: direction === 'down',
			[styles.left]: direction === 'left',
		})}
		style={{
			borderWidth: `${height}px ${width / 2}px 0 ${width / 2}px`,
			borderColor: `${color} transparent transparent transparent`, // 上三角 右三角 下三角 左三角
		}}
	/>
);

export default SolidTriangle;
