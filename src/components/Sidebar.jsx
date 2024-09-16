import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeMenus, setActiveMenus] = useState({}); 

    const toggleSidebar = () => setIsOpen(!isOpen);
    
    const toggleMenu = (menuId) => {
        setActiveMenus(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId]
        }));
    };

    return (
        <div className='relative'>
            <button onClick={toggleSidebar} className="p-3 px-0">
                {isOpen ? <HiMenuAlt3 size={30} className='text-gray-500'/> : <HiX className='text-gray-500' size={30}/>}
            </button>

            <div className={`absolute top-[80px] left-9 max-w-[390px] transition-transform duration-200 transform ${isOpen ? 'translate-x-20' : '-translate-x-full'}`}>
                <div className="p-2 h-full w-[375px] flex flex-col">
                    <h2 className="text-lg mx-auto px-10 py-3 font-semibold border bg-green-500 text-white rounded-full hover:bg-green-400 mb-4 hover:cursor-pointer">
                        Open Demat Account
                    </h2>
                    
                    {/* Accordion */}
                    <ul className="overflow-y-auto">
                        {/* Invest */}
                        <li>
                            <button onClick={() => toggleMenu('invest')} className="w-full text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                Invest
                                <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['invest'] ? 'rotate-180' : ''}`} size={20} />
                            </button>

                            <ul className={`transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['invest'] ? 'max-h-[1500px]' : 'max-h-0'}`}>
                                {/* INDstocks */}
                                <li>
                                    <button onClick={() => toggleMenu('indStocks')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        INDstocks
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['indStocks'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['indStocks'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* INDstocks Submenu */}
                                        <li><Link to="https://www.indmoney.com/stocks" className=''>Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/sip-in-stocks">SIP in Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices">Indices</Link></li>
                                        <li><Link to="https://www.indmoney.com/ipo">IPO</Link></li>
                                        <li><Link to="https://www.indmoney.com/futures-and-options">Futures & Options</Link></li>
                                    </ul>
                                </li> 

                                {/* US Stocks */}
                                <li>
                                    <button onClick={() => toggleMenu('usStocks')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        US Stocks
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['usStocks'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['usStocks'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* US stocks Submenu */}
                                        <li><Link to="https://www.indmoney.com/us-stocks" className=''>US Stocks</Link></li>
                                    </ul>
                                </li>

                                {/* ETFs */}
                                <li>
                                    <button onClick={() => toggleMenu('etfs')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        ETFs
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['etfs'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['etfs'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* ETFs Submenu */}
                                        <li><Link to="https://www.indmoney.com/us-stocks/top-etfs?heading=Explore+US+Stocks+Categories" className=''>Global ETFs</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/gold-etfs" className=''>Gold ETFs</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/etf" className=''>All ETFs</Link></li>
                                    </ul>
                                </li>

                                {/* Mutual Funds */}
                                <li>
                                    <button onClick={() => toggleMenu('mutualFunds')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Mutual Funds
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['mutualFunds'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['mutualFunds'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Mutual Funds Submenu */}
                                        <li><Link to="https://www.indmoney.com/mutual-funds" className=''>All Mutual Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/mutual-funds/equity-funds" className=''>Equity Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/mutual-funds/best-index-funds" className=''>Index Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/mutual-funds/debt-funds" className=''>Debt Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/mutual-funds/hybrid-funds" className=''>Hybrid Funds</Link></li>
                                    </ul>
                                </li>

                                {/* NPS */}
                                <li>
                                    <button onClick={() => toggleMenu('nps')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                    NPS
                                    <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['nps'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['nps'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* NPS submenu */}
                                        <li><Link to="https://www.indmoney.com/features/nps-national-pension-scheme" className=''>Invest in NPS</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/nps-calculator" className=''>NPS Calculator</Link></li>
                                        
                                    </ul>
                                </li>

                                {/* Other Instruments */}
                                <li>
                                    <button onClick={() => toggleMenu('otherInstruments')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Other Instruments
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['otherInstruments'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['otherInstruments'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Other Instruments submenu */}
                                        <li><Link to="https://www.indmoney.com/fixed-deposit" className=''>Fixed Deposits</Link></li>                                        
                                        <li><Link to="https://www.indmoney.com/insurance" className=''>Insurance</Link></li>                                        
                                    </ul>
                                </li>
                                
                            </ul>
                        </li>

                        {/* Features */}
                        <li>
                            <button onClick={() => toggleMenu('features')} className="w-full text-left pl-4 pr-3 py-4 px-1  flex items-center justify-between border-b-[1.5px] border-gray-200">
                                Features
                                <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['features'] ? 'rotate-180' : ''}`} size={20} />
                            </button>

                            <ul className={`transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['features'] ? 'max-h-[1500px]' : 'max-h-0'}`}>
                                {/* Calculators */}
                                <li>
                                    <button onClick={() => toggleMenu('calculators')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Calculators
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['calculators'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['calculators'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Calculators Submenu */}
                                        <li><Link to="https://www.indmoney.com/calculators/sip-calculator" className=''>SIP Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/brokerage-calculator" className=''>Brokerage Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/swp-calculator" className=''>SWP Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/direct-regular-mutual-funds" className=''>Regular vs Direct MF Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/lumpsum-calculator" className=''>Lumpsum Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/gst-calculator" className=''>GST Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/nps-calculator" className=''>NPS Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/post-office-rd-calculator" className=''>Post Office RD Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/salary-calculator" className=''>Salary Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/gratuity-calculator" className=''>Gratuity Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators/mutual-funds-returns-calculator" className=''>Mutual Fund Returns Calculator</Link></li>
                                        <li><Link to="https://www.indmoney.com/calculators" className=''>View all Calculator</Link></li>
                                    </ul>
                                </li> 

                                {/* Features */}
                                <li>
                                    <button onClick={() => toggleMenu('subFeatures')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Features
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['subFeatures'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['subFeatures'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Features Submenu */}
                                        <li><Link to="https://www.indmoney.com/features/best-trading-app" className=''>Trading App</Link></li>
                                        <li><Link to="https://www.indmoney.com/features/mutual-fund-analytics" className=''>Mutual Fund Analytics</Link></li>
                                        <li><Link to="https://www.indmoney.com/features/goals-tracker" className=''>Goals Tracker</Link></li>
                                        <li><Link to="https://www.indmoney.com/mutual-funds/compare" className=''>Compare Mutual Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/features/track-all-investments" className=''>Track Your Finances</Link></li>
                                        <li><Link to="https://www.indmoney.com/features/switch-regular-to-direct-mutual-fund" className=''>Switch Regular to Direct MF</Link></li>
                                        <li><Link to="https://www.indmoney.com/features/track-credit-card-bills" className=''>Track Credit Card Bills</Link></li>
                                        <li><Link to="https://www.indmoney.com/features/track-family-mutual-funds" className=''>Track Family Mutual Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/check-free-credit-score" className=''>Credit Score</Link></li>
                                        <li><Link to="https://www.indmoney.com/mutual-funds/mutual-fund-nomination" className=''>Set Nominee for Mutual Funds</Link></li>
                                        <li><Link to="https://www.indmoney.com/articles" className=''>Blogs</Link></li>
                                        <li><Link to="https://www.indmoney.com/features" className=''>View all Features</Link></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>

                        {/* Market */}
                        <li>
                            <button onClick={() => toggleMenu('market')} className="w-full pl-4 pr-3 text-left py-4 px-1 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                Market
                                <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['market'] ? 'rotate-180' : ''}`} size={20} />
                            </button>

                            <ul className={`transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['market'] ? 'max-h-[1500px]' : 'max-h-0'}`}>
                                {/* Market Movers */}
                                <li>
                                    <button onClick={() => toggleMenu('marketMovers')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Market Movers
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['marketMovers'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['marketMovers'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Market Movers Submenu */}
                                        <li><Link to="https://www.indmoney.com/market" className=''>Stock Market Today</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/52-week-high" className=''>52 Week High</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/52-week-low" className=''>52 Week Low</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/top-gainers" className=''>Top Gainers</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/top-losers" className=''>Top Losers</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/only-buyers" className=''>Only Buyers</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/only-sellers" className=''>Only Sellers</Link></li>
                                    </ul>
                                </li> 

                                {/* Stock Category */}
                                <li>
                                    <button onClick={() => toggleMenu('stockCategory')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                    Stock Category
                                    <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['stockCategory'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['stockCategory'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Stock Category Submenu */}
                                        <li><Link to="https://www.indmoney.com/stocks/category/buy-stocks" className=''>Stocks to buy today</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/penny-stocks" className=''>Penny Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/multibagger-stocks" className=''>Multi-bagger Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/nifty-50-stocks" className=''>Nifty 50 Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/large-cap-stocks" className=''>Large Cap Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/mid-cap-stocks" className=''>Mid Cap Stocks</Link></li>
                                        <li><Link to="https://www.indmoney.com/stocks/category/small-cap-stocks" className=''>Small Cap Stocks</Link></li>
                                    </ul>
                                </li> 

                                {/* Indices */}
                                <li>
                                    <button onClick={() => toggleMenu('indices')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Indices
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['indices'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['indices'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Indices Submenu */}
                                        <li><Link to="https://www.indmoney.com/indices/sensex" className=''>BSE Sensex</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/nifty-50" className=''>Nifty 50</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/nifty-midcap-100" className=''>Nifty Midcap 100</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/bank-nifty" className=''>Bank Nifty</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/nifty-financial" className=''>FINNIFTY</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/nifty-500" className=''>Nifty 500</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/nifty-it" className=''>Nifty IT</Link></li>
                                    </ul>
                                </li> 

                                {/* Global Indices */}
                                <li>
                                    <button onClick={() => toggleMenu('globalIndices')} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Global Indices
                                        <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['globalIndices'] ? 'rotate-180' : ''}`} size={20} />
                                    </button>

                                    <ul className={`ml-4 text-sm leading-10 transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['globalIndices'] ? 'max-h-[1500px]' : 'max-h-0'} `}>
                                        {/* Global Indices Submenu */}
                                        <li><Link to="https://www.indmoney.com/indices/gift-nifty" className=''>Gift Nifty</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/dow-jones-industrial-average" className=''>Dow Jones Industrial Average</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/s-p-500" className=''>S&P 500</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/nasdaq-100" className=''>Nasdaq 100</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/russell-2000-index" className=''>Russell 2000 Index</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices/dow-jones-market" className=''>Dow Jones Market</Link></li>
                                        <li><Link to="https://www.indmoney.com/indices" className=''>View all Indices</Link></li>
                                    </ul>
                                </li> 

                            </ul>
                        </li>

                        {/* Pricing */}
                        <li>
                            <button onClick={() => window.location.href = 'https://www.indmoney.com/pricing?type=indian-stocks'} className="w-full text-left pl-4 pr-3 py-4 px-1 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                Pricing
                            </button>
                        </li>

                        {/* Disclosure */}
                        <li>
                            <button onClick={() => toggleMenu('disclosure')} className="w-full pl-4 pr-3 text-left py-4 px-1 flex items-center justify-between border-b-[1.5px] border-gray-200">
                            Disclosure
                            <IoIosArrowUp className={`text-gray-400 w-6 transform transition-transform duration-300 ease ${activeMenus['disclosure'] ? 'rotate-180' : ''}`} size={20} />
                            </button>

                            <ul className={`transition-max-height duration-300 ease-in-out overflow-hidden ${activeMenus['disclosure'] ? 'max-h-[1500px]' : 'max-h-0'}`}>

                                {/* Complaint Status */}
                                <li>
                                    <button onClick={() => window.location.href = 'https://www.indmoney.com/complaints-status'} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        Complaint Status
                                    </button>
                                </li> 

                                {/* SEBI Investor Charter - Investment Advisor */}
                                <li>
                                    <button onClick={() => window.location.href = 'https://www.indmoney.com/sebi-investor-charter'} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        SEBI Investor Charter - Investment Advisor
                                    </button>
                                </li>

                                {/* More */}
                                <li>
                                    <button onClick={() => window.location.href = 'https://www.indmoney.com/page/policy-center'} className="w-full bg-gray-100 text-left py-4 px-1 pl-4 pr-3 flex items-center justify-between border-b-[1.5px] border-gray-200">
                                        More
                                    </button>
                                </li>
                                
                            </ul>
                        </li>

                    </ul>

                    {/* Download app section */}
                    <div className='bg-gray-100 ml-4 mt-[75px] w-11/12 p-3 mb-5 border border-gray-200 rounded-lg'>
                        <div className='flex gap-x-4 mb-3'>
                            <p className='font-semibold'>DOWNLOAD APP</p>
                            <p className='text-green-500'>1 Crore+ Downloads.</p>
                        </div>
                        <div className='flex gap-x-3'>
                            <div className='flex ml-1 justify-center items-center gap-x-1 text-xs'>
                                <FaApple size={30}/>
                                4.7
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStarHalfAlt className="text-yellow-500"/>
                            </div>
                            <div className='flex ml-1 justify-center items-center gap-x-1 text-xs'>
                                <IoLogoGooglePlaystore size={30}/>
                                4.6
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStarHalfAlt className="text-yellow-500"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
