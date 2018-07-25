import { Input, Select, Button, Col, Row} from 'antd';
import React, { Component } from 'react';

const InputGroup = Input.Group;
const Option = Select.Option;

class Assign extends Component{

    render() {
               
        return (
            <div>
                <div>  
                    <InputGroup>
                        <Row>
                            <p>Assign</p>
                            <Input placeholder={this.props.match.params.title} style={{ width: 600 }} />
                        </Row>
                        <br/>
                        <Row className= "second">
                            <Col span={5}> 
                                <p>NETWORK:</p>
                                <Select
                                    placeholder={this.props.match.params.network}
                                    style={{ width: 125 }}
                                >
                                <Option value="POP">POP</Option>
                                    <Option value="ORD">ORD</Option>
                                    <Option value="OCS">OCS</Option>
                                </Select>
                            </Col>
                            <Col span = {5}>
                                <p>SYSTEM:</p>
                                <Select
                                    placeholder={this.props.match.params.system}
                                    style={{ width: 125 }}
                                >
                                    <Option value="OPTIMUS">OPTIMUS</Option>
                                    <Option value="PRIME">PRIME</Option>
                                    <Option value="BUMBLEBEE">BUMBLEBEE</Option>
                                </Select>
                            </Col>
                        </Row>
                    </InputGroup>
                </div>
                <br/>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </div>

        )
    }
}

export default Assign;