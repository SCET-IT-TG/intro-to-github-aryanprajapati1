import React from "react";

export default function HelloWorld(props) {
  return (
    <div className="text-center">
      <h1>{props.heading}</h1>
    </div>
  );
}
