
/* let props ={
    name:"Maryna",
    fullName: "Basieva",
    message:"I like react"
}
props.name */

const Post =(props) =>{
    return(
        <div>
            <div className="container">
                <span>{props.name}</span>
                <span>{props.fullName}</span>
                <div>{props.message}</div>
            </div>
        </div>
    );
}
export  default Post;