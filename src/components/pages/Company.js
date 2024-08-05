import styles from './Company.module.css'

import Container from '../layout/Container'

function Company() {
    return(
        <div>
            <h1>Conheça nossa história</h1>
            <div className={styles.quadro}>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum."
                </p>
                <img src='https://placehold.co/600x400' alt='Foto'/>
            </div>
        </div>
    )
}

export default Company