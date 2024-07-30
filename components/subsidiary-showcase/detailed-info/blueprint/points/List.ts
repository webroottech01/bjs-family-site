import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-position: inside;
  
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0 !important;
`;

const ListItem = styled.li`
  ::after {
    border-radius: 50%;
    height: 6px;
    width: 6px;
    top: 0.8em;
    transform: translateY(-50%);
    background: #feba30;
    content: "";
    position: absolute;
    left: 0px;
  }
  ::before {
    margin-right: 12px;
    content: "";
  }
  position: relative;
  list-style: none;
`;

export { ListItem };
export default List;