import Header from './Components/Layout/Header/Header';
import Explore from './Components/Sections/Explore/Explore';
import Clients from './Components/Sections/Clients/Clients';
import Text from './Components/Sections/Text/Text';
import Blogs from './Components/Sections/Blogs/Blogs';
import Priorities from './Components/Sections/Priorities/Priorities';
import Subscribe from './Components/Sections/subscribe/Subscribe';
import Footer from './Components/Layout/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Text />
            <Explore />
            <Clients />
            <Blogs />
            <Subscribe />
            <Priorities />
            <Footer />
        </>
    );
}

export default App;
