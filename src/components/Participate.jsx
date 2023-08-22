import { Routes, Route, Link } from "react-router-dom";
import BTC from "../pages/btc";
import ETH from "../pages/eth";
import BNB from "../pages/bnb";
import USDT from "../pages/usdt";
import USDC from "../pages/usdc";

export default function participate() {


    return (
        <div className="participate" id="participate">
            <div className="container">
                <div className="subject">
                    <h2> Choose a <span>coin</span> and participate in <span>X2</span> event </h2>
                    <p>Create an application and follow the instructions to get started</p>
                </div>
                <div className="participateWrapper">
                    <div className="coinsList participateTop">
                        <div className="coinsListWrapper">
                            <Link to="/">
                                <div className="coinItem">
                                    <div className="icon"><img
                                        src="data:image/png;base64,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"
                                        alt="" /></div>
                                    <div className="name">Bitcoin</div>
                                    <div className="code">BTC</div>
                                </div>
                            </Link>
                            <Link to="/eth"><div className="coinItem">
                                <div className="icon"><img
                                    src="data:image/png;base64,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"
                                    alt="" /></div>
                                <div className="name">Ethereum</div>
                                <div className="code">ETH</div>
                            </div>
                            </Link>
                               
                            <Link to="/usdt">
                                <div className="coinItem">
                                    <div className="icon"><img
                                        src="data:image/png;base64,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"
                                        alt="" /></div>
                                    <div className="name">USDT ERC20</div>
                                    <div className="code">USDT</div>
                                </div>
                            </Link>
                            <Link to="/bnb">
                                <div className="coinItem">
                                    
                                    <div className="icon"><img src="data:image/png;base64,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" alt="" /></div>
                                    <div className="name">Tesla Coin</div>
                                    <div className="code">BNB</div>
                                </div>
                            </Link>
                            <Link to="/usdc">
                                <div className="coinItem">
                                    <div className="icon"><img
                                        src="data:image/png;base64,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"
                                        alt="" /></div>
                                    <div className="name">USD Coin</div>
                                    <div className="code">USDC</div>
                                </div>
                            </Link>
                            <div className="line"></div>
                        </div>
                    </div>
                        <Routes>
                            <Route  path="/" element={<BTC />} />
                            <Route  path="/eth" element={<ETH />} />
                            <Route  path="/bnb" element={<BNB />} />
                            <Route  path="/usdt" element={<USDT/>} />
                            <Route  path="/usdc" element={<USDC/>} />
                        </Routes>
                    </div>
                </div>
            </div>

    )
}