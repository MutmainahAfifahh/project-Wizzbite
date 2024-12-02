import Header from "../ComponentsBeranda/Header";
import Sidebar from "../ComponentsBeranda/Sidebar";
import Cards from "../ComponentsBeranda/Cards";

const Home = () => {
    return (
        <div className="Dasboard-Overview">
            <Header /> 
            <div className="content-container">
                <Sidebar /> 
                <Cards/>
            </div>
        </div>
    );
};
export default Home;