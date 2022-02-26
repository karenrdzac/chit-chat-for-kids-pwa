import React, { Component } from "react";
import '../scss/app.scss';
import Carrousel from '../components/Carrousel';

class Robot extends Component {
  constructor(props) {
		super(props);
		this.state = this.initialize();
	}
	
	initialize = () => {
		return {
			levelData : [
				{
					id:1,
					items: [
						{
							id:1,
							imgName: 'Group_18',
							status: 'Approved'
						},
						{
							id:2,
							imgName: 'Group_12',
							status: 'In Progress'
						},
						{
							id:3,
							imgName: 'Group_19',
							status: 'Not Started'
						},
						{
							id:4,
							imgName: 'Group_15',
							status: 'Not Started'
						}
					]
				},
				{
					id:2,
					items: [
						{
							id:1,
							imgName: 'Group_14',
							status: 'Not Started'
						},
						{
							id:2,
							imgName: 'Group_21',
							status: 'Not Started'
						},
						{
							id:3,
							imgName: 'Group_16',
							status: 'Not Started'
						},
						{
							id:4,
							imgName: 'Group_20',
							status: 'Not Started'
						}
					]
				},
				{
					id:3,
					items: [
						{
							id:1,
							imgName: 'Group_13',
							status: 'Not Started'
						},
						{
							id:2,
							imgName: 'Group_30',
							status: 'Not Started'
						},
						{
							id:3,
							imgName: 'Group_31',
							status: 'Not Started'
						},
						{
							id:4,
							imgName: 'Group_32',
							status: 'Not Started'
						}
					]
				},
				{
					id:4,
					items: [
						{
							id:1,
							imgName: 'Group_18',
							status: 'Not Started'
						},
						{
							id:2,
							imgName: 'Group_19',
							status: 'Not Started'
						},
						{
							id:3,
							imgName: 'Group_20',
							status: 'Not Started'
						},
						{
							id:4,
							imgName: 'Group_21',
							status: 'Not Started'
						}
					]
				}
			]
		}
	};

	render() {

		let levelList = this.state.levelData.map((level)=>{
			return( 
				<Carrousel
					states={this.state}
					key={level.id}
					id={level.id}
					items={level.items}
				/>
			)
		});

    return (
        <div className='ChitChat ChitChat-robot'>
          {levelList}
        </div>
    );
  }
}

export default Robot;