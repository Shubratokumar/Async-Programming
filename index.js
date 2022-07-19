console.log("Before"); 
// getUser(1, getRepositories);
console.log("After"); 


// Consuming promises
/* getUser(1)
 .then(user => getRepositories(user.userName))
 .then(repos => getCommits(repos[0]))
 .then(commits => console.log('Commits', commits))
 .catch(err => console.log("Error", err.message)) */


// Async and Await approach
(async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err){
        console.log("Error", err.message);
    }
})()

// Named Function
/* function getRepositories (user){
    getRepositories(user.userName, getCommits)
}
function getCommits(repos) {
    getCommits(repos, displayCommits)
}
function displayCommits(commits){
    console.log(commits)
} */


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
            // resolve(['repo1', 'repo2', 'repo3'])
            reject(new Error("Could not get the repos now."))
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