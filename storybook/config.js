import 'babel-polyfill'; // 來將 ES6 的語法轉到 ES5。
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import 'normalize.css';
import 'global.css';

// 看不懂
setOptions({
	hierarchySeparator: /\/|\./,
	hierarchyRootSeparator: /\|/,
});


function loadStories() {
	// 偵測所有 特定資料夾 下且是特定檔名的內容
	const req = require.context('../src/components/', true, /stories\.js$/);
	req.keys().forEach(req);
}

configure(loadStories, module);
