//import  clases from './Nav.module.css';
import styled from 'styled-components';


/* let clases ={
    'menu': 'Nav_menu__8MJrg'
}
let clases = `${clases1} ${clases2}`
*/
console.log('Hello');
const NavMenu = styled.nav`
    width: 100%;
    background: #00208e;
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

const Nav =() =>{
    return(
        <NavMenu>
            <Cont>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </Cont>
        </NavMenu>
    )
}

export default  Nav;