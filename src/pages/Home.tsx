import './Home.css'
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";
import {BarChart, LineChart} from "@mui/x-charts";

const distributionDataset = [
    {
        target: 60,
        actual: 50,
        label: "Protein"
    },
    {
        target: 20,
        actual: 25,
        label: "Carbs"
    },
    {
        target: 20,
        actual: 25,
        label: "Fat"
    }
]

function valueFormatter(value: number | null) {
    return value ? new Intl.NumberFormat("de-DE").format(value) : "N/A";
}

function Home() {
    return (
        <>
            <div className="home-card-container">
                <HomeCard title="Total Daily Calories" value={2000}/>
                <HomeCard title="Calories Today" value={200} path="/diary"/>
                <HomeCard title="Remaining" value={1800}/>
            </div>
            <div className="home-macro-chart my-4">
                <Card className="w-full">
                    <CardHeader className="text-left text-xl">
                        <CardTitle>Your macro distribution</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl text-right font-light">
                        <BarChart
                            dataset={distributionDataset}
                            xAxis={[{dataKey: "label"}]}
                            series={[
                                {color: "#A6D07D", dataKey: 'target', label: 'Target', valueFormatter},
                                {color: "#a1f14d", dataKey: 'actual', label: 'Actual', valueFormatter}
                            ]}
                        />
                    </CardContent>
                </Card>
            </div>
            <div className="home-seven-day-recap-chart my-4">
                <Card className="w-full">
                    <CardHeader className="text-left text-xl">
                        <CardTitle>Your 7-day recap</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl text-right font-light">
                        <LineChart
                            xAxis={[{data: [1, 2, 3, 4, 5, 6, 7]}]}
                            series={[
                                {
                                    data: [1800, 2200, 2000, 1950, 1770, 2020, 2156],
                                    valueFormatter: (value) => (valueFormatter(value)),
                                    color: "#a1f14d"
                                }
                            ]}
                        />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

interface HomeCardProps {
    title: string;
    value: number;
    path?: string;
}

function HomeCard(props: HomeCardProps) {
    return (
        <Card className="w-full sm:flex-1 sm:basis-64 sm:max-w-xs m-4">
            <CardHeader className="text-left text-xl">
                <CardTitle>{props.title}</CardTitle>
                {props.path && (
                    <CardAction>
                        <Link to={props.path}><i className="bi bi-plus-lg"></i></Link>
                    </CardAction>
                )}
            </CardHeader>
            <CardContent className="text-2xl text-right font-light">
                <div>{new Intl.NumberFormat("de-DE").format(props.value)} kcal</div>
            </CardContent>
        </Card>
    )
}

export default Home;