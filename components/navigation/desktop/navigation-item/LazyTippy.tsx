import styled from "styled-components";
import { forwardRef, useState } from "react";

import "tippy.js/dist/tippy.css";
import Tippy, { TippyProps } from "@tippyjs/react";

// Export own set of props (even if they are the same for now) to enable clients to be more future-proof
export type LazyTippyProps = TippyProps & {
  color: string;
};

const LazyTippy = forwardRef((props: LazyTippyProps, ref: any) => {
  const [mounted, setMounted] = useState(false);

  const lazyPlugin = {
    fn: () => ({
      onMount: () => {
        setMounted(true);
      },
      onHidden: () => setMounted(false),
    }),
  };

  const computedProps = { ...props, ref };

  computedProps.plugins = [lazyPlugin, ...(props.plugins || [])];

  if (props.render) {
    const render = props.render; // let TypeScript safely derive that render is not undefined
    computedProps.render = (...args) => (mounted ? render(...args) : "");
  } else {
    computedProps.content = mounted ? props.content : "";
  }

  return <StyledTippy {...computedProps} />;
});

const StyledTippy = styled(Tippy)<{
  color: string;
}>`
  max-width: 100% !important;
  background-color: transparent;

  .tippy-content {
    padding: 0px;
  }

  .tippy-arrow {
    color: ${(props) => props.color};
    z-index: 1;
    ::before {
      top: -20px !important;
      border-width: 0 20px 23px !important;
    }
  }
`;

export default LazyTippy;
