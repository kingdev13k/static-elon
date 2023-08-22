export default function Transaction() {
    return (
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
    )
}