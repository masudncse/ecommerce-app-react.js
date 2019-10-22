import React from "react";
import {Link} from "react-router-dom";

export default function SingleProduct(props) {
  return (
    <>
      <div className={"col-md-" + props.col}>
        <div className="card">
          <img
            src={props.product.imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.product.title}</h5>
            <p className="card-text">{props.product.description}</p>
            <div className="row">
              <div className="col-md-6">
                <Link to={"single/"+props.product.id} className="btn btn-info btn-block">
                  Details
                </Link>
              </div>
              <div className="col-md-6">
                <button className="btn btn-danger btn-block">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
