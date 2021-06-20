import React, { createContext, useState, useEffect } from "react";
const context = createContext(null);

const RavenProvider = ({ children }) => {
  const [raven, setRaven] = useState({});

  useEffect(() => {
    fetch("/raven/user")
      .then(res => res.json())
      .then(res => {setRaven(res); console.log("Inside Raven Provider"); console.log(res);})
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <context.Provider value={raven}>
      {children}
    </context.Provider>
  );
};

RavenProvider.context = context;

export default RavenProvider;