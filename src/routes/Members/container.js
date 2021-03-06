import { connect } from 'react-redux';

import { getMembers, cleanMembers } from 'actions/member';
import Members from './component';

const mapStateToProps = state => ({
	members: state.members.staffs,
});

const mapDispatchToProps = dispatch => ({
	getMembers: () => dispatch(getMembers()),
	cleanMembers: () => dispatch(cleanMembers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
