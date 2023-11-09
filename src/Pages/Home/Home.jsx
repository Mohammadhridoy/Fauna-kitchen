import Banner from "./Banner";
import Offer from "./Offer";
import Reserve from "./Reserve";
import TopSellingFood from "./TopSellingFood";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <TopSellingFood></TopSellingFood>
        <Reserve></Reserve>
        <Offer></Offer>
            
        </div>
    );
};

export default Home;