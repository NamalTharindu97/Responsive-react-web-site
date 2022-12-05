import styled from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </Container>
  );
};

export default App;
