// Code Invitation Component Here
import React from 'react';

class Invitation extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Invitation;
