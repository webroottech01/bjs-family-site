import styled from "styled-components";
import { up } from "styled-breakpoints";

const InputValidationMessage = (props: any) => {
    const { children, maxWidth = 240 } = props;
    return (
        <ErrorMessageContainer>
            <span>*</span>
            <ErrorMessage maxWidth={maxWidth}>{children}</ErrorMessage>
        </ErrorMessageContainer>
    )
}

const ErrorMessageContainer = styled.div`
  font-size: 12px;
  color: #C43232;
  margin: 0;
  display: flex;
`;

const ErrorMessage = styled.p <{ maxWidth: number }> `
  padding-left: 5px;
  margin: 0;
  ${up("lg")}{
    max-width: ${(props) => (props.maxWidth)}px;
  }    
`;

export default InputValidationMessage;

