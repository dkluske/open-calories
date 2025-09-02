export class NavEntry {
    title: string;
    path: string;
    iconClassName: string;

    constructor(title: string, path: string, iconClassName: string) {
        this.title = title;
        this.path = path;
        this.iconClassName = iconClassName;
    }
}