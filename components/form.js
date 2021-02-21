import React from "react";
import ReactDOM from "react-dom";
import { Input, Spacer, Button } from "@geist-ui/react";
import axios from "axios";

let buttonActive = "false";

function onChange() {
  let val1 = document.getElementById("email").value;
  let val2 = document.getElementById("first").value;
  let val3 = document.getElementById("last").value;

  if (val1 != "" && val2 != "" && val3 != "") {
    console.log("good");
    buttonActive = "true";
  } else {
    buttonActive = "false";
    console.log("bad");
  }
}

function submit() {
  if (process.browser && buttonActive == "true") {
    let val1 = document.getElementById("email").value;
    let val2 = document.getElementById("first").value;
    let val3 = document.getElementById("last").value;

    axios
      .post("/api/zapier", {
        email: val1,
        first: val2,
        last: val3,
      })
      .then(function (response) {
        console.log(response);
        ReactDOM.render(
          <div className="text-center">
            <h1>Thanks</h1>
          </div>,
          document.getElementById("replace")
        );
      })
      .catch(function (error) {
        console.log(error);
        ReactDOM.render(
          <div className="text-center">
            <h1>Thanks</h1>
          </div>,
          document.getElementById("replace")
        );
      });
  }
}

export default function form() {
  return (
    <div className="container">
      <div id="replace">
        <div className="text-center">
          <Input
            id="email"
            onChange={onChange}
            size="large"
            placeholder="Email"
          />
        </div>
        <Spacer y={0.5} />
        <div className="text-center">
          <Input
            id="first"
            onChange={onChange}
            size="large"
            placeholder="First Name"
          />
        </div>
        <Spacer y={0.5} />
        <div className="text-center">
          <Input
            id="last"
            onChange={onChange}
            size="large"
            placeholder="Last Name"
          />
        </div>
        <Spacer y={0.5} />
        <div className="text-center">
          <Button
            id="button"
            onClick={submit}
            active={buttonActive}
            shadow
            type="secondary"
          >
            Let's go
          </Button>
        </div>
      </div>
    </div>
  );
}
