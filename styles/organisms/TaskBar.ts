import styled from "styled-components";

const TaskBarContainner = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 35px;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  z-index: auto;
  background-color: var(--bg-two);
  overflow: hidden;

  * {
    padding: 0;
    margin: 0;
  }
`;

export { TaskBarContainner };
