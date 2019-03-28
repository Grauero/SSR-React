import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    const users = this.renderUsers();

    return (
      <div>
        List of users:
        <ul>{users}</ul>
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ users: state.users });

// function for loading all required data without actual render
const loadData = store => store.dispatch(fetchUsers());

export { loadData };
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);
