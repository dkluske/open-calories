import './Settings.css'
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {Input} from "@/components/ui/Input.tsx";

class SettingsEntry {
    title: string;
    type: string;
    value?: string;

    constructor(title: string, type: string, value?: string) {
        this.title = title;
        this.type = type;
        this.value = value;
    }
}

function Settings() {
    const onSave = () => {
        console.log("Save")
        // TODO: implement logic when db connection is established
    }

    const settingsEntries: SettingsEntry[] = [
        // TODO: use real default values from db
        new SettingsEntry("Username", "text", "John Doe"),
        new SettingsEntry("Daily Calories Goal", "number", "2000")
    ]

    return (
        <div className="settings-wrapper">
            <Card className="m-4 text-left text-2xl">
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardAction>
                        <Button onClick={onSave}>
                            <i className="bi bi-save"></i><span>Save</span>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    {settingsEntries.map((entry, index) => (
                        <Input
                            key={index}
                            placeholder={entry.title}
                            type={entry.type}
                            defaultValue={entry.value}
                            className="m-2"
                        />
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

export default Settings;