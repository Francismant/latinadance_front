import styles from "./CarouselParticulier.module.scss"

function CarouselParticulier({dataCarousel}) {
    return (
        <div className={styles.container}>
            {dataCarousel.map((image,index) => (
            <div key={index} className={styles.box}>
                <img src={image.src} alt={image.alt} />
            </div>
                ))}
        </div>
    )
}

export default CarouselParticulier