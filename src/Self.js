import React from "react";

export default function Self(props){
  console.log(props);
  return(
    <div>
      {props.name}
    </div>
  );
}