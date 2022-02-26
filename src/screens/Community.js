import React, { Component } from "react";
import '../scss/app.scss';

class Community extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className = 'ChitChat-dashboard'>
			<div className='ChitChat-dashboard-community'>
				<div className='ChitChat-dashboard-community-header'>
					<p>Your kid is not alone. Meet other parents and share recommendations to grow together in knowledge and experiences.</p>
				</div>
                <div className='ChitChat-dashboard-community-body'>
                    <div className='ChitChat-dashboard-community-body-card'>
                        <div className='ChitChat-dashboard-community-body-card-cont'>
                            <p className='ChitChat-dashboard-community-body-card-cont-text'>Undestanding the Differences between Neurotypical and Autism Spectrum</p>    
                        </div>
                        <div className='ChitChat-dashboard-community-body-card-btn-cont'>
                            <button className='ChitChat-purple-btn'>Join</button>    
                        </div>
                    </div>
                    <div className='ChitChat-dashboard-community-body-card'>
                        <div className='ChitChat-dashboard-community-body-card-cont'>
                            <p className='ChitChat-dashboard-community-body-card-cont-text'>What do I need to consider if my son is a Neurotypical child?</p>    
                        </div>
                        <div className='ChitChat-dashboard-community-body-card-btn-cont'>
                            <button className='ChitChat-purple-btn'>Read More</button>
                        </div>
                    </div>
                    <div className='ChitChat-dashboard-community-body-card'>
                        <div className='ChitChat-dashboard-community-body-card-cont'>
                            <p className='ChitChat-dashboard-community-body-card-cont-text'>How hard is for kids to fit with other kids?</p>    
                        </div>
                        <div className='ChitChat-dashboard-community-body-card-btn-cont'>
                            <button className='ChitChat-purple-btn'>Read More</button>    
                        </div>
                    </div>
                    <div className='ChitChat-dashboard-community-body-card'>
                        <div className='ChitChat-dashboard-community-body-card-cont'>
                            <p className='ChitChat-dashboard-community-body-card-cont-text'>Empowering Neurotypical kids to forge emotional connections</p>    
                        </div>
                        <div className='ChitChat-dashboard-community-body-card-btn-cont'>
                            <button className='ChitChat-purple-btn'>Join</button>    
                        </div>
                    </div>
                </div>
			</div>
		</div>
		);
	}
}

export default Community;