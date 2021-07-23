
import PropertyBanner from '../assets/images/PropertyBanner.png';
import React, { useEffect, useState, Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import brokerimg from '../assets/images/710x473.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../../src/styles.css';
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from './Leftsidebar'
import Tab from './Tab'
import { connect } from 'react-redux';
import { getProperties } from '../actions/propertyActions';
import PropTypes from 'prop-types';

class PropertyDetails extends Component {
    componentDidMount() {

        const id = "608fdd76597ffc2428ff1ba9"
        this.props.getProperties();
        console.log(id)

    }

    render() {
        const { properties } = this.props.property;

        const mapStyles = {
            height: "50vh",
            width: "100%"
        };

        const defaultCenter = {
            lat: 41.3851, lng: 2.1734
        }


        return (



            <div>
                <img className="d-block w-100" src={PropertyBanner} alt="First slide" />


                <div class="main">
                    <br></br>

                    <div class="row">
                        <div class="col-sm-2">
                        </div>
                        <div class="col-md-3">
                            <Sidebar />
                        </div>
                        <div class="col-md-5">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-9">



                                            <div>
                                                <h4 style={{ textAlign: "left" }}> Model Family</h4>
                                            </div>



                                            <p style={{ textAlign: "left" }}><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#95c41f" }} /> 123 Kathal St. Tampa City,</p>
                                        </div>
                                        <div class="col-md-3">
                                            <h5 style={{ color: "#95c41f" }}>$362,100</h5>
                                            <h5 >Per Month</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>

                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={brokerimg}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={brokerimg}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={brokerimg}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <br></br>

                            <h1>{this.property_location}</h1>


                            <Tab />
                            <h4 style={{ float: "left" }}>LOCATION</h4>
                            <br></br>
                            <LoadScript
                                googleMapsApiKey='AIzaSyBOlxbM2_cHw9F2LtlBPHEv6ZccvjNdS14'>
                                <GoogleMap
                                    mapContainerStyle={mapStyles}
                                    zoom={17}
                                    center={defaultCenter}
                                />
                            </LoadScript>
                            <br></br>
                            <div>
                                <h4 style={{ textAlign: "left" }}>CONTACT WITH US</h4>
                            </div>
                            <br></br>
                            <div>
                                <Form >
                                    <div class="row" style={{ marginBottom: "5px" }}>
                                        <div class="col-md-6" >
                                            <Form.Group controlId="formBasicText">
                                                <Form.Control style={{ border: "0px solid white" }} type="text" placeholder="Full Name" />
                                            </Form.Group>

                                        </div>
                                        <div class="col-md-6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control style={{ border: "0px solid white" }} type="email" placeholder="Enter Email" />

                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div class="row" style={{ marginBottom: "5px" }}>
                                        <div class="col-md-6">
                                            <Form.Group controlId="formBasicText">
                                                <Form.Control style={{ border: "0px solid white" }} type="text" placeholder="Subject" />
                                            </Form.Group>
                                        </div>
                                        <div class="col-md-6">
                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Control style={{ border: "0px solid white" }} type="text" placeholder="Phone Number" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">

                                            <Form.Group controlId="exampleForm.ControlTextarea1">

                                                <Form.Control style={{ border: "0px solid white" }} as="textarea" rows={3} placeholder="Comment" />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button style={{ background: "#95c41f", border: "none" }} variant="primary" type="submit">
                                        SEND MESSAGE
                                   </Button>
                                </Form>
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
PropertyDetails.propTypes = {
    getProperties: PropTypes.func.isRequired,
    property: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    property: state.property
});

export default connect(mapStateToProps, { getProperties })(PropertyDetails);