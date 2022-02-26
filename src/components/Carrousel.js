import React, { Component } from "react";
import '../scss/app.scss';

class Carrousel extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
		const importAll = (reqImg) => {
			let images = {};
			reqImg.keys().forEach((item) => { images[item.replace('./', '')] = reqImg(item); });
			return images
		};

		const images = importAll(require.context('../assets/images/carrousel', false, /\.(png|jpe?g|svg)$/));

		let outStyleStatus = 'none';
		if(this.props.status === 'Completed') {
			outStyleStatus = 'completed';
		}else if(this.props.status === 'In Progress'){
			outStyleStatus = 'inprogress';
		}

		return (
			<div className='ChitChat-carrousel-comp'>
				<section className='ChitChat-carrousel-comp-container'>

					{this.props.items.map((item)=>{
						let styleStatus = 'none';
						if(item.status === 'Approved') {
							styleStatus = 'approved';
						}else if(item.status === 'In Progress'){
							styleStatus = 'inprogress';
						}
						return(
							<div key={item.id} className="ChitChat-carrousel-comp-container-item">
								<img className="ChitChat-carrousel-comp-container-item-img" src={images[`${item.imgName}.png`]} alt={item.imgName}></img>
								<span className={'ChitChat-carrousel-comp-container-item-status ' + styleStatus}>{item.status}</span>
							</div>
						)
					})}

					<svg className='ChitChat-carrousel-comp-container-index'>
						<circle cx="43" cy="43" r="43" className={outStyleStatus}/>
						<text x="25" y="65">{this.props.id}</text>
						Sorry, your browser does not support inline SVG.
					</svg>
				</section>
			</div>
		);
  }
}

export default Carrousel;