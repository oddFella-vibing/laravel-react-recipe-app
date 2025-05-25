import Mybutt from "@/components/Mybutt";
import Mainlayout from "@/layouts/mainlayout";
import { router } from "@inertiajs/react";

import React from "react";

const Home = () => {
    function handleClick() {
        router.get("/menu");
    }
    return (
        <>
            <div className="bg-blur rounded-3xl px-6 py-6  shadow-xl m-5 h-9/10 flex flex-row">
                <img
                    src="https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg"
                    alt="placeholder"
                    width={500}
                    height={500}
                />
                <div className="flex flex-col p-5 text-white gap-10">
                    <div>
<h3>This is where you can learn how to eat proper food</h3>
                    <p>
                        Thousands of recipes .just choose one and start cooking
                        for yourself. stuff your face. hate yourelf a lil more
                        after. youll be fine. When the world ends we all die together.
                    </p>
                    </div>
                    
                    <Mybutt title="Browse" handleClick={handleClick} />
                </div>
            </div>
        </>
    );
};
//Home.layout=(page: any)=><Mainlayout children={page}/>

export default Home;
