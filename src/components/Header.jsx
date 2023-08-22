import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header className="headerLayout">
            <div className="container">
                <div className="wrapper"><a aria-current="page" href="/"
                    className="router-link-active router-link-exact-active logo"> <img src={logo} width="55" alt="" /><span>Tesla</span></a>
                    <nav className="navigation">
                        <ul>
                            <li><a aria-current="page" href="/#about-event"
                                className="router-link-active router-link-exact-active">About event</a></li>
                            <li><a aria-current="page" href="/#instruction"
                                className="router-link-active router-link-exact-active">Instruction</a></li>
                            <li><a aria-current="page" href="/#transaction"
                                className="router-link-active router-link-exact-active">Transaction</a></li>
                        </ul>
                    </nav>
                    <div className="actions"><a aria-current="page" href="/#participate"
                        className="router-link-active router-link-exact-active action"> To participate </a></div>
                </div>
            </div>
        </header>
    )
        
}

