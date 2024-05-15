import React from "react";
import UserContext from "./UserContext";

const UsercontextProvider=({children})=>{
    const [user, setuser]=React.useState(null)
    return (
        <UserContext.Provider value={{user, setuser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UsercontextProvider;


// import React from "react";
// import UserContext from "./UserContext";

// const UserContextProvider = ({children}) => {
//     const [user, setUser] = React.useState(null)
//     return(
//         <UserContext.Provider value={{user, setUser}}>
//         {children}
//         </UserContext.Provider>
//     )
// }

// export default UserContextProvider;