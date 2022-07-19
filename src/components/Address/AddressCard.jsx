import React from "react";
import Address from "../../pages/Address";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function AddressCard(props) {
  const address = useSelector((state) => state.addressReducer);
  console.log("I am address", address.addressReducer);
  console.log("I am props", props.updated.myUpdate);
  const myData = props.updated;
  console.log("MyData", myData);
  let navigate = useNavigate();
  const addAddress = () => {
    navigate(`/addAddress`, { state: { myData } });
  };
  const handleDefaultAddress = (obj) => {
    let handleDefault = props.updated.map((data) => {
      if (data.id === obj) {
        return { ...data, defaultAddress: true };
      } else {
        return { ...data, defaultAddress: false };
      }
    });
    props.handleDefault(handleDefault);
  };
  return (
    <div className="m-2">
      <h4>
        <strong>Addresses</strong>
      </h4>
      <p className="text-black-50">
        <strong>
          {" "}
          Manage your saved address fast and easy checkout accross our
          marketplaces
        </strong>
      </p>
      <button className="btn-primary btn-lg" onClick={addAddress}>
        Add New Address
      </button>
      <div className="my-4">
        <h5>
          <strong>Default Address</strong>
        </h5>
        {address.length ? (
          <>
            {address.map((data, index) => {
              return (
                <>
                  {data.defaultAddress ? (
                    <Card
                      data={data}
                      handleDefaultAddress={handleDefaultAddress}
                    />
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </>
        ) : (
          <>
            <h5>No Address Available</h5>
          </>
        )}
      </div>
      <h5>
        <strong>Other Address</strong>
      </h5>
      {address.length ? (
        <>
          {address.map((data, index) => {
            return (
              <>
                {data.defaultAddress ? (
                  ""
                ) : (
                  <Card
                    data={data}
                    handleDefaultAddress={handleDefaultAddress}
                  />
                )}
              </>
            );
          })}
        </>
      ) : (
        <>
          <h5>No Address Available</h5>
        </>
      )}
    </div>
  );
}
