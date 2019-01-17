import styles from '../styles/style.scss';

const styler = (styleArray) => {
    let styleString = '';
    styleArray.forEach((style) => {
        styleString += styles[style] + ' ';
    });
    return styleString.trim();
};

export default styler;