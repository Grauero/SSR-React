import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAdmins } from '../store/actions';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    const admins = this.renderAdmins();

    return (
      <div>
        <h3>Protected list of admins:</h3>
        <ul>{admins}</ul>
      </div>
    );
  }
}

AdminsListPage.propTypes = {
  admins: PropTypes.array.isRequired,
  fetchAdmins: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ admins: state.admins });

// function for loading all required data without actual render
const loadData = store => store.dispatch(fetchAdmins());

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(AdminsListPage)
};
