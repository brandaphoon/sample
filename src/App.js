import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col } from 'antd';
import Menu from './Components/Menu';
import Forms from './Components/Forms';




class App extends Component {
    render() {
        return (
            <Row gutter={40}>
                <Col span={18} push={6}>
                    <div>
                        <h1>SPCR</h1>
                        <br/>
                        <h1><strong>SUBMIT NEW REQUEST</strong></h1>
                        <br/>
                        <h3><strong>BASIC INFO</strong></h3>
                        <Forms/>
                   </div>
                </Col>
                <Col span={6} pull={18}>
                    <div >
                        <Menu/>
                    </div>
                </Col>
            </Row>


        );
        }
  }
  

export default App;
