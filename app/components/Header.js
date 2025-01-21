import Link from "next/link"

const Header = () => {
    return (
        <header>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/users'>Users test link</Link>
                <Link href='/about'>About</Link>
            </nav>
        </header>


    )
}

export default Header