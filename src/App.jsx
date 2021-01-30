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
        [0 , 0, 0],
        [0 , 0, 0],
        [0 , 0, 0],
      ],
    };
    this.setMark = this.setMark.bind(this);
    this.judge = this.judge.bind(this);
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
    if(value == 1){
      return_value = "〇";
    }else if(value == 2){
      return_value = "×";
    }else{
      return_value = "";
    }
    return return_value;
  }

  setMark(i, j) {
    var s = this.state; // stateの内容を取得
    if(s.data[i][j] != 0){
      return;
    }
    if( s.turn % 2 ){
      s.data[i][j] = 1;
    }else{
      s.data[i][j] = 2;
    }
    s.turn += 1;
    this.setState(s);


    var j = this.judge();
    if(j == 0){
      notification.alert("引き分け！！");
      this.setState({data:[[0,0,0],[0,0,0],[0,0,0]], turn:0})
    }else if(j == 1){
      notification.alert("○の勝ち");
      this.setState({data:[[0,0,0],[0,0,0],[0,0,0]], turn:0})
    }else if(j == 2){
      notification.alert("×の勝ち");
      this.setState({data:[[0,0,0],[0,0,0],[0,0,0]], turn:0})
    }
  }

  judge(){
    var data = this.state.data;
    for(var i=0; i <= 2 ; i++){
      if((data[i][0] == data[i][1]) && (data[i][1] == data[i][2]) && (data[i][0] != 0)){
        return data[i][0];
      }
      if((data[0][i] == data[1][i]) && (data[1][i] == data[2][i]) && (data[0][i] != 0)){
        return data[0][i];
      }
    }
    if((data[0][0] == data[1][1]) && (data[1][1] == data[2][2]) && (data[0][0] != 0)){
      return data[0][0];
    }else if((data[0][2] == data[1][1]) && (data[1][1] == data[2][0]) && (data[2][0] != 0)){
      return data[0][0];
    }
    if(this.state.turn == 9){
      return 0;
    }
    return 99;

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