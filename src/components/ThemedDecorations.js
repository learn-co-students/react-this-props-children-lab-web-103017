import React from 'react'

export default class ThemedDecorations extends React.Component {
  render(props) {
    const childrenWithWrapper = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      )
    })
    return(
      <div>
     {childrenWithWrapper}
     </div>
    )
  }
}