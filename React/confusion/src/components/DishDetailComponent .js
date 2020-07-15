import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {
    renderComments(comments) {
        if (comments != null) {
          let options = { year: "numeric", month: "short", day: "numeric" };
          return comments.map((com) => (
            <ul key={com.id} className="list-unstyled">
              <li className="mb-2">{com.comment}</li>
              <li>
                -- {com.author}{" "}
                {new Date(com.date).toLocaleDateString("en-US", options)}
              </li>
            </ul>
          ));
        } else return(<div></div>);
    }
	render() {
		const dish = this.props.selectedDish
		if(dish == null) return (<div></div>)

		return (
			<div>
				<div className = 'row'>
					<div className = 'col-12 col-md-5 m-1'>
						<Card>
							<CardImg width="100%" src={dish.image} alt={dish.name}/>
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className = 'col-12 col-md-5 m-1'>
					<h4>Comments</h4>
                        {this.renderComments(dish.comments)}			
					</div>
				</div>
			</div>
		)
    }
}

export default DishDetail 