import { useEffect } from "react";

const Hello = () => {
  function byeFn() {
    console.log("destroyed :(");
  }

  function hiFn() {
    console.log("created :)");
    return byeFn;
  }

  useEffect(hiFn, []);

  return <h1>Hello</h1>;
};

export default Hello;
