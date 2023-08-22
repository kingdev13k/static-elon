import React from "react"
import Participate from "./Participate"
import Transaction from "./Transactions"
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
                <Transaction />
            </div>

        </React.Fragment>
    )
}