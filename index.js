let userExist = false;
//======================================================================
//this part mimics the fetch method which returns a promise
const myPromise = new Promise((resolve, reject) => {
  //some code that usually takes some time

  if (userExist) {
    resolve("hi");
  } else {
    reject("bye");
  }
});
//=====================================================================
// myPromise.then(
//   (result) => console.log(result),
//   (err) => {
//     return console.log(err);
//   }
// ); // not very common

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
//====================================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// example of successful/not successful login with a delay

let loginSuccessful;
//======================================================================
//this part mimics the fetch method which returns a promise with a delay
const loginPromise = new Promise((resolve, reject) => {
  //some code that usually takes some time

  setTimeout(() => {
    loginSuccessful = false;

    if (loginSuccessful) {
      resolve("logged in successfully");
    } else {
      reject("incorrect credentials");
    }
  }, 3000);
});
//=====================================================================
// loginPromise.then(
//   (result) => console.log(result),
//   (err) => {
//     return console.log(err);
//   }
// ); // not very common

loginPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

console.log("hello world");

//============================================================
//   setTimeout(()=>console.log('test hi'), 5000 )
//   setInterval(()=>console.log('test interval'), 1000 )
