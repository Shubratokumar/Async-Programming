
// const p = Promise.resolve({id: 1});
// p.then(result => console.log(result))
const p = Promise.reject(new Error('Resons for rejection...'));
p.catch(err => console.log(err))