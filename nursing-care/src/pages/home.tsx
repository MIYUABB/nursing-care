import React from "react";
import Navbar from "../comoponents/navbar"
import Introduction from "../comoponents/introduction";
import Article from "../comoponents/article";
import Title from "../comoponents/title";


function Home() {
    document.title = 'nursing-care - Ambulante psychiatrische Pflege, Psychiatriespitex, Unterstützung Zuhause'
    return (
        <div>
            <Navbar/>
            <Introduction img="Teide_Moon.jpg" alt="Test"/>
            <Article>
                <Title title="Ambulante Psychiatrische Pflege"/>
            </Article>
        </div>
    );
}

export default Home;