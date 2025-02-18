/*function promiseEg(){
    return new Promise((resolve,reject)=>{
        resolve("The promise is resolved")
    })
}

console.log(promiseEg());
*/

/*function promiseEg1(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) resolve("The promise is resolved");
      else reject("The promise is rejected due to value is unmet");
    }, 3000);
  });
}
promiseEg1(false)
  .then((message) => {
    console.log(message);
  }) //when catch is not written , error: UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "The promise is rejected due to value is unmet".
  .catch((error) => {
    console.log(error);
  });
  */

//Location Finder
//1.Promise(locFound,locNotFound)
//2.Chennai,2000

function locationFinder(loc, time) {
  var location = new Promise((locFound, locNotFound) => {
    setTimeout(() => {
      if (isLocationFound(loc, time)) {
        locFound(loc);
      } else {
        locNotFound(loc+" Not found");
      }
    }, time);
  });
  location.then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

isLocationFound = (loc, time) => {
  location = "Chennai";
  t = 3000;
  if (loc === location && t <= time) {
    return true;
  } else {
    return false;
  }
};

locationFinder("Chennai", 2000);
