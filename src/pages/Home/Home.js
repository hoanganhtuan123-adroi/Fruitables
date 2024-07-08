import Header from "../../layout/Header/Header";
import Service from "../../component/Service/Service";
import Product from "../../component/Product/Product";
import Organic from "../../component/Organic/Organic";
import Banner from "../../component/Banner/Banner";
import Bestseller from "../../component/Bestseller/Bestseller";
import Commit from "../../component/Commit/Commit";
import Feedback from "../../component/Feedback/Feedback";

function Home() {
    return (
        <>
            <Header />
            <Service />
            <Product />
            <Organic />
            <Banner />
            <Bestseller />
            <Commit />
            <Feedback />
        </>
    );
}

export default Home;
