import React, { Component } from 'react';
import { connect } from 'react-redux';


// add any needed imports here
class Users extends Component {

  render() {
      let users = this.props.users.map((user, index) => <li key={index}> {user.username}</li>)
    return (
      <div>
          {this.props.numberOfUsers}
        <ul>
          Users!
          {users}
          {state.users.length}
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        users: state.users,
        numberOfUsers: state.users.length
    };
};

export default connect(mapStateToProps)(Users)
