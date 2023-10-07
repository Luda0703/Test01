import './styles.css';
import image from '../../image/avto.png';

function Home() {
  return (
    <div className="home_page">
      <img style={{ maxWidth: '150px', borderRadius: '80px' }} src={image} alt='logo'/>
    </div>
  );
}

export default Home;
