import Link from "next/link"

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">

                <Link href='/'><img src="/logo.png" alt="logo"></img></Link>
                <nav>
                    <Link href='/about'>ABOUT US</Link>
                    <Link href='/fleet'>FLEET</Link>
                    <Link href='/services'>SERVICES</Link>
                    <Link href='/news'>NEWS</Link>
                    <Link href='/gallery'>GALLERY</Link>
                    <Link href='/contact'>CONTACT US</Link>
                    {/* <Link href='/users'>Users test link</Link> */}
                </nav>
                <div className="header__lang">
                <Link href='/'><img src="/eng_flag.png" alt="eng"></img></Link>
                <Link href='/ru'><img src="/rus_flag.png" alt="rus"></img></Link>
                </div>
            </div>
        </header>


    )
}

export default Header