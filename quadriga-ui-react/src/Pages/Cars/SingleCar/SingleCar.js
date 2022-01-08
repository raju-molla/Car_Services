import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
const SingleCar = (props) => {
    const { title, price, duration, images } = props.car;
    console.log(props.car);
    return (
      
      <div className="col-md-4 mb-4 ">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img
            variant="top"
            src={`http://localhost:5000/images/${images}`}
            className="img-fluid"
            style={{ margin: "auto", width: "370px", height: "247px" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Subscription Fee: <b>{price}</b>
              <br />
              Duration: {duration}
            </Card.Text>
            <Link to="/subscribe">
              <button className="btn btn-dark my-5">Subscribe Now</button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default SingleCar;