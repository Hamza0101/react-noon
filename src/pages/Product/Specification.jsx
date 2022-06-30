import React from "react";

export default function Specification() {
  return (
    <div className="containerfluid mx-4">
      <h5>Specifications</h5>
      <div className="d-flex">
        <div className="col-6">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
