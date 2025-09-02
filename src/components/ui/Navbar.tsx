import './Navbar.css'
import {Link} from "react-router-dom";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from "@/components/ui/Sidebar.tsx";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList,} from "@/components/ui/Navigation-menu.tsx"
import {NavEntry} from "@/models/NavEntry.ts";

function Navbar({children}: { children: React.ReactNode }) {
    const navEntries: NavEntry[] = [
        new NavEntry("Home", "/", "bi bi-house-door"),
        new NavEntry("Diary", "/diary", "bi bi-journal-text"),
        new NavEntry("Favourites", "/favourites", "bi bi-heart"),
        new NavEntry("Stats", "/stats", "bi bi-graph-up"),
        new NavEntry("Settings", "/settings", "bi bi-gear")
    ]

    return (
        <>
            <nav
                className="navbar-mobile fixed z-50 w-[0.9] h-16 max-w-lg -translate-x-1/2 rounded-3xl bottom-4 left-1/2 bg-neutral-300 border-neutral-200 dark:bg-zinc-800 dark:border-zinc-600">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navEntries.map((entry, index) => (
                            <NavigationMenuItem key={index} className="px-2">
                                <Link to={entry.path} className="block p-2"><i
                                    className={`${entry.iconClassName} text-2xl`}/></Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <nav className="navbar-desktop">
                <SidebarProvider>
                    <Sidebar>
                        <SidebarHeader><h1>OpenCalories</h1></SidebarHeader>
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupLabel>Pages</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {navEntries.map((entry, index) => (
                                            <SidebarMenuItem key={index}>
                                                <SidebarMenuButton asChild>
                                                    <Link to={entry.path}><i
                                                        className={entry.iconClassName}></i><span>{entry.title}</span></Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <main className="w-full">
                        {children}
                    </main>
                </SidebarProvider>
            </nav>
        </>
    )
}

export default Navbar;