import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside';

const HandleClickOutside = ChildComponent =>
	enhanceWithClickOutside(
		class ComposedComponent extends Component {
			constructor(props) {
				super(props);
				this.handleClickOutside = this.handleClickOutside.bind(this);
			}

			handleClickOutside(event) {
				if (this.props.onClickOutside) {
					this.props.onClickOutside(event);
				}
			}

			render() {
				return <ChildComponent {...this.props} />;
			}
		},
	);

export default HandleClickOutside;
