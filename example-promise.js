// not using promises: this is bad because we are calling callback twice
function getTempCallback(location, callback){
  callback(undefined, 78);
  callback('City not found');
}

// this is also not desirable, since we need to manually check error and success cases
getTempCallback('Philadelphia', function(err, temp){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', temp);
  }
});

/* Better way to do the above is to use promises
 * Promises can only resolve OR reject once, thus not allowing either one
 * to be called multiple times nor both being called.
 */
function getTempPromise(location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

// promises can only be completed once
getTempPromise('Philadelphia').then(function(temp){
  // success case
  console.log('Promise success', temp);
}, function(err){
  // error case
  console.log('Promise error', err);
});

// Challenge Question:
// Write function addPromise, using a promise, to add two inputs and return
// success only when both are numbers, and error otherwise.
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject("Arguments must be numbers");
    }
  });
}

addPromise(1,2).then(function(sum){
  console.log('Promise success', sum);
}, function(err){
  console.log('Promise error', err);
});

addPromise(1,'a').then(function(sum){
  console.log('Promise success', sum);
}, function(err){
  console.log('Promise error', err);
});
