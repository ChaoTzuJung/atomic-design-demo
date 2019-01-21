import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const SocialLink = ({ className, link, Icon }) => (
	<a
		className={classnames(styles.socialLink, className)}
		href={link}
		target="_blank"
		rel="noopener noreferrer"
	>
		<Icon />
	</a>
);

export default SocialLink;
