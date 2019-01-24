import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const LauncherFrame = ({
	className,
	title,
	questionareId,
	iframeBoxWidth = 300,
	iframeBoxHeight = 360,
	iframeInnerWidth = 300,
	iframeInnerHeight = 1000,
}) => (
	<div
		className={classnames(styles.launcherFrame, className)}
		style={{
			width: `${iframeBoxWidth}px`, // Avoid show horizontal scrolerl: iframeBoxWidth + 10 = iframeInnerWidth
			height: `${iframeBoxHeight}px`,
		}}
	>
		<div className={styles.top}>{title}</div>
		<div className={styles.questionare}>
			<iframe
				title="questionare"
				src={`https://www.surveycake.com/s/${questionareId}`}
				allowTransparency="true" // 將iframe的背景變為透明背景
				frameBorder="0"
				scrolling="no" // 不顯示捲軸(內嵌問券本身含滾定捲軸)
				// height={iframeInnerHeight}
				style={{
					width: `${iframeInnerWidth}px`,
					height: `${iframeInnerHeight}px`,
				}}
			/>
		</div>
	</div>
);

export default LauncherFrame;
