import Link from "next/link"

const Header = () => {
    return (
        <header className="header__">
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
        </header>


    )
}

export default Header