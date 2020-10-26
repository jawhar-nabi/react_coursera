import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
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
            )
        }
        else {
            return <div></div>
        }
    }

    function RenderComments({selectedDish}) {

        if (selectedDish != null) {
            const comments = selectedDish.comments
            if (comments != null) {
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments.map((comment) => (
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            } else {
                return <div></div>
            }
        }
        else {
            return <div></div>
        }
    }

    const DishDetail = (props) => {
        console.log('render invoked')

        const selectedDish = props.selectedDish;
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={selectedDish}/>
                    <RenderComments selectedDish= {selectedDish}/>
                </div>
            </div>
        );
    }



export default DishDetail;