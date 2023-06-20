import React from 'react';
import Header from '../../components/header/header';
import Trailer from '../../components/trailer/trailer';
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/banner';


function Home() {

    return (
        <>
         <Header />
         <Banner />
        <div id='paralaxe'>
         <Trailer />
         <Cards />
        </div>
         <Footer />
        </>
    )
}

export default Home;