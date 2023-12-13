
import Banner from "./Banner";
import Offer from "./Offer";
import Reserve from "./Reserve";
import TopSellingFood from "./TopSellingFood";
import AnimatedCursor from "react-animated-cursor"


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <TopSellingFood></TopSellingFood>
        <Reserve></Reserve>
        <Offer></Offer>
        <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color='193, 11, 111'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link'
            ]}
        
        />
            
        </div>
    );
};

export default Home;