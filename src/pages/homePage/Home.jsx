// import { Banner } from "../../widgets"
// import { NewArrivals } from "../../widgets/homePage/newArrivals/NewArrivals";
import { Banner, DressStyle, NewArrivals, TopSelling } from "../../widgets"


export const Home = () => {
    return (
        <div>
            <Banner />
            <NewArrivals />
            <TopSelling />
            <DressStyle />
        </div>
    );
}

