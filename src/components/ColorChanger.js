import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render() {
    return (
      // recieving props.. want to use what we named it in the rendering in apps.js
      <select className="dropDownContainer" onChange={(e) => this.props.update(e.target.value)} disabled={this.props.alllowEdit === 'false'}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
