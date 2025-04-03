import Link from 'next/link';
import './styles.scss'
import logo from '/public/design/logo.png'
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { darkBlue } from '@/styles/colors';

const Header = () => {
  return(
    <header className='header_wrapper'>
      <div className='header_wrapper__logo_container'>
        <Image
          className='header_wrapper__logo_container__icon'
          loading='lazy'
          src={logo}
          width={120}
          height={60}
          alt='Jazzi logo'
        />
      </div>
      <nav className="header_wrapper__navbar">
        <ul className="header_wrapper__navbar__pages">
          <li className="header_wrapper__navbar__pages__page">
            <Link href="/musics" className="header_wrapper__navbar__pages__page__link">
              Musics
            </Link>
          </li>
          <li className="header_wrapper__navbar__pages__page">
            <Link href="/artists" className="header_wrapper__navbar__pages__page__link">
              Artists
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header_wrapper__login_container">
        <AccountCircleIcon
          className='header_wrapper__login_container__icon'
          htmlColor={darkBlue.default}
        />
      </div>
      </header>
  )
}

export default Header