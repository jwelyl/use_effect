import { useEffect } from "react";

const Hello = () => {
  useEffect(() => console.log("I'm here!"), []);

  return <h1>Hello</h1>;
};

export default Hello;
