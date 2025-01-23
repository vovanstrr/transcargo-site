import styles from "./page-about.css"

export const metadata = {
    title: 'О нашей компании',
    description: 'about page'
}

function about() {
    return (
        <div className='about'>
            <h1>О нашей компании</h1>
            <p>about page</p>
        </div>
    );
}

export default about;