import styles from './coffeeInfo.module.css'
import {coffeeData} from '../../data/data';
import {getImageURL} from '../../utils/imageFunctions'

const CoffeeInfo = () => {
    return (
        <main>
            <div className={styles.banner}>
                <p className={styles.bannerTilte}>Hello Coffee Lovers</p>
            </div>
            <div className={styles.coffeeContainer}>
                {coffeeData.map(coffee => (
                    <div key={coffee.id} className={styles.coffeeType}>
                        <div className={styles.coffeeImg}><img src={getImageURL(coffee.image)} alt={coffee.name} /></div>
                        <div>
                            <h2 className={styles.coffeeTitle}>{coffee.name}</h2>
                            <p className={styles.coffeeDescription}>{coffee.description}</p>
                        </div>
                        <div className={styles.process}>
                            <ul className={styles.steps}>
                                {coffee.process.map((step, index) => (
                                    <li key={index} className={styles.step}>{step}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.funFact}>
                           <b>Intresting Fact :</b> {coffee.funFact}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default CoffeeInfo
