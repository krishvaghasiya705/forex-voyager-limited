import React from 'react'
import './meta5.scss';
import Gotonext from '../home/gotonext';
import Wanttoget from '../home/wanttoget';
import Accountssection from '../home/Accountssections';
import bannermt5 from '../../assets/images/banner-mt5.webp';
import Slideicon from "../../assets/svg/slideicon";
import whatismeta from '../../assets/images/what-is-mt5.webp';

export default function Meta5() {
    return (
        <>
            <div className='strip-bg-colored'>
                <div className='conatiner'>
                    <div className='mttradingplatform'>
                        <div className='platformstrader'>
                            <div className='span-platfrom'>
                                <span>PLATFORMS</span>
                            </div>
                            <div className='trading-text'>
                                <h2><span>MT5</span> Trading Platform</h2>
                            </div>
                            <div className='traderline1'>
                                <p>MetaTrader 5 (MT5) trading platform meet the growing demands of brokers and traders.</p>
                            </div>
                            <div className='traderline2'>
                                <p>MT5 Platform offers all the various features provided by the MT4 platform, and in addition provides additional features such as improved trading functionalities and enhanced scripting tools for custom indicators and expert advisors.</p>
                            </div>
                            <div className='trader-button'>
                                <div className='start'>
                                    <button>Start Tranding Now
                                        <Slideicon />
                                    </button>
                                </div>
                                <div className='open'>
                                    <button>Open Demo Account</button>
                                </div>
                            </div>
                        </div>

                        <div className='bannermt5'>
                            <img src={bannermt5} alt="error" />
                        </div>
                    </div>
                </div>

            </div>

            <div className='white-bg-main'>
                <div className='white-bg-color'>
                    <div className='conatiner'>
                        <div className='whatismeta5'>
                            <div className='meta5-pera'>
                                <div className='whatis'>
                                    <h2>What is <span>MT5</span>?</h2>
                                </div>
                                <p>MT5 gives you access to our extensive line up of asset classes — including forex, stocks, indices, cryptocurrencies, metals, and commodities — on a single trading platform.</p>

                                <div className='withcomplete'>
                                    <span>With complete access to advanced trade types and cutting-edge analytical tools, Forex Voyager pushes the MT5 experience to a new level, that’s whether you’re a new or experienced trader. The main benefit of the MT5 platform is that traders are not restricted to using the built-in analytical resources.</span>
                                </div>
                            </div>

                            <div className='meta-trader-img'>
                                <img src={whatismeta} alt="error" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            < Accountssection />
            <Gotonext />
            <Wanttoget />
        </>
    )
}
