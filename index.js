console.log("Before"); // sync , blocking 
setTimeout(() => {
    console.log("Reading a user info from database.");
    
}, 2000); // Async , non-blocking 
console.log("After"); // sync , blocking 