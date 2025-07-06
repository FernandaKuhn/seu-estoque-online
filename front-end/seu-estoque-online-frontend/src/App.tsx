import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { GlobalStyles } from './GlobalStyles';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <GlobalStyles />
      <Box
        id="app-wrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
          <Home />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
