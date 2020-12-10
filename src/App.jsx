import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Row, Col} from 'react-onsenui';
import {notification} from 'onsenui';
import "./style.css";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      turn : 0,
      data: [
        [0 , -1, -1],
        [0 ,  1,  0],
        [0 ,  1,  0],
      ],
    };
    this.setMark = this.setMark.bind(this);
  }

  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>〇✕ゲーム</div>
      </Toolbar>
    );
  }

  getMark(value) {
    var return_value;
    if(value == "〇"){
      return_value = "〇";
    }else if(value == "×"){
      return_value = "×";
    }else{
      return_value = "";
    }
    return return_value;
  }

  setMark(i, j) {
    var s = this.state; // stateの内容を取得
    if( s.turn % 2 ){
      s.data[i][j] = "〇";
    }else{
      s.data[i][j] = "×";
    }
    s.turn += 1;
    this.setState(s);
  }


  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row>
          <Col className="box" onClick={() => this.setMark(0, 0)}>
            {this.getMark(this.state.data[0][0])}
          </Col>
          <Col className="box" onClick={() => this.setMark(0, 1)}>
            {this.getMark(this.state.data[0][1])}
          </Col>
          <Col className="box" onClick={() => this.setMark(0, 2)}>
            {this.getMark(this.state.data[0][2])}
          </Col>
        </Row>
        <Row>
          <Col className="box" onClick={() => this.setMark(1, 0)}>
            {this.getMark(this.state.data[1][0])}
          </Col>
          <Col className="box" onClick={() => this.setMark(1, 1)}>
            {this.getMark(this.state.data[1][1])}
          </Col>
          <Col className="box" onClick={() => this.setMark(1, 2)}>
            {this.getMark(this.state.data[1][2])}
          </Col>
        </Row>
        <Row>
          <Col className="box" onClick={() => this.setMark(2, 0)}>
            {this.getMark(this.state.data[2][0])}
          </Col>
          <Col className="box" onClick={() => this.setMark(2, 1)}>
            {this.getMark(this.state.data[2][1])}
          </Col>
          <Col className="box" onClick={() => this.setMark(2, 2)}>
            {this.getMark(this.state.data[2][2])}
          </Col>
        </Row>
      </Page>
    );
  }
}