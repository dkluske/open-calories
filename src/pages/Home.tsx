import './Home.css'
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";

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
                        <div>Chart Here</div>
                    </CardContent>
                </Card>
            </div>
            <div className="home-seven-day-recap-chart my-4">
                <Card className="w-full">
                    <CardHeader className="text-left text-xl">
                        <CardTitle>Your 7-day recap</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl text-right font-light">
                        <div>Chart Here</div>
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