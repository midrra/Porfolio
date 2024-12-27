import { Fragment } from 'react';
import Footer from '../../compontents/footer/Footer';
import styles from './about.module.scss';

const About = ()=>{
    return(
        <Fragment>
            <div className={styles.about}>
                    <div className={styles.left}>
                    <h1>About</h1>
                    <h1>me</h1>
                    <p>my name is mohamed awad and i'm front end developer seeking for job to developer an innvitive website in the world!</p>
                    <a href="/www.google.com">www.mohaamd_awad.com</a>
                </div>
                <div className={styles.right}>
                    <div className={styles.image}> 
                        <img src="photes/about.png"></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>    
    )
}

export default About;