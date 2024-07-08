import "./Header.css";
import Hero from "../../component/Hero/Hero";

function Header() {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <Hero />
                </div>
            </header>
        </>
    );
}
export default Header;
