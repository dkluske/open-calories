export class SettingsEntry {
    title: string;
    type: string;
    value?: string;

    constructor(title: string, type: string, value?: string) {
        this.title = title;
        this.type = type;
        this.value = value;
    }
}