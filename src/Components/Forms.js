import { Input, Select, Button, Col, Row, Form } from 'antd';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import './Forms.css';

const InputGroup = Input.Group;
const Option = Select.Option;
const FormItem = Form.Item;

class form2 extends Component{

    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            title: "",
            network:"",
            system:"",
          }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.setState({
                redirect: true,
                title: values.title,
                network: values.network,
                system: values.system
            })

            console.log('Received values of form: ', values);
          } 
        });
      }


    render() {
        const { getFieldDecorator } = this.props.form;


        if (this.state.redirect) {
            return <Redirect to={'/assign/' + this.state.title + '/' + this.state.network + '/' + this.state.system} />;
          }

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <h1>SPCR</h1>
                <br/>
                <h1><strong>SUBMIT NEW REQUEST</strong></h1>
                <br/>
                <h3><strong>BASIC INFO</strong></h3>
                
                <div className="outline">  
                
                    <InputGroup>
                        <Row>
                            <p>REQUEST TITLE:</p>
                            <FormItem>
                                {getFieldDecorator('title', {
                                            rules: [{ required: true, message: 'Please input a title' }],
                                        })(
                                            <Input placeholder="Input title here" style={{ width: 600 }} />
                                )}
                            </FormItem>
                        </Row>
                        <br/>
                        <Row className= "second">
                            <Col span={5}> 
                                <p>NETWORK:</p>

                                <FormItem>
                                {getFieldDecorator('network', {
                                            rules: [{ required: true, message: 'Please select a network' }],
                                        })(
                                    <Select
                                        placeholder="POP"
                                        style={{ width: 125 }}
                                    >
                                    <Option value="POP">POP</Option>
                                        <Option value="ORD">ORD</Option>
                                        <Option value="OCS">OCS</Option>
                                    </Select>
                                )}
                                </FormItem>
                            </Col>
                            <Col span = {5}>
                                <p>SYSTEM:</p>
                                <FormItem>
                                {getFieldDecorator('system', {
                                                                rules: [{ required: true, message: 'Please select a system' }],
                                            })(
                                        <Select
                                            placeholder="OPTIMUS"
                                            style={{ width: 125 }}
                                        >
                                            <Option value="OPTIMUS">OPTIMUS</Option>
                                            <Option value="PRIME">PRIME</Option>
                                            <Option value="BUMBLEBEE">BUMBLEBEE</Option>
                                        </Select>
                                )}
                                </FormItem>
                            </Col>
                        </Row>
                    </InputGroup>
                </div>
                <br/>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>
                </Form>
            </div>

        )
    }
}

const Wrappedform2 = Form.create()(form2);

export default Wrappedform2;
