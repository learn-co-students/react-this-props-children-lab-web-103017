// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenWithExtra =
      React.Children.map(this.props.children, child =>{
        return React.cloneElement(child, {
          className: this.props.theme
        })
      })

    return (
      <div>
        {childrenWithExtra}
      </div>
    );
  }
}

export default ThemedDecoration;
