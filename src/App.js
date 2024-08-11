import './App.css';
import Header from './Header';
import Home from './Home';
import { Box} from "@chakra-ui/react";
import Projects from './Projects';
import Footer from './Footer';


function App() {
  return (
    <Box
    //width={{ base: "90%", md: "80%", lg: "70%", xl: "60%" }}
    margin="0 auto"
    marginTop="24px"
    >
      <Header/>
      <Home/>
      <Projects/>
      <Footer/>
    </Box>
  );
}

export default App;
