import React from 'react';

class ThemedParty extends React.Component {



  render() {

    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });

    return (
      <div>
        {childrenWithExtraProp}
      </div>
    )

  }
}

export default ThemedParty;
