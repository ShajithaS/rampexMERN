function Home(props){
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white",
    }
    return(
        <div>
            <h2 style={styling}>
                Home page
            </h2>  
            <p>
                This the Home page of react project
            </p>
            <p>Props usage:{props.properties},{props.sjit}</p>
        </div>
    );
}

export default Home;