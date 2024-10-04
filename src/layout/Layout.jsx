import styles from "./Layout.module.css"
import exChangeLogo from "../assets/exchange.png"

function Layout ({children}) {

    return(
        <>
        <header className={styles.header}>
            <img src={exChangeLogo} alt="ExChange" />
            <p>
                <a href="">Crypto App</a> | React.js 
            </p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by MH7 ❤</p>
        </footer>
        </>
    )
}

export default Layout ; 