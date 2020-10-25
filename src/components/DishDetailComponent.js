import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props)
    }

    renderDish(dish) {
        if (dish != null) {
            return (<div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            )}
        else {
            return <div></div>
        }
    }

    renderComments(selectedDish) {

        if (selectedDish != null) {
            const comments = selectedDish.comments
            if(comments != null ){
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => (
                            <div>
                                <li>{comment.comment}</li>
                                <li>--{comment.author}, {comment.date}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }else {
            return <div></div>
        }}
        else {
            return <div></div>
        }
    }

    render() {
        const selectedDish = this.props.selectedDish;
        return (
        <div className="row">
            {this.renderDish(selectedDish)}
            {this.renderComments(selectedDish)}
        </div>);
    }

}

export default DishDetail;