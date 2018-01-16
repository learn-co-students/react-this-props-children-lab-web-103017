import React from 'react';

export default class ThemedDecoration extends React.Component {

  render() {
    console.log("props:", this.props.children)
    console.log("props 2 layer deep, text:", this.props.children[0].props.children)
    // console.log("props 2 layer deep", this.props.children[0].)
    console.log("Children", React.Children)

    const passdownprop = React.Children.map(this.props.children, child => React.cloneElement(child, { className: this.props.theme}))
    return(
      <div>
      {passdownprop}
      </div>
    )
  }
}
