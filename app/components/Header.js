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
    const handleMenuOne = (e) => {
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
                        <ul>
                            <li>
                                <Link href='/about' className="header__link" onMouseOver={menuOpen} onMouseOut={menuClose}>ABOUT US</Link>
                                <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                                <ul>
                                    <li className="menu-item">
                                        <Link href='/fleet' className="header__link">ABOUT OUR PARENT COMPANY</Link>
                                        {/* <button onClick={handleMenuOne} onMouseOver={menuOpen} onMouseOut={menuClose}>Menu 1</button> */}
                                    </li>
                                    <li className="menu-item">
                                        <Link href='/news' className="header__link">OUR TEAM</Link>
                                        {/* <button onClick={handleMenuOne} onMouseOver={menuOpen} onMouseOut={menuClose}>Menu 2</button> */}
                                    </li>
                                    <li className="menu-item">
                                        <Link href='/news' className="header__link">SAFETY, SECURITY AND QUALITI</Link>
                                    </li>
                                </ul>
                            </li>


                            {/* --------------Hidden menu-------------- */}
                            {/* {open ? (<div className="nav__item"><ul className="menu">
                            <li className="menu-item">
                                <button onClick={handleMenuOne} onMouseOver={menuOpen} onMouseOut={menuClose}>Menu 1</button>
                            </li>
                            <li className="menu-item">
                                <button onClick={handleMenuOne} onMouseOver={menuOpen} onMouseOut={menuClose}>Menu 2</button>
                            </li>
                        </ul>
                        </div>) : null} */}


                            <li>
                                <Link href='/fleet' className="header__link">FLEET</Link>
                                <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                            </li>
                            <li>
                                <Link href='/services' className="header__link">SERVICES</Link>
                                <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                                <ul>
                                    <li>
                                        <Link href='/news' className="header__link">OFFSHORE TRANSSHIPMENT</Link>
                                    </li>
                                    <li>
                                        <Link href='/news' className="header__link">OCEAN TOWAGE & SALVAGE</Link>
                                    </li>
                                    <li>
                                        <Link href='/news' className="header__link">DIVING JOBS</Link>
                                    </li>
                                    <li>
                                        <Link href='/news' className="header__link">SHIP TECHNICAL MANAGEMENT</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href='/news' className="header__link">NEWS</Link>
                                <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                            </li>
                            <li>
                                <Link href='/gallery' className="header__link">GALLERY</Link>
                                <Image src="/top_menu_razd.png" alt="razdelitel" width={2} height={24} />
                            </li>
                            <li>
                                <Link href='/contact' className="header__link">CONTACT US</Link>
                            </li>


                            {/* <Link href='/users'>Users test link</Link> */}
                        </ul>
                    </nav>
                </div>

            </div>
        </header>


    )
}

export default Header