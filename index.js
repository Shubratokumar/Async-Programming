console.log("Before"); 
getUser(1, (user)=> {
    console.log("User", user);
    // get the repos
    getRepositories(user.userName, (repos)=>{
        console.log('Repos : ', repos);
    })
});
console.log("After"); 

// callback functions
function getUser ( id, callback ){
    setTimeout(() => {
        console.log("Reading a user info from database.");
        callback({id: id, userName: "shubrato"});
    }, 2000); 
}

function getRepositories (username, repo){
    setTimeout(() => {
        console.log("Getting repositories...")
        console.log("UserName : ", username)
        repo(['repo1', 'repo2', 'repo3'])
    }, 2000);
}