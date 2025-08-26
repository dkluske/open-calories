import './Home.css'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";

function Home() {
    return (
        <>
            <div className="home-card-container">
                <HomeCard title="Total Daily Calories" value={2000}/>
                <HomeCard title="Calories Today" value={200}/>
                <HomeCard title="Remaining" value={1800}/>
            </div>
            <div className="home-chart-container">

            </div>
        </>
    )
}

interface HomeCardProps {
    title: string;
    value: number;
}

function HomeCard(props: HomeCardProps) {
    return (
        <Card className="w-full max-w-xs m-4">
            <CardHeader className="text-left text-xl">
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl text-right font-light">
                <div>{new Intl.NumberFormat("de-DE").format(props.value)} kcal</div>
            </CardContent>
        </Card>
    )
}

export default Home;