import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const TextAdvertisement = ({ className, advertisements = [] }) => (
	<div className={classnames(styles.textAdvertisement, className)}>
		<ul>
			{advertisements.map(ad => (
				<li key={ad.id}>
					<a href={ad.url} target="_blank" rel="noopener noreferrer">
						{ad.title}
					</a>
				</li>
			))}
		</ul>
	</div>
);

export default TextAdvertisement;
