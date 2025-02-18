'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import "./header.css"

const Header = () => {
    const [open, setOpen] = useState(false)

    const menuClose = (e) => {
        setOpen(false)
        console.log('menu close ', e);

    }
    const menuOpen = (e) => {
        console.log('menu open ', e);
        setOpen(true)
    }
    const handleMenuOne = (e) =>{
        console.log('handleMenuOne ', e.target.childNodes[0].textContent);
    }
    // onMouseMove={menu}
    return (
        <header className="header">
            <div className="header__container">

                <div className="header__logo">
                    <Link href='/'><Image src="/logo.png" alt="logo" width={281} height={66} /></Link>
                </div>

                <div className="header__lang__nav">
                    <div className="header__lang">
                        <Link href='/'><Image src="/eng_flag.png" alt="eng" width={18} height={12} /></Link>
                        <Link href='/'><Image src="/rus_flag.png" alt="rus" width={18} height={12} /></Link>
                        {/* <Link href='/ru'><img src="/rus_flag.png" alt="rus"></img></Link> */}
                    </div>

                    <nav className="header__nav">
                    <Link href='/about' className="header__link" onMouseOver={menuOpen} onMouseOut={menuClose}>ABOUT US</Link>

                        {/* --------------Hidden menu-------------- */}
                        {open ? (<div><ul className="menu">
                            <li className="menu-item">
                                <button onClick={handleMenuOne} onMouseOver={menuOpen} onMouseOut={menuClose}>Menu 1</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={handleMenuOne} onMouseOver={menuOpen} onMouseOut={menuClose}>Menu 2</button>
                            </li>
                        </ul>
                        </div>) : null}
                        
                        <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                        <Link href='/fleet' className="header__link">FLEET</Link>
                        <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                        <Link href='/services' className="header__link">SERVICES</Link>
                        <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                        <Link href='/news' className="header__link">NEWS</Link>
                        <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                        <Link href='/gallery'>GALLERY</Link>
                        <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                        <Link href='/contact'>CONTACT US</Link>
                        {/* <Link href='/users'>Users test link</Link> */}
                    </nav>
                </div>

            </div>
        </header>


    )
}

export default Header