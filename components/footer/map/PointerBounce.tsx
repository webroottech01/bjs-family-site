import { useState, useEffect } from "react";
import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"));

function PointerBounce(props: Styleable) {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets1.lottiefiles.com/private_files/lf30_odksdxsq.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);


  return (
    <Lottie
      loop
      className={props.className}
      animationData={animationData}
      play
      style={{ height: 60, position: "absolute" }}
    />
  );
}

export default styled(PointerBounce)``;
