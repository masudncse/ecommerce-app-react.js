import React from "react";
import { AppContext } from "../App";
import Cart from "./../components/Cart";
import SingleProduct from "./../components/SingleProduct";
import Header from "./../components/Header";

export default function Shop() {
  const AppConsumer = React.useContext(AppContext);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>

          <div className="col-md-8">
            <div className="row">
              {AppConsumer.state.products.map(product => (
                <SingleProduct product={product} col={4} />
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}
