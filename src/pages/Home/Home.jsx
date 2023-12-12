import '../../component/navbar/navbar.jsx';
import NavbarDefault from '../../component/navbar/navbar.jsx';
import Footer from '../../component/footer/footer.jsx';
import HomeContent from '../../component/content/homecontent/homeContent.jsx';
import AboutusContent from '../../component/content/aboutuscontent/aboutusContent.jsx';

function HomePage() {
    return (
        <div>
            <NavbarDefault/>
            <HomeContent/>
            <AboutusContent/>
            <Footer/>
        </div>
    );
}

export default HomePage;