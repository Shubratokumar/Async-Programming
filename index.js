console.log("Before"); 
const user = getUser(1);
console.log(user);
console.log("After"); 

function getUser ( id ){
    setTimeout(() => {
        console.log("Reading a user info from database.");
        return {id: id, userName: "shubrato"}
    }, 2000); 
    return id;
}