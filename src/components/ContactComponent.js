import React, { Component } from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup,Col, Label, Input, FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);

        this.state= {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message:'',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
    }
    handleInputChange(event){
        const target= event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        console.log("current state is : "+JSON.stringify(this.state));
        alert("current state is : "+JSON.stringify(this.state));
        event.preventDefault();
    }
    handleBlur = (field) => (evt) =>{
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }
    validate(firstname,lastname,telnum,email){
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if(this.state.touched.firstname && firstname.length < 3){
            errors.firstname='First name should be more than 3 caracters.';
        }else if(this.state.touched.firstname && firstname.length > 10){
            errors.firstname='First name should be less than 10 caracters.';
        }
        if(this.state.touched.lastname && lastname.length < 3){
            errors.lastname='Last name should be more than 3 caracters.';
        }else if(this.state.touched.lastname && lastname.length > 10){
            errors.lastname='Last name should be less than 10 caracters.';
        }
        const reg = /^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            errors.telnum = 'Tel num should contain only numbers.';
        }
        if(this.state.touched.email && email.split('').filter(x => x ==='@').length !== 1){
            errors.email = 'Email invalid( missing @).'
        }
        return errors;

    }

    render() {
    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>
                            Contact Us
                        </h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="first Name" 
                                    value={this.state.firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange}>
                                    </Input>
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="last Name" 
                                    value={this.state.lastname}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange}>
                                    </Input>
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Contact tel</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel. number" 
                                    value={this.state.telnum}
                                    onBlur={this.handleBlur('telnum')}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onChange={this.handleInputChange}>
                                    </Input>
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}> Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                                    onChange={this.handleInputChange}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={this.handleBlur('email')}>
                                    </Input>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree} 
                                            onChange={this.handleInputChange}/>{' '}
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType} 
                                    onChange={this.handleInputChange}> 
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}> Yout Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" placeholder="" rows="12" 
                                    value={this.state.message}
                                    onChange={this.handleInputChange}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    
    }
}

export default Contact;