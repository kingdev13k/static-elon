import React from "react"
import Participate from "./Participate"
import grid from "../assets/grid.svg"
import power from "../assets/power.svg"
import optimize from "../assets/optimize.svg"
import downwards from "../assets/downwards.svg"
import avatar from "../assets/avatar.png"

export default function Home() {
    return (
        <React.Fragment>

            <div className="home">
                <div className="greeting" id="about-event">
                    <div className="container">
                        <div className="wrapper">
                            <div className="left">
                                <div className="badge">Tesla Event →</div>
                                <h1 className="title"> Take part in first <span>Tesla Event</span>!
                                    <span className="mark">$100,000,000</span> </h1>
                                <p className="description"> Tesla has come along way in the past year and we couldn’t do it without you. We have bought $1.5 billion worth of Crypto and soon we will start accepting payments in bitcoin in exchange for our products. To celebrate, Elon Musk has allocated $10000 worth in Crypto to be given away! Tesla event for all crypto
                                    holders with a total fund of $100,000,000. Everyone can take part in event. </p>
                            </div>
                            <div className="right"><img src={avatar} width="440" alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="instruction" id="instruction">
                    <div className="container">
                        <div className="subject">
                            <h2>Start participating in a <span>few</span> steps</h2>
                            <p>To participate you only need to follow a few simple steps.</p>
                        </div>
                        <div className="items">
                            <div className="item">
                                <p>You can use any wallet or platform to make a transaction and participate! We accept BTC, ETH,
                                    BNB USD ERC20, USD TRC20, USD Coin</p><img src={grid} width="32" alt="" />
                            </div>
                            <div className="item">
                                <p>Once we receive your transaction, the outgoing transaction is processed to your address.</p>
                                <img src={power} width="32" alt="" />
                            </div>
                            <div className="item">
                                <p>As soon as we receive your transaction, we will immediately send you the requested 200%
                                    amount back to your wallet.</p><img src={optimize} width="32" alt="" />
                            </div>
                            <div className="item">
                                <p>If you participate too late, the requested amount will be returned back to your wallet.</p>
                                <img src={downwards} width="32" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* PARTICIPATE COMPONENT HERE */}

                <Participate />

                <div className="transactions" id="transaction">
                    <div className="container">
                        <div className="subject">
                            <h2>Live transaction</h2>
                            <p>In this block you can see online transactions.</p>
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Hash</td>
                                        <td>Value</td>
                                        <td>Time</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0x87EA689CDE2E0E14b21E15b1AadeFD7EB33E8a00...</td>
                                        <td>4.046 <span>ETH</span></td>
                                        <td>10:10</td>
                                        <td>
                                            <div className="status success">Successful</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>A69C0BbEFa3f3DCf2addaecFD07b7569cFC40259...</td>
                                        <td>2.924 <span>BTC</span></td>
                                        <td>10:10</td>
                                        <td>
                                            <div className="status success">Successful</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0x261e18BBFBac4DC37dAcD0285b4EBfa26a7FD8Bf...</td>
                                        <td>10,481 <span>USDT ERC20</span></td>
                                        <td>10:09</td>
                                        <td>
                                            <div className="status success">Successful</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>0xD84Aef22CDd7e5F2dff3e678CCcC4B5FBf16f1C3...</td>
                                        <td>27.018 <span>ETH</span></td>
                                        <td>10:09</td>
                                        <td>
                                            <div className="status success">Successful</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6bFCcacCa4befA58CCbfd91C185e41c64a14845f...</td>
                                        <td>37,955 <span>USD COIN</span></td>
                                        <td>10:09</td>
                                        <td>
                                            <div className="status success">Successful</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>fC264d782D30EbeFc3eD49C41EbAFdDcd40B4Df6...</td>
                                        <td>13,308 <span>USD COIN</span></td>
                                        <td>10:09</td>
                                        <td>
                                            <div className="status info">1 Confirmations</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}