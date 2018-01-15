// Code ThemedDecoration Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component {
  render() {
    const addProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })

    return (
      <div className="children-prop">
        {addProp}
      </div>
    );
  }
}
