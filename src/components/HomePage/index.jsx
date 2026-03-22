import styles from './homePage.module.css'

const HomePage = ({ navigateTo }) => {   

    return (
        <main className={styles.mainCategory}>
            <div className={styles.coffee}>
                <h2 className={styles.title}>If your day starts with Coffee</h2>
                <p className={styles.chooseBtn} onClick={() => navigateTo("coffee")}>Choose me</p>  
            </div>
            <div className={styles.tea}>
                <h2 className={styles.title}>If you prefer Tea</h2>
                <p className={styles.chooseBtn} onClick={() => navigateTo("tea")}>Choose me</p>  
            </div>
        </main>
    )
}

export default HomePage