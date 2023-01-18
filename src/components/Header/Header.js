import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: blue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  h1 {
    height: 64px;
    pointer-events: none;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Project Management Board</h1>
    </HeaderWrapper>
  );
}

export default Header;
