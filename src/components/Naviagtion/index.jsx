import styles from './navigation.module.css'

const Navigation = ({updateFunction, currentPage}) => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.navItem} ${currentPage === null ? styles.active : ''}`} onClick={() => updateFunction(null)}>Home</div>
            <div className={`${styles.navItem} ${currentPage === "coffee" ? styles.active : ''}`} onClick={() => updateFunction("coffee")}>Coffee</div>
            <div className={`${styles.navItem} ${currentPage === "tea" ? styles.active : ''}`} onClick={() => updateFunction("tea")}>Tea</div>
        </nav>
    )
}

export default Navigation