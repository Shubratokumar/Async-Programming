console.log("Before"); 
getUser(1, getRepositories);
console.log("After"); 

// Named Function
function getRepositories (user){
    getRepositories(user.userName, getCommits)
}
function getCommits(repos) {
    getCommits(repos, displayCommits)
}
function displayCommits(commits){
    console.log(commits)
}


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