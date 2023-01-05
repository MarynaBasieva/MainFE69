import  Post from '../Blog/Post/Post.jsx';
const Blog =() =>{
    return(
        <section className="blog">
            <div className="container">
                <div className="blog_post">
                    <Post name="Maryna" fullName="Basieva" message="I like React"/>
                    <Post name="Oleg" fullName="Full1" message="I like React 2"/>
                    <Post name="Dima" fullName="Full2" message="I like React 3"/>
                    <Post name="Olena" fullName="Full3" message="I like React 4"/>
                </div>
            </div>
        </section>
    )
}

export default  Blog;