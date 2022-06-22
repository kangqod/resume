import Sidebar from '@/components/Sidebar'
import Home from '@/components/Home'
import { ThemeProvider } from '@/context/theme'
import ScrollTop from '@/components/ScrollTop'

function App() {
  return (
    <ThemeProvider>
      <Sidebar>
        <Home />
        <ScrollTop />
      </Sidebar>
    </ThemeProvider>
  )
}

export default App
