import  clases from './Footer.module.css';
const Footer =() =>{
    return(
        <footer className={clases.footer}>
            <div className={clases.container}>
                <ul className={clases.menu}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </footer>
    )
}

export  default Footer;