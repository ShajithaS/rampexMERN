//Instagram console Demo for post, like , comment , share

async function postCode(){
    var post=new Promise((createPost)=>{
        setTimeout(() =>{
        createPost("Post Created Successfully")
    },5000)
})
    //This takes 5 seconds to execute every segment 
    /*console.log(await post)
    console.log(await likeCode());
    console.log(await commentCode());
    console.log(await shareCode());*/
    const [Post,like,share,comment] = await Promise.all([post,likeCode(),commentCode(),shareCode()])
    console.log(Post)
    console.log(like)
    console.log(share)
    console.log(comment)

}

likeCode = async ()=>{
    return new Promise((likePost)=>{
        setTimeout(() =>{
        likePost("Post liked Successfully")
    },5000)
})
}

commentCode = async ()=>{
    return new Promise((commentPost)=>{
        setTimeout(() =>{
        commentPost("Commented Post Successfully")
    },5000)
})
}

shareCode = async ()=>{
    return new Promise((sharePost)=>{
        setTimeout(() =>{
        sharePost("Post shared Successfully")
    },5000)
})
}


postCode();