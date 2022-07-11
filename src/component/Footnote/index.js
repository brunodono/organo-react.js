import './Footnote.css';

const Footnote = (props) => {
    return (
        <footer className='footer'>

            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="facebook.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="twitter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="./imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Developed by Bruno Bignardi.
                </p>
            </section>
        </footer >
    )

};

export default Footnote