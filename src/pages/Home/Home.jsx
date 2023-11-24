import './Home.css'
import '../../component/navbar/navbar.jsx';
import NavbarDefault from '../../component/navbar/navbar.jsx';
import Footer from '../../component/footer/footer.jsx';
import HomeContent from '../../component/content/homecontent/homeContent.jsx';

function HomePage() {
    return (
        <div>
            <NavbarDefault/>
            <HomeContent/>
            <Footer/>
        </div>
    );
}

export default HomePage;