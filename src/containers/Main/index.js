import { connect } from 'react-redux';
import Main from '../../components/Main';
// import { getUserProfile } from '../../store/actions/Profiles';

function mapStateToProps({ currentUser }) {
  return {
    error: currentUser.error,
    currentUser: currentUser
  };
}
export default connect(
  mapStateToProps,
  null
)(Main);
