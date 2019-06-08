function makeItBig(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i] = "Big";
        }
    }
    return arr;
}

function printLowReturnHigh(arr){
    var low=arr[0];
    var high=arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>high){
            high=arr[i];
        }if(arr[i]<low){
            low=arr[i];
        }
    }
    console.log(low);
    return high;
}

function printOneReturnAnother(arr){
    console.log(arr[arr.length-1]);
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            return arr[i];
        }

    }
}

function doubleVision(arr){
    var newArr=[];
       for (var i=0; i<arr.length; i++){
         newArr.push(arr[i]*2);
       }
     return newArr;
     }


function countPositives(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            count++;
        }
    }
arr[arr.length-1] = count;
return arr;
}

function evensAndOdds(arr){
    var odds = 0;
    var evens = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            evens++;
            odds=0;
        }
            if(evens=3){
                console.log("Even more so!")
            }
        if(arr[i] % 2 != 0){
            odds++;
            evens=0;
        }
            if(odds=3){
                console.log("That's odd!")
            }
    }
}

function IncrementTheSeconds (arr){
       for (var i=0; i<arr.length-1;i++){
         if (i % 2 != 0){
           arr[i]=arr[i+1]+1;
          
         }console.log(arr[i]);
       }
       return arr;
     }

function previousLengths (arr){
    for (var i=arr.length-1; i>0; i--){
        arr[i]=arr[i-1].length;
     
    }
    return arr;
}

function addSevenToMost(arr){
    var newArr=[];
    for(var i=1; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}

function reverseArray(arr){
    var index=arr.length-1;
    for(var i=0; i<arr.length/2; i++){
        var temp=arr[index-i];
        arr[index-i]=arr[i];
        arr[i]=temp;
    }
    return arr;
}

function negativeArray(arr){
    var newArr=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]=arr[i]-(arr[i]*2);
            newArr.push(arr[i]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function alwaysHungry(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        var current = arr[i].ltoLowerCase();
        if(current == "food"){
            count++;
            console.log("yummy");
        }
        if(count == 0){
            console.log("I'm Hungry");
        }
    }
}

function swapCenter(arr){
    var index=arr.length-1;
    for(var i=0; i<arr.length/2; i+=2){
        var temp=arr[(index)-i];
        arr[(index)-i]=arr[i];
        arr[i]=temp;
    }
    return arr;
}

function scaleArray(arr, num){
    for(var i=0; i<arr.length; i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}