import React from "react";

export default function Cart() {
  return (
    <>
      <div className="bg-warning p-3">
        <h4>Your Cart</h4>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Nokia 5</td>
              <td>
                <input type="number" className="form-control w-50" value="2" />
              </td>
              <td>1250</td>
            </tr>
            <tr>
              <td>Nokia 5</td>
              <td>
                <input type="number" className="form-control w-50" value="2" />
              </td>
              <td>1250</td>
            </tr>
            <tr>
              <td colspan="2" className="font-weight-bold text-right">
                Total
              </td>
              <td>3750</td>
            </tr>
            <tr>
              <td colspan="3" className="text-center">
                <button className="btn btn-info">Checkout</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
