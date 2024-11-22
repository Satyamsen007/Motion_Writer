import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { KeyboardArrowDown } from '@mui/icons-material';

function Header() {
  const [isHovered, setIsHovered] = useState(false); // Hover state for "Services"
  const [navColor, setnavColor] = useState("transparent");
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            navColor === 'transparent' ? 'white' : '#2F2F2F',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: navColor === 'transparent' ? '#4583B4' : 'white',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          navColor === 'transparent' ? 'white' : '#4583B4',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavColor("primary") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div
      className={`z-50 w-full flex gap-14 justify-between items-center fixed right-0 top-0 bg-${navColor} duration-500 opacity-80 box-border`}
    >
      <div className="flex items-center w-[180px] h-[90px] overflow-hidden">
        <img
          src={`${navColor === 'transparent'
            ? './src/assets/images/logo/WITHOUT_BG/MOTION_WRITTER_LOGO 01.png'
            : './src/assets/images/logo/WITHOUT_BG/MOTION_WRITTER_LOGO 02.png'
            }`}
          alt="Motion Writer Logo"
        />
      </div>
      <nav className="flex items-center gap-7">
        <ul
          className={`flex gap-6 font-PrimaryFont text-[1vmax] font-semibold uppercase ${navColor === 'transparent' ? 'text-primary' : 'text-whiteColor'
            }`}
        >
          {[
            'Home',
            'About Us',
            'Services',
            'Portfolio',
            'Clients',
            'Contact Us',
          ].map((item) => (
            <li
              key={item}
              className="relative group hover:text-secondary duration-300 cursor-pointer"
              onMouseEnter={() => item === 'Services' && setIsHovered(true)}
              onMouseLeave={() => item === 'Services' && setIsHovered(false)}
            >
              <Link to="/" className="flex items-center">
                {item}
                {item === 'Services' && (
                  <KeyboardArrowDown
                    sx={{
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                )}
              </Link>
              {item === 'Services' && isHovered && (
                <div className="absolute top-full left-0 bg-white shadow-lg w-[15vmax] rounded-md z-50">
                  <div className="border-2 border-y-primary border-solid p-6">
                    <ul className="normal-case">
                      {[
                        'Digital Marketing',
                        'Creative Designing',
                        'Social',
                        'Web Solutions',
                        'Films',
                        'Photography',
                      ].map((subItem) => (
                        <li
                          key={subItem}
                          className="py-2 text-textColor font-PrimaryFont text-[1.1vmax] hover:text-[1.2vmax] font-medium hover:font-semibold hover:text-secondary duration-[150ms] cursor-pointer"
                        >
                          <Link to="/">{subItem}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch defaultChecked={false} />}
            />
          </FormGroup>
        </div>
      </nav>
    </div>
  );
}

export default Header;
