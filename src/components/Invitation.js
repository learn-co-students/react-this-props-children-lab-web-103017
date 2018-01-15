// Code Invitation Component Here
import React from 'react';

class Invitation extends React.Component {
  render() {
    const showChildren = React.Children.map(this.props.children, child => {
      return (
        <div>
          {child}
        </div>
      )
    })
    return (
      <div>
        <h1>You've been invited!</h1>
        {showChildren}
      </div>
    )
  }
}

export default Invitation
