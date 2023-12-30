import './App.css'
import { Box, Stack } from '@mui/material'
import Header from './components/Header'
import RoutesPage from './Routes'
function App() {
  return (
    <Box>
      <Stack marginBottom={0}>
        <Header/>
      </Stack>
        <RoutesPage/>
    </Box>
  )
}

export default App
