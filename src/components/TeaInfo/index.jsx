import styles from './teaInfo.module.css'
import { teaData } from '../../data/data'

const TeaInfo = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {teaData.map((tea) => (
                    <div key={tea.id} className={styles.teaItem}>
                        <h2 className={styles.teaName}>{tea.name}</h2>
                        <p className={styles.teaDescription}>{tea.description}</p>
                        <div className={styles.benefits}>
                            {tea.benefits.map((benefit, index) => (
                                <span key={index} className={styles.tag}>{benefit}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeaInfo
