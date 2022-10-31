import { Container } from "@mui/system";
import { BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";
import RoutesComponent from "./Routes/Routes";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth='xl'>
        {/* <Category /> */}
        <RoutesComponent/>
      </Container>

    </BrowserRouter>
  );
}

export default App;
