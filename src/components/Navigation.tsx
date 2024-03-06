import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useShopCart } from '../context/Catalog-context';
import { ShopCart } from './ShopCart';
import { motion } from 'framer-motion';

export function Navigation() {
    const location = useLocation();
    const coloredRoutes = ['/catalog', '/contact', '/about', '/cart', '/checkout'];
    const isColoredRoute = coloredRoutes.includes(location.pathname);
    const [isSticky, setSticky] = useState(false);
    const { openCart, closeCart, isOpen, cartQuantity } = useShopCart()
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const headerStyle = {
        backgroundColor: isSticky || isColoredRoute ? 'rgb(16 33 20)' : 'transparent',
        borderRadius: isSticky || isColoredRoute ? '20px' : '0',

    };
    
    return (
        <nav 
            className='h-[80px] flex justify-center items-center px-3 text-black header'
        >
            <div 
                className='container flex justify-between items-center px-5 sm:px-10 py-6 mt-1'
                style={headerStyle}
            >
                <Link to="/" className='flex flex-row items-center'>
                    <span className='font-exo text-lead tracking-[1.2px] text-xl font-medium ms-1'>CardSell</span>
                </Link>

                <ul className='sm:flex hidden'>
                    <Link to="/" className='mx-2 text-lead'>Главная</Link>
                    <Link to="/catalog" className='mx-2 text-lead'>Создать карту</Link>
                    <Link to="/about" className='mx-2 text-lead'>О нас</Link>
                    <Link to="/contact" className='mx-2 text-lead'>Контакты</Link>
                </ul>

                <div className='flex flex-row fustify-end'>

                    <div className='hidden sm:flex flex-row items-center sm:mx-12 mx-3'>
                        <img src="./assets/svg/telegram.svg" width={25} />
                        <p className='text-base font-exo font-normal text-lead tracking-[0.8px] ms-1'>Telegram</p>
                    </div>

                    <div className='hidden sm:flex flex-row'>
                        <img src="./assets/svg/tel.svg" width={22}/>
                        <div className='flex flex-col items-end ms-2'>
                            <p className='text-base font-exo font-normal text-lead tracking-[0.8px]'>+7 (903) 777-19-98</p>
                            <p className='text-xs font-exo font-extralight text-lead tracking-[0.4px]'>Позвонить по телефону</p>
                        </div>
                    </div>

                    <div className='relative flex'>
                        <img 
                            src='./assets/svg/shop-cart.svg' 
                            width={30} 
                            className='sm:ms-12 ms-3 cursor-pointer'
                            onClick={() => openCart()}
                        />
                        <div className='absolute bg-white rounded-[50%] w-[20px] h-[20px] flex items-center justify-center right-[-20px]'>
                            {cartQuantity}
                        </div>
                    </div>

                    <button
                      className="text-white focus:outline-none ms-10 flex sm:hidden items-center justify-center"
                      onClick={toggleMenu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 22"
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        {isOpen ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                          />
                        )}
                      </svg>
                    </button>
                    {isMenuOpen && (
                        <div 
                            className="fixed bg-bordo/50 top-0 right-0 left-0 bottom-0"
                            onClick={toggleMenu}
                        >
                            <motion.div 
                                className="absolute ml-2 bg-bordo shadow-md w-2/3 h-[100vh] right-0 top-0 p-8"
                                transition={{ duration: 0.5 }}
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                                exit={{ x: -100 }}
                            >
                              <span className='absolute text-white top-3 z-10 right-5'>
                                  <div className="w-6 h-6 relative">
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-white rotate-45"></div>
                                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-4 bg-white rotate-45"></div>
                                  </div>
                              </span>
                              <ul className='flex flex-col'>
                                  <span className='text-lg tracking-[0.6px] text-white font-medium my-3'>МЕНЮ</span>
                                  <Link to="/" className='text-lg tracking-[0.6px] text-lead font-light my-3 transition-transform transform hover:translate-x2'>Главная</Link>
                                  <Link to="/catalog" className='text-lg tracking-[0.6px] text-lead font-light my-3'>Каталог карт</Link>
                                  <Link to="/oferta" className='text-lg tracking-[0.6px] text-lead font-light my-3'>Оферта</Link>
                                  <Link to="/contact" className='text-lg tracking-[0.6px] text-lead font-light my-3'>Контакты</Link>
                              </ul>
                              <div className='flex flex-row items-center my-6'>
                                  <img src="./assets/svg/telegram.svg" width={22} />
                                  <p className='text-base font-exo font-normal text-lead tracking-[0.8px] ms-2'>Telegram</p>
                              </div>

                              <div className='flex flex-row my-6'>
                                  <img src="./assets/svg/tel.svg" width={22}/>
                                  <div className='flex flex-col items-end ms-2'>
                                      <p className='text-base font-exo font-normal text-lead tracking-[0.8px]'>+7 (903) 777-19-98</p>
                                      <p className='text-xs font-exo font-extralight text-lead tracking-[0.4px]'>Позвонить по телефону</p>
                                  </div>
                              </div>
                            </motion.div>
                        </div>
                    )}

                    {isOpen && 
                        <ShopCart onClose={() => closeCart()}/>
                    }

                </div>
            </div>
        </nav>
    )
}