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
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/Navigation-menu.tsx"

class NavEntry {
    title: string;
    path: string;
    iconClassName: string;

    constructor(title: string, path: string, iconClassName: string) {
        this.title = title;
        this.path = path;
        this.iconClassName = iconClassName;
    }
}

function Navbar() {
    const navEntries: NavEntry[] = [
        new NavEntry("Home", "/", "bi bi-house-door"),
        new NavEntry("Diary", "/diary", "bi bi-journal-text"),
        new NavEntry("Settings", "/settings", "bi bi-gear")
    ]

    return (
        <>
            <nav className="navbar-mobile">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navEntries.map((entry, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuTrigger>
                                    <i className={entry.iconClassName}></i>
                                </NavigationMenuTrigger>
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
                </SidebarProvider>
                {navEntries.map((entry, index) => (
                    <Link to={entry.path} className="navbar-desktop-entry" key={index}>{entry.title}</Link>
                ))}
            </nav>
        </>
    )
}

export default Navbar;