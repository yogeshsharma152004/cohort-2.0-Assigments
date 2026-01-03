
let Main = () => {
    return React.createElement("main" , null , 
        React.createElement("div" , {className:"main-left"},
           React.createElement("h4" , null , "Product Designer"),
           React.createElement("div" , {className:"line"}),
           React.createElement("h4" , null , "2026")
        ),
        React.createElement("div" , {className:"main-center"},
         React.createElement("div" , {className:"top"} , 
            React.createElement("div" , {className:"top-left"},
               React.createElement("h1" , null, "200+"),
               React.createElement("p" , null , "Project  Completed")
            ),
            React.createElement("div" , {className:"top-right"},
               React.createElement("h1" , null, "50+"),
               React.createElement("p" , null , "Startup Raised")
            )
         ),
         React.createElement("div" , {className:"center"},
             React.createElement("h1" , null , "Hello"),
             React.createElement("p" ,null, "— it's Yogesh design Wizerd")
         ),
         React.createElement("div" , {className:"bottom"},
            React.createElement("p" , null , "Scroll Down"),
            React.createElement("i" , {className:"ri-arrow-down-line"})
         )
        ),
        React.createElement("div" , {className:"main-right"},
         React.createElement("img", {
            src :"./assets/person.png ", 
            alt : "error",

         })
        )
     );
    
}

export default Main