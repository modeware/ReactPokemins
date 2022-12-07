import { Box, ChakraProvider, Container, Grid } from '@chakra-ui/react'
import PokePage from './components/PokePage/pokePage'

function App() {
  return (
    <ChakraProvider>
      <Grid m={20} centerContent>
        <PokePage/>
      </Grid>
     </ChakraProvider>
  );
}

export default App;
