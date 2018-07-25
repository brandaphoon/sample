import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col } from 'antd';
import Menu from './Components/Menu';
// import Forms from './Components/Forms';
import Wrappedform2 from './Components/Forms';
import Dashboard from './Components/Dashboard';
import Assign from './Components/Assign';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom' 

class App extends Component {
    render() {
        return (
            <Router>
            <Row gutter={40}>
                <Col span={18} push={6}>
                    <div>
                        
                        <Switch>
                            <Route exact path="/" component={Wrappedform2}/>
                            <Route path="/create" component={Wrappedform2}/>
                            <Route path="/dashboard" component={Dashboard}/>
                            <Route path="/assign/:title/:network/:system" component={Assign}/>
                        </Switch>
                        
                   </div>
                </Col>
                <Col span={6} pull={18}>
                    <div >
                        <Menu/>
                    </div>
                </Col>
            </Row>
            </Router>
        );
    }
  }
  

export default App;
