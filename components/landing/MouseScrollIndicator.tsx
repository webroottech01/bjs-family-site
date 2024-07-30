
import { useState, useEffect } from "react";
import styled from "styled-components";
import dynamic from 'next/dynamic'


const Lottie = dynamic(() => import("react-lottie-player"));
import { Styleable } from '@bjsdistribution/components';

function MouseScrollIndicator({className} : Styleable) {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets5.lottiefiles.com/private_files/lf30_PaH1bn.json"
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
      className={className}
      animationData={animationData}
      play
      style={{ height: "54px", width: "54px" }}
    />
  );
}

export default styled(MouseScrollIndicator)``;
