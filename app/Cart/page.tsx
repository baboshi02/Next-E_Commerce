"use client";
import React from "react";

const page = () => {
  const keys = Object.keys(localStorage);
  return (
    <div>
      {keys.map((key: any) => (
        <h1>
          Key: {key},value: {localStorage[key]}
        </h1>
      ))}
    </div>
  );
};

export default page;
