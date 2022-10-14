import { Container } from "@mui/system";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Category />
      </Container>
    </>
  );
}

export default App;
