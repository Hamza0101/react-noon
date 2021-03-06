import React from "react";
import "./socialbar.css";

export default function SocialBar() {
  return (
    <div className="float-right footerUi mb-5 container">
      <div className=" row  ">
        <strong className="col ml-5 m-2 social-text-size">
          SHOP ON THE GO
        </strong>
        <strong className="col m-2 social-text-size">CONNECT WITH US</strong>
      </div>
      <div className="row">
        <div className="col">
          <img
            src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
            alt=""
          />
          <img
            src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
            alt=""
          />
        </div>
        <div className="col mr-2">
          <img
            className="social-logo m-1"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="social-logo m-1"
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            className="social-logo m-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgPAQXqnQweFbrCRQWpvatxGWp2VD4hSA9Q&usqp=CAU"
            alt=""
          />
          <img
            className="social-logo m-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRow5woGRntSboLagd4JBaa2yfeamejcCF6MQ&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
