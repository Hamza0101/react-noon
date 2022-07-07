import React from "react";
import Address from "../../pages/Address";
import { useNavigate } from "react-router-dom";
import Switch from "react-switch";
import Card from "./Card";

export default function AddressCard(props) {
  console.log("I am props", props.updated.myUpdate);
  const myData = props.updated;
  console.log("MyData", myData);
  let navigate = useNavigate();
  const addAddress = () => {
    navigate(`/addAddress`, { state: { myData } });
  };
  const handleDefaultAddress = (obj) => {
    // alert(obj);
    // alert(typeof obj);
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
        {props.updated.length ? (
          <>
            {props.updated.map((data, index) => {
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
            <h1>""</h1>
          </>
        )}
      </div>
      <h5>
        <strong>Other Address</strong>
      </h5>
      {props.updated.length ? (
        <>
          {props.updated.map((data, index) => {
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
          <h1>""</h1>
        </>
      )}
    </div>
  );
}
