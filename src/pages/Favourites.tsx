import './Favourites.css'
import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/Button.tsx";
import {useEffect, useState} from "react";
import {Favourite} from "@/models/Favourite.ts";

function Favourites() {
    const onAdd = () => {

    };
    const onDelete = () => {

    };
    const [favourites, setFavourites] = useState([] as Favourite[]);
    useEffect(() => {
        setFavourites([]);
    }, []);

    return (
        <div className="favourites-wrapper">
            <Card className="m-4 text-left text-2xl">
                <CardHeader>
                    <CardTitle>Favourites</CardTitle>
                    <CardDescription>Here you can manage your favourite meals to quickly add them to your
                        diary.</CardDescription>
                    <CardAction>
                        <Button onClick={onAdd}>
                            <i className="bi bi-plus-lg"></i>
                        </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    {
                        favourites.length === 0 ? (
                            <>
                                <div className="text-center text-sm">No data found</div>
                            </>
                        ) : (
                            <>
                                {favourites.map((fav, index) => (
                                    <>
                                        <div key={index} className="w-full flex my-4">
                                            <div className="text-md mr-auto text-neutral-400">{fav.name}</div>
                                            <Button onClick={onDelete}>
                                                <i className="bi bi-trash"></i>
                                            </Button>
                                        </div>
                                        {index < favourites.length - 1 ? (
                                            <hr/>
                                        ) : (<></>)}
                                    </>
                                ))}
                            </>
                        )
                    }
                </CardContent>
            </Card>
        </div>
    )
}

export default Favourites;