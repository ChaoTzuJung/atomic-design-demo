import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

export const mergeUrlQueryString = createAction(
	// type
	'MERGE_URL_QUERY_STRING',
	// payload(似乎只是換頁)，因為事回傳thunk，所以thunk內自帶參數dispatch & getState
	({ query, newPath }) => (dispatch, getState) => {
		// doSomething in thunk
		const {
			routing: { locationBeforeTransitions: { pathname, query: oldQuery } }, // TODO:
		} = getState();
		// dispatch action in thunk
		dispatch(
			push({
				pathname: newPath || pathname,
				query: { // TODO:
					// Keep old query string
					...oldQuery,
					// Override the query string
					...query,
				},
			}),
		);
	},
);

/* 筆記 */
// 1.當點擊"搜尋"或是"熱門關鍵字"
// 2.search這個dispatch會發一個action叫 "mergeUrlQueryString"
// 3.search這個dispatch會帶兩個參數 "keyword" 跟 " pathname" 給 mergeUrlQueryString
// 4.mergeUrlQueryString會拿pathname做成新參數 "newPath",
//   拿keyword與內建categroy做成新物件參數 "query"，把他們包成物件當成參數帶入這兒處理
