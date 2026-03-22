import styles from './header.module.css'

const Header = ({ headerTitle, headerSubTitle }) => {

    return (
        <header className={styles.header}>
            <div>
                <div className={styles.headerTitle}> {headerTitle} </div>
                <div className={styles.headerSubTitle}> {headerSubTitle} </div>
            </div>  
           
        </header>
    )
}

export default Header