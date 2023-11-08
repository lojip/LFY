import styles from './spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.SpinnerContainer}></div>
        </div>
    );
};

export default Spinner;
