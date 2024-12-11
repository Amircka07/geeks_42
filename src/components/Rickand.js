import React from "react";

export const Rickand = ({ info }) => {
  return (
    <div className="rick-user">
      <img className="IMAGE" src={info.image} alt="rick" />
      <p>{info.name}</p>
      <p>{info.status}</p>
      <p>{info.species}</p>
    </div>
  );
};
