// 管理 stroybook library，不用每次都分別引入
import { storiesOf as storiesOfReal } from '@storybook/react';
import { action as actionReal } from '@storybook/addon-actions';
import { linkTo as linkToReal } from '@storybook/addon-links';

import {
	specs as specsReal,
	describe as describeReal,
	it as itReal,
	beforeEach as beforeEachReal,
	afterEach as afterEachReal,
	before as beforeReal,
	after as afterReal,
	xit as xitReal,
	fit as fitReal,
	xdescribe as xdescribeReal,
} from 'storybook-addon-specifications';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export const expect = require('expect'); // eslint-disable-line global-require

export const storiesOf = storiesOfReal;
export const action = actionReal;
export const linkTo = linkToReal;
export const specs = specsReal;
export const describe = describeReal;
export const it = itReal;
export const beforeEach = beforeEachReal;
export const afterEach = afterEachReal;
export const before = beforeReal;
export const after = afterReal;
export const xit = xitReal;
export const fit = fitReal;
export const xdescribe = xdescribeReal;
export const snapshot = () => {};
