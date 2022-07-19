console.log("Before"); 
getUser(1, (user)=> {
    getRepositories(user.userName, (repos)=>{
        getCommits(repos, (commits)=>{
            // callback hell problem
        })
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

function getRepositories (username, callback){
    setTimeout(() => {
        console.log("Getting repositories...")
        console.log("UserName : ", username)
        callback(['repo1', 'repo2', 'repo3'])
    }, 2000);
}

function getCommits(repo, callback){

}