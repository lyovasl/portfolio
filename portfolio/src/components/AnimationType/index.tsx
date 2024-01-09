import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={["Coder", 1500, "Web developer", 1500, "Programmer", 1500]}
      speed={50}
      style={{ color: "yellow", fontWeight: "bold", fontSize: "38px" }}
      repeat={Infinity}
    />
  );
};

export default TextEffect;
