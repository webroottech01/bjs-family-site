import styled, { css } from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { motion } from "framer-motion";
import { useHoveredState } from "./services-dropdown-store";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { useNavigateTo } from "components/services/useServicesState";
import getConfig from "subsidiary-config";
import { hideAll } from "tippy.js";
import { useIsDesktop } from "components/util/useIsTabletOrSmaller";

type Props = {
  subsidiary: Subsidiary;
  name: string;
  description: string;
  image: string;
} & Styleable;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  > :not(:last-child) {
    margin-bottom: 18px;
  }
  color: ${colours.black};
`;

const TitleContainer = styled.div`
  position: relative;
  width: fit-content;
`;

const Title = styled(motion.span) <{ isHovered: boolean }>`
  font-family: "Eveleth";
  color: ${(props) => (props.isHovered ? colours.black : "#57534E")};
`;

const TitleUnderline = styled(motion.div) <{ subsidiary: Subsidiary }>`
  position: absolute;
  bottom: -6px;
  height: 2px;
  border-radius: 66px;
  background: ${(props) => getUnderlineColour(props.subsidiary)};
  @media (hover: none) and (pointer: fine) {
    background: ${(props) => getUnderlineColour(props.subsidiary)};
  }
`;

const getUnderlineColour = (subsidiary: Subsidiary): string => {
  if (subsidiary === "home delivery" || subsidiary === "haulage") {
    return colours.yellow;
  }
  return getConfig(subsidiary).primaryColour;
};

const Description = styled.div`
  white-space: pre-line;
`;

const LogoImage = styled.img``;

const Container = styled(motion.div) <{ subsidiary: Subsidiary }>`
  display: flex;
  align-items: center;
  position: relative;

  > :not(:last-child) {
    margin-right: 60px;
  }

  cursor: pointer;

  img {
    image-rendering: -moz-crisp-edges; /* Firefox */
    image-rendering: -o-crisp-edges; /* Opera */
    image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
    -ms-interpolation-mode: nearest-neighbor;
  }

  ${(props) => props.subsidiary === "constructit" && ConstructITStyling};
`;

const ConstructITStyling = css`
  ${LogoImage} {
    position: absolute;
    left: -12px;
  }
  ${Body} {
    position: relative;
    margin-left: 130px;
  }
`;

function SubsidiaryEntry({
  className,
  image,
  description,
  name,
  subsidiary,
}: Props) {
  const [hover, setHover] = useHoveredState();
  const navigateTo = useNavigateTo();
  const isDesktop = useIsDesktop();

  const setHovered = () => setHover(subsidiary);
  const isHovered = hover === subsidiary;

  const [height, width] = getLogoDimensions(subsidiary);

  const click = () => {
    navigateTo(subsidiary);
    hideAll({ duration: 100 });
  };

  return (
    <Container
      className={className}
      onHoverStart={setHovered}
      onClick={click}
      subsidiary={subsidiary}
    >
      <LogoImage src={image} height={height} width={width} />
      <Body>
        <TitleContainer>
          <Title isHovered={isHovered}>{name}</Title>
          {isHovered && (
            <TitleUnderline
              subsidiary={subsidiary}
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
            />
          )}
        </TitleContainer>
        <Description>{description}</Description>
      </Body>
    </Container>
  );
}

const getLogoDimensions = (input: Subsidiary): [number, number] => {
  switch (input) {
    case "home delivery":
      return [48, 69];
    case "extra":
      return [54, 69];
    case "haulage":
      return [43, 72];
    case "constructit":
      return [23, 113];
  }
};

export default styled(SubsidiaryEntry)``;
