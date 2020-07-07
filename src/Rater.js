
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Rate } from 'antd';



class Rater extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate  onChange={this.handleChange} value={value} allowHalf allowClear/>
        {value ? <span className="ant-rate-text">{value}</span> : ''}
      </span>
    );
  }
}

export default Rater;