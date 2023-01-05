
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Baner />
      <Blog />
      <Footer />
    </div>
  );
}

const Header =() =>{
  return(
   <header className="header">
     <div className="container">
        <div>
          <a href="/">
            <img src="logo.svg" alt="logo" />
          </a>
        </div>
     </div>
   </header>
  )
}
const Nav =() =>{
  return(
      <nav className="nav">
        <div className="container">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>
  )
}

const Baner =() =>{
  return(
      <section className="baner">
        <div className="container">
          <div className="box_baner">
            <h1>Heading</h1>
             <p>LOrem ipsum dolar LOrem ipsum dolar LOrem ipsum dolar LOrem ipsum dolar LOrem ipsum dolar LOrem ipsum dolar LOrem ipsum dolar</p>
          </div>
        </div>
      </section>
  )
}

const Blog =() =>{
  return(
      <section className="blog">
        <div className="container">
          <div className="blog_post">
            <div>post 1</div>
            <div>post 2</div>
            <div>post 3</div>
          </div>
        </div>
      </section>
  )
}

const Footer =() =>{
  return(
      <footer className="footer">
        <div className="container">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </footer>
  )
}

export default App;