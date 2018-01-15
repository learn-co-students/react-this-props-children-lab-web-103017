// Code ThemedDecoration Component Here
// Code Invitation Component Here
import React from 'react';

export default class ThemedDecoration extends React.Component {

  render() {
    const parentProp = this.props.theme;
    const childrenWithClassName = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: parentProp
      });
    });
    return (
      <div>
        {childrenWithClassName}
      </div>
    );
  }
}
