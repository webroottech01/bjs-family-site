import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Styleable, WithChildren, colours } from "@bjsdistribution/components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import TikTokIcon from "public/SVGs/TikTokIcon";

type SocialMedia =
  | "instagram"
  | "linkedin"
  | "trustpilot"
  | "facebook"
  | "tiktok"
  | "instagram-construct-it"
  | "linkedin-construct-it";

const getUrl = (input: SocialMedia): string | undefined => {
  switch (input) {
    case "instagram":
      return process.env[`NEXT_PUBLIC_INSTAGRAM_URL`];
    case "linkedin":
      return process.env[`NEXT_PUBLIC_LINKEDIN_URL`];
    case "trustpilot":
      return process.env[`NEXT_PUBLIC_TRUSTPILOT_URL`];
    case "facebook":
      return process.env[`NEXT_PUBLIC_FACEBOOK_URL`];
    case "tiktok":
      return process.env[`NEXT_PUBLIC_TIKTOK_URL`];
    case "instagram-construct-it":
      return process.env[`NEXT_PUBLIC_CONTRUCTIT_INSTAGRAM_URL`];
    case "linkedin-construct-it":
      return process.env[`NEXT_PUBLIC_CONTRUCTIT_LINKEDIN_URL`];
  }
};

function SocialIcons(props: Styleable) {

const AdditionalIcons = () => {
  return (
    <Container className={props.className}>
      <TrustpilotIcon />
      <Icon icon={faFacebook} link={getUrl("facebook")} />
      <Icon icon={faInstagram} link={getUrl("instagram-construct-it")} />
      <Icon icon={faLinkedinIn} link={getUrl("linkedin-construct-it")} />
      <AbstractIcon link={getUrl("tiktok")}>
        <TikTokIcon width="32.64" height="31.043" color="white" />
      </AbstractIcon>
    </Container>
  );
};

const router = useRouter();
const path = router.asPath;
if (path === "/services/construct-it") {
  return <AdditionalIcons />;
}
  return (
    <Container className={props.className}>
      <TrustpilotIcon />
      <Icon icon={faInstagram} link={getUrl("instagram")} />
      <Icon icon={faLinkedinIn} link={getUrl("linkedin")} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 3;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

type IconProps = {
  icon: IconProp;
} & AbstractIconProps;

type AbstractIconProps = {
  link?: string;
};

function Icon({ link, icon }: IconProps) {
  return (
    <AbstractIcon link={link}>
      <IconElement icon={icon} />
    </AbstractIcon>
  );
}

function TrustpilotIcon() {
  return (
    <AbstractIcon link={getUrl("trustpilot")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32.64"
        height="31.043"
        viewBox="0 0 32.64 31.043"
      >
        <path
          d="M32.64,11.859l-12.468,0L16.32,0,12.469,11.856,0,11.854l10.088,7.331L6.235,31.043l10.086-7.328L26.4,31.043,22.553,19.187,32.64,11.859Z"
          className={"one"}
        />
        <path
          d="M142.777,162.184,141.9,159.5l-6.232,4.528Z"
          transform="translate(-119.351 -140.309)"
          className={"two"}
        />
      </svg>
    </AbstractIcon>
  );
}

function AbstractIcon({
  link,
  children,
  className,
}: AbstractIconProps & Styleable & WithChildren) {
  /*
        {!('src' in icon) && <IconElement icon={icon} />}*/

  return (
    <a href={link} target="_blank">
      <IconContainer className={className}>{children}</IconContainer>
    </a>
  );
}


const IconElement = styled(FontAwesomeIcon)`
  font-size: 26px !important;
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background:${colours.black};
  border-radius: 50%;
  cursor: pointer;

  svg {
    .one {
      fill: #fff;
    }
    .two {
      fill: #ccc;
    }

    :hover {
      .one,
      .two {
        fill: ${colours.yellow} !important;
      }
    }
  }

  :hover {
    ${IconElement}, svg {
      color: ${colours.yellow};
    }
  }
`;

export { IconContainer as Icon };
export default styled(SocialIcons)``;
