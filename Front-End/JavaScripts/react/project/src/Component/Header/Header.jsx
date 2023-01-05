import Logo from "../../img/logo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";



const NavMenu = styled.nav`
    width: 100%;
    background: #00208e;
    margin-top:20px;
      ul{
        display: flex;
          li{
            list-style: none;
             a{
                display: block;
                font-size: 14px;
                color: #fff;
                padding: 15px 20px;
                text-decoration: none;
                
                &:hover{
                  color:#ccc;
                }
             }
          }
         }
         
          @media(max-width:640px){
            background:#555;
              ul{
                 display:block;
                  li{
                   a{
                     font-size:14px;
                   }
                  }
              }
          }
     
`
const Cont = styled.div`
     max-width: 1170px;
     margin:0 auto;
`

/* let obj ={
    name:'Maryna'
}
Header(obj); */

const Header =(props) =>{
    return(
        <header className="header">
            <div className="container">
                <div>
                    <a href="/">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>
            </div>
            <NavMenu>
                <Cont>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </Cont>
            </NavMenu>
        </header>
    )
}

export  default Header;