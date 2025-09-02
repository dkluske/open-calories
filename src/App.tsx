import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@/pages/Home.tsx";
import Diary from "@/pages/Diary.tsx";
import Favourites from "@/pages/Favourites.tsx";
import Settings from "@/pages/Settings.tsx";
import Navbar from "@/components/ui/Navbar.tsx";
import NotFound from "@/pages/NotFound.tsx";
import {ThemeProvider} from "@/lib/ThemeProvider.tsx";
import Stats from "@/pages/Stats.tsx";
import {databaseExists} from "@/lib/Database.ts";

function App() {
    databaseExists();

    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Navbar children={
                    <>
                        <h1>OpenCalories</h1>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/diary" element={<Diary/>}/>
                            <Route path="/favourites" element={<Favourites/>}/>
                            <Route path="/stats" element={<Stats/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </>
                }/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
