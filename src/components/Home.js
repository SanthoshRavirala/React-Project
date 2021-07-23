import Carousel from 'react-bootstrap/Carousel';
import brokerimg from '../assets/images/2.jpg';
import Business from '../assets/images/Business-Broker.jpg';

import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProperties } from '../actions/propertyActions';
import PropTypes from 'prop-types';
import {
    Container, ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Form, FormGroup, Input, Label, FormText, NavLink, Nav
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as Icon from 'react-bootstrap-icons';
// import { StyleSheet, Text, View, Linking } from 'react-native';


class HomePage extends Component {
    componentDidMount() {
        this.props.getProperties();
    }

    render() {
        const { properties } = this.props.property;
        return (
            <>
                <Carousel className="slider">
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-100" src={Business} alt="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img className="d-block w-100" src={brokerimg} alt="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={Business} alt="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <h2 align="center"><b>FEATURED PROPERTIES</b></h2>


                <Container>
                    <Row>

                        <Col xs="6" sm="12">
                            {/* <Card className="option-bar">
                                <div className="row">
                                    <div className="col-lg-6 col-md-5 col-sm-5 col-xs-2">
                                        <h4>
                                            <span className="heading-icon">
                                                <Icon.CardList className="fa" />
                                            </span>
                                            <span className="hidden-xs">Properties List</span>
                                        </h4>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-7 col-xs-10 cod-pad">
                                        <div className="sorting-options">
                                            <select className="sorting">
                                                <option>New To Old</option>
                                                <option>Old To New</option>
                                                <option>Properties (High To Low)</option>
                                                <option>Properties (Low To High)</option>
                                            </select>
                                            <a href="properties-list-leftside.html" className="active-view-btn"><Icon.CardList className="fa" /></a>
                                        &nbsp;
                                        <a href="properties-grid-leftside.html" className="change-view-btn"><Icon.GridFill className="fa" /></a>
                                        </div>
                                    </div>
                                </div>
                            </Card> */}
                            <ListGroup>
                                <TransitionGroup className="shopping-list">
                                    {properties.map(({ id, property_name, property_location }) => (
                                        <CSSTransition key={id} timeout={500} classNames="fade">
                                            <Card style={{ marginBottom: '2rem' }}>
                                                <CardBody>
                                                    <Row>
                                                        <Col xs="6" sm="3">
                                                            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                                                            <NavLink href="properties-details">
                                                                <CardTitle tag="h5" className="property_name">{property_name}</CardTitle>
                                                            </NavLink>
                                                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                                <Icon.GeoAltFill /> {property_location}
                                                            </CardSubtitle>
                                                            <CardText>
                                                                {/* <Row>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>4800 sq ft</Col>
                                                                            <Col>3 Beds</Col>
                                                                            <Col>TV</Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row> */}
                                                                <br />
                                                                {/* <Row>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>2 Baths</Col>
                                                                            <Col>1 Garage</Col>
                                                                            <Col>3 Balcony</Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row> */}
                                                                <hr />
                                                                {/* <Row>
                                                                    <Col>Jhon Doe</Col>
                                                                    <Col>5 Days ago</Col>
                                                                </Row> */}
                                                            </CardText>
                                                        </Col>
                                                        {/* <Col xs="6" sm="3">
                                                            <NavLink href="properties-details">
                                                                <CardTitle tag="h5" className="property_name">{property_name}</CardTitle>
                                                            </NavLink>
                                                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                                                <Icon.GeoAltFill /> {property_location}
                                                            </CardSubtitle>
                                                            <CardText>
                                                                <Row>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>4800 sq ft</Col>
                                                                            <Col>3 Beds</Col>
                                                                            <Col>TV</Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                                <br />
                                                                <Row>
                                                                    <Col>
                                                                        <Row>
                                                                            <Col>2 Baths</Col>
                                                                            <Col>1 Garage</Col>
                                                                            <Col>3 Balcony</Col>
                                                                        </Row>
                                                                    </Col>
                                                                </Row>
                                                                <hr />
                                                                <Row>
                                                                    <Col>Jhon Doe</Col>
                                                                    <Col>5 Days ago</Col>
                                                                </Row>
                                                            </CardText>
                                                        </Col> */}
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </CSSTransition>
                                    ))}
                                </TransitionGroup>
                            </ListGroup>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col sm="3">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card body>
                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>


        );
    }
}

HomePage.propTypes = {
    getProperties: PropTypes.func.isRequired,
    property: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    property: state.property
});

export default connect(mapStateToProps, { getProperties })(HomePage);

