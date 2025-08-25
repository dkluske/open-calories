import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Diary from "@/pages/Diary.tsx";
import Settings from "@/pages/Settings.tsx";
import Navbar from "@/components/ui/Navbar.tsx";
import NotFound from "@/pages/NotFound.tsx";
import {ThemeProvider} from "@/lib/ThemeProvider.tsx";

function App() {
  return (
      <BrowserRouter>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <h1>OpenCalories</h1>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/diary" element={<Diary/>}/>
                  <Route path="/settings" element={<Settings/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </ThemeProvider>
      </BrowserRouter>
  )
}

export default App
