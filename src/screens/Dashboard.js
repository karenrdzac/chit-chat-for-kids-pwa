import React, { Component } from "react";
import '../scss/app.scss';
import { Route, Link, Routes, Outlet } from "react-router-dom";

import activities from '../assets/images/activities.png';
import brain from '../assets/images/brain.png';
import community from '../assets/images/community.png';
import communityPersons from '../assets/images/community-persons.png';
import home from '../assets/images/home.png';
import myProgress from '../assets/images/my-progress.png';
import profile from '../assets/images/profile.png';
import robotBtn from '../assets/images/robot-btn.png';

import MyProgress from "./MyProgress";
import Community from "./Community";


class Dashboard extends Component {
	constructor(props) {
		super(props);
			
		this.state = {
			title: 'Progress',
			image: brain,
		}
	}

	changeToMyProgress = () => {
		this.setState({
			title: 'Progress',
			image: brain
		});
	}

	changeToCommunity = () => {
		this.setState({
			title: 'Know Our Community',
			image: communityPersons
		})
	}

	render() {
		return (
			<div className = 'ChitChat'>
				<div className = 'ChitChat-dashboard-header'>
					<div>
						<img className = 'ChitChat-dashboard-header-icon' src={this.state.image}></img>
						<h2>{this.state.title}</h2>
					</div>
					<div>
						<button className='ChitChat-dashboard-header-robot-btn'>
							<Link to='/robot'><img src={robotBtn}></img></Link>	
						</button>
					</div>
				</div>
				<Outlet/>
				<div className='ChitChat-dashboard-footer'>
						<div className='ChitChat-dashboard-footer-nav'>
							<div className='ChitChat-dashboard-footer-nav-cont'>
								<button className='ChitChat-dashboard-footer-nav-cont-option'>
									<Link to='/'>
										<img src={activities}></img>
										<span>Activities</span>
									</Link>
								</button>
							</div>
							<div className='ChitChat-dashboard-footer-nav-cont'>
								<button className='ChitChat-dashboard-footer-nav-cont-option' onClick={this.changeToMyProgress}>
									<Link to='/dashboard/my-progress'>
										<img src={myProgress}></img>
										<span>My Progress</span>
									</Link>
								</button>
							</div>
							<div className='ChitChat-dashboard-footer-nav-cont'>
								<button className='ChitChat-dashboard-footer-nav-cont-option'>
									<Link to='/'>
										<img src={home}></img>
										<span>Home</span>
									</Link>									
								</button>
							</div>
							<div className='ChitChat-dashboard-footer-nav-cont'>
								<button className='ChitChat-dashboard-footer-nav-cont-option' onClick={this.changeToCommunity}>
									<Link to='/dashboard/community'>
										<img src={community}></img>
										<span>Community</span>
									</Link>									
								</button>
							</div>
							<div className='ChitChat-dashboard-footer-nav-cont'>
								<button className='ChitChat-dashboard-footer-nav-cont-option'>
									<Link to='/'>
										<img src={profile}></img>
										<span>Profile</span>
									</Link>
								</button>
							</div>
						</div>
					</div>
			</div>
		);
	}
}

export default Dashboard;