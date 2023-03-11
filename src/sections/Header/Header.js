import './Header.css';
import phone from './../../assets/images/Phone.png';
import track from './../../assets/images/Track.png';

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container" style={{padding: '0'}}>
        <a href="#" className="logo">Dealerz.</a>
        <ul className="main-nav">
          <li><img src={phone} /><a href="#">Call Center</a></li>
          <li><img src={track} alt="Track" /><a href="#">Shipping & Returns</a></li>
        </ul>
      </div>
    </div>
   
  )
}

export default Header