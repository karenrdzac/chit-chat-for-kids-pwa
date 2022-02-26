import React, { Component } from "react";
import '../scss/app.scss';

import cognitive from '../assets/images/cognitive.svg';
import languaje from '../assets/images/languaje.svg';
import motor from '../assets/images/motor.svg';
import share from '../assets/images/share.png';

import LineGraphic from "../components/LineGraphic/LineGraphic";


class MyProgress extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className = 'ChitChat-dashboard'>
			<div className='ChitChat-dashboard-therapy'>
				<div className='ChitChat-dashboard-therapy-header'>
					<h3 className='ChitChat-dashboard-therapy-header-title'>General Process</h3>
				</div>
				<div className='ChitChat-dashboard-therapy-body'>
					<div className='ChitChat-dashboard-therapy-body-graphic'>
						<LineGraphic></LineGraphic>
					</div>
					<div className='ChitChat-dashboard-therapy-body-card'>
						<div className='ChitChat-dashboard-therapy-body-card-cont'>
							<div className='ChitChat-dashboard-therapy-body-card-cont-header'>
								<h3>Languaje</h3>
								<button className='ChitChat-dashboard-therapy-body-card-cont-header-share'>
                                    <img src={share}></img>    
                                </button>	
							</div>
							<p>Emma shows a slow progress in her linguistic skills. Don’t worry it’s usual in kids her age.</p>
							<img className='ChitChat-dashboard-therapy-body-card-cont-img' src={languaje}></img>
							<button className='ChitChat-purple-btn'>See More</button>
						</div>
						<div className='ChitChat-dashboard-therapy-body-card-cont'>
							<div className='ChitChat-dashboard-therapy-body-card-cont-header'>
								<h3>Cognitive</h3>
								<button className='ChitChat-dashboard-therapy-body-card-cont-header-share'>
                                    <img src={share}></img>    
                                </button>
							</div>
							<p>Emma is almost crossing to an intermediate level in her cognitive skills. Let’s keep going!</p>
							<img className='ChitChat-dashboard-therapy-body-card-cont-img' src={cognitive}></img>
							<button className='ChitChat-purple-btn'>See More</button>
						</div>
						<div className='ChitChat-dashboard-therapy-body-card-cont'>
							<div className='ChitChat-dashboard-therapy-body-card-cont-header'>
								<h3>Motor</h3>
								<button className='ChitChat-dashboard-therapy-body-card-cont-header-share'>
                                    <img src={share}></img>    
                                </button>
							</div>
							<p>Emma’s motor skills are rocking! She’s advancing pretty clear to more mature movements.</p>
							<img className='ChitChat-dashboard-therapy-body-card-cont-img' src={motor}></img>
							<button className='ChitChat-purple-btn'>See More</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default MyProgress;