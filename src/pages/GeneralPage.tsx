import React, { useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { Accordion, AccordionItem } from '../components/Accordeon'
import { animateInView, inLeftMoving, inDownMoving, miniInDownMoving, pulseAnimation } from '../animations'
import { Link, useNavigate } from 'react-router-dom'



export function GeneralPage() {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

    const { scrollYProgress } = useViewportScroll();
    const x = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

    const accordionItems: AccordionItem[] = [
      { title: 'Как оплачивать покупки вашей картой?', content: 'Как любой обычной картой, просто вводите в нужные поля данные купленной вами карты и оплачиваете. Если на сайте нужно подтверждение по коду – код придет вам в Telegram' },
      { title: 'Куда придет код покупки? Или изменения баланса?', content: 'Все коды приходят вам в бот Telegram, никаких номеров, емейлов мы от вас не получаем' },
      { title: 'Можно ли пополнить карту/снять наличные?', content: 'Нет. Все карты уже идут с определенным балансом, пополнить карту или снять наличные нельзя' },
      { title: 'Сколько карт я могу купить?', content: 'Сколько угодно, если карты есть в наличии – вы можете их купить' },
    ]

    const circleStyle = {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgb(175 79 231)',
    };
    
    const cardStyle = {
        maxWidth: '348px',
        right: '6rem',
        transform: 'translate3d(-46px, 0px, 0px)'
    }

    const navigate = useNavigate();

    const handleLocShop = () => {
      navigate('/catalog');
    };
    const isMobile = window.innerWidth <= 768;
    const imageUrl = isMobile ? './assets/img/saas-3/hero/gen-mob.jpg' : './assets/img/saas-3/hero/gen.jpg';
    
    return (
        <>
        <motion.div 
            className='section h-[600px] sm:h-[700px] px-3 flex justify-center py-3'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={animateInView}
            transition={{ duration: 0.8 }}
        >
            <div 
                className='container flex flex-col rounded-[20px] p-5 sm:p-10 py-20 sm:py-0 sm:flex-row items-start sm:items-center relative bg-left-top bg-cover'
                style={{ backgroundImage: `url(${imageUrl})` }}            
            >
                <div className='w-[100%] sm:w-[40%]'>
                    <motion.h1
                        className='sm:w-[100%] w-[80%] mt-4 font-exo text-3xl sm:text-5/5xl leading-[2.4rem] sm:leading-[3.4rem] text-white'
                        variants={miniInDownMoving}
                        transition={{ duration: 0.5 }}
                    >
                        Цифровые карты с конвертацией в криптовалюту
                    </motion.h1>
                    <motion.p 
                        className='w-[86%] sm:w-[80%] text-lead tracking-[1px] font-exo text-xl sm:text-lg font-extralight leading-normal mt-4 mb-11'
                        variants={miniInDownMoving} 
                        transition={{ duration: 0.7 }}
                    >
                        Номинальные карты с моментальной конвертацией по актуальному курсу.
                    </motion.p>
                    <motion.div 
                        className='flex flex-row justify-between w-[85%]'
                        variants={miniInDownMoving} 
                        transition={{ duration: 0.9 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='rounded-[8px] py-3 px-6 border-[0.5px] border-btnsec flex flex-row items-center bg-white text-lead-dark font-exo tracking-[0.5] text-lg'
                            onClick={() => handleLocShop()}
                        >
                            Выпустить карту <img src="./assets/svg/small_arrow.svg" className='ms-3'></img>
                        </motion.button>
                    </motion.div>
                </div>
                <div className='w-[100%] sm:w-[60%] sm:pt-0 pt-3'>
                    
                </div>
            </div>
        </motion.div>

        {/* Секция 2 */}
        <div 
            className='section px-3 flex justify-center bg-center bg-cover py-14'
        >
            <div 
                className='container flex flex-col items-center px-3 sm:px-0'
            >
                <h2 className='font-exo text-black font-semibold text-3xl sm:text-4/5xl'>Как работает цифровая карта</h2>
                <p className='text-black-600 tracking-[1px] sm:w-[90%] sm:text-center font-exo text-lg font-extralight leading-normal mt-6 mb-11'>Наша подарочная карта отличается от традиционных тем что для нее не нужно открывать никаких счетов, вы покупаете определенный номинал в рублях, который затем можете конвертировать в одну из трех криптовалют, которые отправятся на Ваш личный криптовалютный кошелек</p>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                    className='w-[100%] sm:w-auto'
                >
                    <div className='steps py-5'>
                        <motion.div 
                            variants={inDownMoving} 
                            className='step-item py-3 relative'
                            transition={{ duration: 0.8 }}
                        >
                            <span className='step-item-num font-exo text-3xl font-semibold'>1</span>
                            <p className='text-lead-dark tracking-[1px] font-exo text-sm sm:text-xl font-light leading-normal absolute left-[75px] sm:left-[130px] top-[15px] sm:top-[16px] sm:w-[400px] w-[260px]'>Выбираете номинал и оплачиваете карту удобным способом, Вам будет выслан код</p>
                        </motion.div>
                        <motion.div 
                            variants={inDownMoving} 
                            className='step-item py-8 relative'
                            transition={{ duration: 1.4 }}
                        >
                            <span className='step-item-num font-exo text-3xl font-semibold'>2</span>
                            <p className='text-left sm:text-right text-lead-dark tracking-[1px] font-exo text-sm sm:text-xl font-light leading-normal absolute left-step2 sm:right-[130px] top-[34px] sm:w-[400px] w-[260px]'>При помощи одноразового 16 значного кода вы активируете карту</p>
                        </motion.div>
                        <motion.div 
                            variants={inDownMoving} 
                            className='step-item py-3 relative'
                            transition={{ duration: 2 }}
                        >
                            <span className='step-item-num font-exo text-3xl font-semibold'>3</span>
                            <p className='text-lead-dark tracking-[1px] font-exo text-sm sm:text-xl font-light leading-normal absolute left-[75px] sm:left-[130px] top-[15px] sm:top-[16px] sm:w-[400px] w-[260px]'>Конвертируете сумму номинала карты в криптовалюту по курсу на момент активации</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>

        {/*Секция подарок*/}
        <motion.div 
            className='section h-[1000px] sm:h-[600px] px-3 flex justify-center py-3'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            variants={animateInView}
            transition={{ duration: 0.8 }}
        >
            <div 
                className='container flex flex-col rounded-[20px] px-5 sm:p-10 py-10 sm:py-0 sm:flex-row items-start sm:items-center sm:justify-between relative bg-top-center bg-cover'
                style={{ backgroundImage: 'url("./assets/img/saas-3/hero/hero-bg.jpg")' }}
            >
                <div className='w-[100%] sm:w-[30%] flex flex-col items-center sm:items-start'>
                    <div>
                        <motion.h2
                            className='w-[96%] font-exo text-xl sm:text-2xl leading-snug text-white text-left'
                            variants={miniInDownMoving}
                            transition={{ duration: 0.5 }}
                        >
                            Дарите карту близким 
                        </motion.h2>
                        <motion.p 
                            className='wfull sm:w-full text-lead tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal text-left mt-4 mb-11'
                            variants={miniInDownMoving} 
                            transition={{ duration: 0.7 }}
                        >
                            Наша карта цифровая, и пользоваться ей может любой человек, у которого есть 16-значный код
                        </motion.p>
                    </div>
                    <div>
                        <motion.h2
                            className='w-[96%] font-exo text-xl sm:text-2xl leading-snug text-white text-left'
                            variants={miniInDownMoving}
                            transition={{ duration: 0.5 }}
                        >
                            Активация в течении 3 месяцев
                        </motion.h2>
                        <motion.p 
                            className='w-full sm:w-full text-lead tracking-[1px] font-exo text-lg sm:text-lg font-extralight leading-normal text-left mt-4 sm:mb-11 mb-2'
                            variants={miniInDownMoving} 
                            transition={{ duration: 0.7 }}
                        >
                            Код для карты действителен 3 месяца, и вы можете активировать ее в любое время, но не позднее указанного периода
                        </motion.p>
                    </div>
                </div>
                <div className='w-[100%] sm:w-[35%] sm:pt-0 pt-3 mb-6 sm:mb-0'>
                    <motion.img 
                        src="./assets/img/saas-3/happy-card.png" 
                        alt=""
                        variants={miniInDownMoving} 
                        transition={{ duration: 1.6 }}
                    />
                </div>
                <div className='w-[100%] sm:w-[35%] flex flex-col items-center sm:items-start'>
                    <motion.h2
                        className='w-[100%] font-exo text-xl sm:text-2xl sm:leading-[2.3rem] leading-[2rem] text-white text-left'
                        variants={miniInDownMoving}
                        transition={{ duration: 0.5 }}
                    >
                        Конвертируйте номинал в криптовалюту
                    </motion.h2>
                    <motion.p 
                        className='w-[100%] sm:w-[60%] text-lead tracking-[1px] font-exo sm:text-xl text-lg sm:text-lg font-extralight leading-normal text-left mt-4 mb-11'
                        variants={miniInDownMoving} 
                        transition={{ duration: 0.7 }}
                    >
                        Конвертация по курсу <a href='https://criptamat.ru' className=''>CRIPTAMAT</a>
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className='rounded-[8px] py-4 px-10 text-lg tracking-[0.5px] sm:flex hidden bg-white text-lead-dark font-exo'
                        onClick={handleLocShop}
                        >
                        Перейти в каталог
                    </motion.button>
                </div>

            </div>
        </motion.div>
        
        {/* Секция каталог */}
        <div 
            className='section px-5 flex justify-center bg-center bg-cover py-20'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='text-center font-exo text-black font-semibold text-3xl sm:text-4xl mb-14'>Каталог цифровых карт</h2>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className='features flex justify-between flex-wrap'>
                        <motion.div
                            variants={inLeftMoving}
                            className='features-item flex items-center text-center flex-col mb-5 sm:mb-0 py-3 bg-light rounded-[10px] p-3'
                            transition={{ duration: 2.4 }}
                        >
                            <img 
                                src="./assets/img/saas-3/nom1.png"
                                width={400}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-medium leading-tight mt-5 mb-3'>Карта номиналом 1$</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center text-center flex-col mb-5 sm:mb-0 py-3 bg-light rounded-[10px] p-3'
                            transition={{ duration: 1.8 }}
                        >
                            <img 
                                src="./assets/img/saas-3/nom1.png"
                                width={400}
                            />
                                <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-medium leading-tight mt-5 mb-3'>Карта номиналом 5$</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center text-center flex-col mb-5 sm:mb-0 py-3 bg-light rounded-[10px] p-3'
                            transition={{ duration: 1.2 }}
                        >
                            <img 
                                src="./assets/img/saas-3/nom1.png"
                                width={400}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-medium leading-tight mt-5 mb-3'>Карта номиналом 10$</p>
                        </motion.div>
                    </div>
                    <div className='w-100 flex justify-center mt-10'>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className='rounded-[8px] py-4 px-10 text-lg tracking-[0.5px] bg-grad text-white font-exo mt-4'
                        onClick={handleLocShop}
                        >
                        Перейти в каталог
                    </motion.button>
                    </div>
                </motion.section>
            </div>
        </div>

        {/* Секция 3 */}
        <div 
            className='section px-5 flex justify-center bg-center bg-cover py-20'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='text-center font-exo text-black font-semibold text-3xl sm:text-4xl'>CardSell- это выгодно и удобно</h2>
                <p className='text-black-600 tracking-[1px] font-exo text-lg font-extralight text-center leading-normal mt-3 mb-14'>Вот что мы предлагаем нашим клиентам</p>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className='features flex justify-between flex-wrap'>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center flex-col py-3 text-center'
                            transition={{ duration: 2.4 }}
                        >
                            <img 
                                src="./assets/img/icon/icon1.svg"
                                width={80}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-semibold leading-tight my-3'>Локализация и удобство</p>
                            <p className='text-lead-dark tracking-[0.8px] font-exo text-lg font-light leading-normal'>Открывайте карту. Конвертируйте номинал в криптовалюту и пользуйтесь в любой точке мира</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center flex-col py-3 text-center'
                            transition={{ duration: 1.8 }}
                        >
                            <img 
                                src="./assets/img/icon/icon2.svg"
                                width={80}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-semibold leading-tight my-3'>Надежный сервис</p>
                            <p className='text-lead-dark tracking-[0.8px] font-exo text-lg font-light leading-normal'>CardSell прозрачная компания с большим количеством постоянных и довольных клиентов</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center flex-col py-3 text-center'
                            transition={{ duration: 1.2 }}
                        >
                            <img 
                                src="./assets/img/icon/icon3.svg"
                                width={80}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-semibold leading-tight my-3'>Дружелюбная поддержка</p>
                            <p className='text-lead-dark tracking-[0.8px] font-exo text-lg font-light leading-normal'>В нашем телеграм канале вы можете проконсультироваться у оператора по любому вопросу</p>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>

        {/* Секция 4*/}
        <div 
            className='section h-[800px] sm:h-[600px] px-3 flex justify-center py-3'
        >
            <div 
                className='container flex flex-col rounded-[20px] p-5 sm:p-10 py-10 sm:py-10 items-start sm:items-center relative bg-top-center bg-cover'
                style={{ backgroundImage: 'url("./assets/img/saas-3/hero/hero-bg.jpg")' }}
            >
                <h2 className='font-exo text-white font-semibold text-3xl sm:text-4xl'>Инструкция и описание к картам</h2>
                <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between items-center sm:my-10 my-5'>
                    <div className='w-[90%] sm:w-1/2 order-2 sm:order-1  hidden sm:flex justify-center items-center'>
                        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                            <div className="card-inner">
                                <div 
                                    className="card-front bg-cover"
                                    style={{ backgroundImage: 'url("./assets/img/saas-3/front.png")' }}
                                >
                                    <motion.div
                                        className='absolute right-[26px] top-[56%]'
                                        style={circleStyle}
                                        animate={pulseAnimation}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div
                                        className='absolute left-[26px] top-[85%]'
                                        style={circleStyle}
                                        animate={pulseAnimation}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                <div 
                                    className="card-back bg-cover"
                                    style={{ backgroundImage: 'url("./assets/img/saas-3/back.png")' }}
                                >
                                    <motion.div
                                        className='absolute right-[90px] top-[56%]'
                                        style={circleStyle}
                                        animate={pulseAnimation}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='order-1 sm:order-2 w-[100%] sm:w-[50%] flex sm:items-center sm:justify-center'>
                        <p 
                            className='sm:w-[76%] text-lead tracking-[1px] font-exo text-lg font-extralight leading-normal mt-6 mb-10'
                        >
                            <span className='font-semibold'>При покупке вы получаете реквизиты карты:</span>
                            <br></br>
                            - Шестнадцатизначный номер карты
                            <br></br>
                            <span 
                                onClick={handleClick}
                                className='cursor-pointer'
                            >
                                – Код CVV2
                            </span>
                            <br></br>
                            – Срок действия карты (3 месяца)
                            <br></br>
                            <br></br>
                            <span className='font-semibold'>Рекоммендация перед покупкой:</span>
                            <br></br>
                            1. Заранее узнайте принимает ли Ваш сервис/магазин виртуальные предоплаченные карты – MasterCard Prepaid.
                            <br></br>
                            2. Заранее предусмотрите запасные варианты расходования средств с карты.
                            <br></br>
                            3. При выборе номинала карты рассчитывайте с запасом на возможные комиссии и конвертации при оплате.
                        </p>
                    </div>
                </div>

            </div>
        </div>

        
        {/* Секция 5 faq */}
        <div 
            className='section px-5 flex justify-center bg-center bg-cover py-14'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='font-exo text-black font-semibold text-3xl sm:text-4xl'>Ответы на популярные вопросы</h2>
                <p className='text-black-600 tracking-[1px] font-exo text-lg font-extralight leading-normal mt-3 mb-11'>Внимательно ознакомьтесь с тем, как работает карта</p>
                <div className='w-[100%] flex justify-center py-5'>
                    
                    <Accordion 
                        items={accordionItems} 
                    />

                </div>
                
            </div>
        </div>
        </>
    )
}