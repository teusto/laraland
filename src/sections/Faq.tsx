import styles from "./styles/faq.module.scss";

const Faq = () => {
    return (
        <section className={styles.faq_wrapper}>
            <div className={styles.faq_item}>
                <div className={styles.left}>
                    <div className={styles.left_title}>FAQ Title</div>
                    <div className={styles.left_text}>
                        <li>_Why?</li>
                        <li>_Who?</li>
                        <li>_Was?</li>
                        <li>_Where?</li>
                        <li>_When?</li>
                        <li>_How?</li>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_text}>Nam turpis velit, viverra et dignissim quis, dapibus eu risus. Aenean et tortor eu sapien laoreet malesuada. Fusce et felis eros. Nulla eget ex et urna pulvinar cursus in eget nunc. Cras convallis ex vel ultrices aliquam. Sed convallis massa vel commodo eleifend. Donec non odio diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque efficitur et tellus at bibendum. In pulvinar, dui vitae venenatis ullamcorper, arcu metus pharetra massa, vel scelerisque mauris ante sed lacus.</div>
                </div>
            </div>
        </section>
    );
};

export default Faq;