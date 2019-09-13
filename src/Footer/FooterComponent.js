import React, { Component } from 'react'

const footerStyle ={
  "position": "fixed",
  "left": "0",
  "bottom": "0",
  "width": "100%",
  "borderBottom": "4px solid #2ebdbd",
  "backgroundColor": "#537c8e",
  "padding": "10px",
  "color": "#eff1e4",
  "textAlign": "center",
}
export default class FooterComponent extends Component {
  render() {
    return (
      <div style={footerStyle}>
        Made by Minh Duc Nguyen
      </div>
    )
  }
}
