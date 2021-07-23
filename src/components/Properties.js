import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
  NavLink,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as Icon from "react-bootstrap-icons";
// import { SketchPicker } from 'react-color';

import { connect } from "react-redux";
import { getProperties } from "../actions/propertyActions";
import PropTypes from "prop-types";
import PropertyBanner from "../assets/images/PropertyBanner.png";
import "../assets/styles/Styles.css";
// import './Style.css';

class PropertyList extends Component {
  componentDidMount() {
    this.props.getProperties();
  }

  render() {
    const { properties } = this.props.property;
    return (
      <>
        <img
          className="d-block w-100"
          src={PropertyBanner}
          alt="PropertyBanner"
        />
        <br />
        <Container>
          <Row>
            <Col xs="6" sm="4">
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    <b>FILTER</b>
                  </CardTitle>
                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{property_location}</CardSubtitle> */}
                  <CardText>
                    <Form>
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          placeholder="Property Status"
                        >
                          <option>Property Status</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          placeholder="Property Status"
                        >
                          <option>Location</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          placeholder="Property Status"
                        >
                          <option>Property Types</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          placeholder="Property Status"
                        >
                          <option>Area From</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Row>
                          <Col>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              placeholder="Property Status"
                            >
                              <option>Bedrooms</option>
                            </Input>
                          </Col>
                          <Col>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              placeholder="Property Status"
                            >
                              <option>Bathroom</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              placeholder="Property Status"
                            >
                              <option>Balcony</option>
                            </Input>
                          </Col>
                          <Col>
                            <Input
                              type="select"
                              name="select"
                              id="exampleSelect"
                              placeholder="Property Status"
                            >
                              <option>Garage</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* <Button color="#841584" >Search</Button> */}
                      <Button className="success" size="lg" block>
                        Block level button
                      </Button>
                    </Form>
                  </CardText>
                </CardBody>
              </Card>
              <br />
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    <b>POPULAR </b>CATEGORY
                  </CardTitle>
                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{property_location}</CardSubtitle> */}

                  <CardText>
                    <ListGroup flush>
                      <ListGroupItem disabled tag="a" href="#">
                        <Row>
                          <Col xs="6" sm="9">
                            {" "}
                            Single Family{" "}
                          </Col>
                          <Col xs="6" sm="3">
                            {" "}
                            (45){" "}
                          </Col>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="#">
                        <Row>
                          <Col xs="6" sm="9">
                            {" "}
                            Apartments{" "}
                          </Col>
                          <Col xs="6" sm="3">
                            {" "}
                            (22){" "}
                          </Col>
                        </Row>
                      </ListGroupItem>
                    </ListGroup>
                  </CardText>
                </CardBody>
              </Card>
              <br />
              <Card>
                <CardBody>
                  <CardTitle tag="h5">
                    <b>RECENT </b>PROPERTIES
                  </CardTitle>
                  {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{property_location}</CardSubtitle> */}

                  <CardText>
                    <ListGroup flush>
                      <ListGroupItem disabled tag="a" href="#">
                        <Row>
                          <Col xs="6" sm="9">
                            {" "}
                            Single Family{" "}
                          </Col>
                          <Col xs="6" sm="3">
                            {" "}
                            (45){" "}
                          </Col>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem tag="a" href="#">
                        <Row>
                          <Col xs="6" sm="9">
                            {" "}
                            Apartments{" "}
                          </Col>
                          <Col xs="6" sm="3">
                            {" "}
                            (22){" "}
                          </Col>
                        </Row>
                      </ListGroupItem>
                    </ListGroup>
                  </CardText>
                </CardBody>
              </Card>
              <br />
              {/* <Card>
                            <CardBody>
                                <CardTitle tag="h5"><b>HELPING </b>CENTER</CardTitle>
                                <CardText>
                                    <Row>
                                        <Col><Icon.GeoAltFill color="YellowGreen" style={{fontSize:'40px'}}/></Col>
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card> */}
            </Col>
            <Col xs="6" sm="8">
              <Card className="option-bar">
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
                      <a
                        href="properties-list-leftside.html"
                        className="active-view-btn"
                      >
                        <Icon.CardList className="fa" />
                      </a>
                      &nbsp;
                      <a
                        href="properties-grid-leftside.html"
                        className="change-view-btn"
                      >
                        <Icon.GridFill className="fa" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
              <ListGroup>
                <TransitionGroup className="shopping-list">
                  {properties.map(
                    ({
                      id,
                      _id,
                      property_name,
                      property_address,
                      property_condition,
                      property_added_by,
                      date,
                    }) => (
                      <CSSTransition key={id} timeout={500} classNames="fade">
                        <Card style={{ marginBottom: "2rem" }}>
                          <CardBody>
                            <Row>
                              <Col xs="6" sm="6">
                                <CardImg
                                  top
                                  width="100%"
                                  src="/assets/318x180.svg"
                                  alt="Card image cap"
                                />
                              </Col>
                              <Col xs="6" sm="6">
                                <NavLink href={`/properties-details/${_id}`}>
                                  <CardTitle tag="h5" className="property_name">
                                    {property_name}
                                  </CardTitle>
                                </NavLink>
                                <CardSubtitle
                                  tag="h6"
                                  className="mb-2 text-muted"
                                >
                                  <Icon.GeoAltFill /> {property_address}{" "}
                                </CardSubtitle>
                                <CardText>
                                  <Row>{property_condition}</Row>
                                  <hr />
                                  <Row>
                                    <Col>{property_added_by}</Col>
                                    {/* <Col>{date}</Col> */}
                                    <Col>5 Days ago</Col>
                                  </Row>
                                </CardText>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </CSSTransition>
                    )
                  )}
                </TransitionGroup>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

PropertyList.propTypes = {
  getProperties: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  property: state.property,
});

export default connect(mapStateToProps, { getProperties })(PropertyList);
