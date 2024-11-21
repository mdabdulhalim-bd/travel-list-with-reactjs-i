
const User = ({user}) => {
    const {name, username, email} = user;
//    console.log(props)
    return (
        <div className="border border-danger card m-3 p-3 " style={{width:"18em"}}>
            <p>Name: {name}</p>
            <p>User Name: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;
