import React, {useEffect, useState,Component} from 'react'
import {Link} from 'react-router-dom'
import img from '../assets/images/90x63.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/styles.css';

import {
faYoutube,
faFacebook,
faTwitter,
faInstagram,
faPinterest
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';
import {getProperties}  from '../actions/propertyActions';
import PropTypes from 'prop-types';

class Leftsidebar extends Component
{
componentDidMount(){
this.props.getProperties();
}
render(){
const { properties } = this.props.property; 
return(

<div class="sidebar">
<div class="popular" style={{background:"white"}}>
<h7><b>RECENTLY </b>PROPERTIES</h7>
{properties.map(({ id, property_name, property_location ,price}) => (
<div class="row" style={{marginTop:"25px"}}>


<div class="col-sm-5">
<img
    className="d-block w-100"
    src={img}
    alt="Second slide"
/>
</div>

<div class="col-sm-7">
<div><b style={{color:"#95c41f",fontSize:"13px" }}> {property_name}</b></div>

<div><span style={{fontSize:"12px"}}>January 12 ,2020</span></div>
<div><b style={{fontSize:"12px"}} >{price}</b></div>

</div>


</div>))}



<div>
</div>
</div>
<br></br>
<div class="popular" style={{background:'white'}}>

<h7><b>POPULAR </b>CATEGORY</h7>

<div class="row" id="popularInside">

<ul class="list-group">
<li class="list-group-item d-flex justify-content-between align-items-center">
<a href="">Apartments</a>
<span >(14)</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
<a href="">Single Home</a>
<span  >(2)</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
<a href="">Others</a>
<span >(1)</span>
</li>
</ul>
</div>
</div>
<div class="social-media" style={{background:"white"}}>
    <div>
<h7><b>SOCIAL </b>MEDIA</h7>
</div>
<div class="row" id="sm-id" style={{marginTop:"15px"}} >
<div class="col-md-2" id="sm">
<a href="https://www.youtube.com/c/jamesqquick"
className="youtube social">
<FontAwesomeIcon icon={faYoutube} style={{fontSize:"25px"}} />
</a>
</div>
<div class="col-md-2" id="sm">
<a href="https://www.facebook.com/learnbuildteach/"
className="facebook social">
<FontAwesomeIcon icon={faFacebook} style={{fontSize:"25px"}} />
</a>
</div>
<div class="col-md-2" id="sm">
<a href="https://www.twitter.com/jamesqquick" className="twitter social">
<FontAwesomeIcon icon={faTwitter} style={{fontSize:"25px"}} />
</a>
</div>
<div class="col-md-2" id="sm">
<a href="https://www.instagram.com/learnbuildteach"
className="instagram social">
<FontAwesomeIcon icon={faInstagram} style={{fontSize:"25px"}} />
</a>
</div>
<div class="col-md-2" id="sm">
<a href="https://www.instagram.com/learnbuildteach"
className="pinterest social">
<FontAwesomeIcon icon={faPinterest} style={{fontSize:"25px"}} />
</a>
</div>
</div>
</div>

</div>
);
}
}
Leftsidebar.propTypes = { 
getProperties: PropTypes.func.isRequired,
property: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
property: state.property
});

export default connect(mapStateToProps, { getProperties } )(Leftsidebar);

