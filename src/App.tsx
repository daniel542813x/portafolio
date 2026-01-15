import './App.css'
import { Box, Stack } from '@mui/material'
import Header from './components/Header'
import RoutesPage from './Routes'
import BackToTop from './components/common/BackToTop'

function App() {
  return (
    <Box>
      <Stack marginBottom={0}>
        <Header/>
      </Stack>
        <RoutesPage/>
        <BackToTop/>
    </Box>
  )
}

export default App
