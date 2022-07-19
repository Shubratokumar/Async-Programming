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
function getUser ( id ){
    return new Promise((resolve, reject)=>{
        // Kick off some async work
        setTimeout(() => {
            console.log("Reading a user info from database.");
            resolve({id: id, userName: "shubrato"});
        }, 2000);
    })
}

function getRepositories (username){
    return new Promise((resolve, reject)=>{
        // Kick off some async work
        setTimeout(() => {
            console.log("Getting repositories...")
            console.log("UserName : ", username)
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
   })
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        // Kick off some async work
        setTimeout(() => {
            console.log("Calling GitHub API...");
            resolve(["commit"])
        }, 2000);
    })
}