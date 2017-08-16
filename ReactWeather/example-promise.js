// function getTempCallback(loaction, callback){
//     callback(undefined, 78);
//     callback('City not found');
// }

// getTempCallback('Tel Aviv', function(err, temp){
//     if(err){
//         console.log('error', err);
//     } else {
//         console.log('success', temp);
//     }
// });


// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve(79);
//             reject('City not found');
//         }, 1000)
//     });
// }

// getTempPromise('Tel Aviv').then(function(temp){
//     console.log('promise success', temp);
// }, function(err){
//     console.log('promise erro', err);
// });

//Challenge Area
function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number') resolve(a + b);
        else reject('One of the arguments is no a number');
    });
}

addPromise(2, 90).then(function(data){
    console.log('Promise success', data);
}, function(err){
    console.log('Promise error', err);
});