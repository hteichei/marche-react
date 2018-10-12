import { connect } from 'react-redux';
import NoAuthRoute from '../../components/NoAuthRoute';

function mapStateToProps({ auth }) {
  return {
    isAuthenticated: auth.isAuthenticated
  };
}

export default connect(
  mapStateToProps,
  null
)(NoAuthRoute);
