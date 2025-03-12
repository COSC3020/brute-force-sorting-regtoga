function getAllPermutations(arr) {
    var results = [];
  
    if (arr.length == 0) {
        //basecase
        results.push([]);
        return results;
    }
  
    for (let i = 0; i < arr.length; i++) {
        var current = arr[i];
        var remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        //recursivly call this function to get the smaller permutations
        var subPermutations = getAllPermutations(remaining);
    
        for (let j = 0; j < subPermutations.length; j++) {
            //combine the previous permutations with the next variable
            results.push([current].concat(subPermutations[j]));
        }
    }
    return results;
  }

function permutationSort(a) {
    if (a.length < 2){
        return a;
    }

    var sorted = false;
    var index = 0;
    //get all permutations
    var allpermutations = getAllPermutations(a);

    while (!sorted){
        var temp = allpermutations[index];
        //check if its sorted yet...
        sorted = true;
        for (var i = 1; i < temp.length; i++){
            if (!(temp[i-1] <= temp[i])){
                sorted = false;
            }
        }

        index++;
    }
    console.log(index);
    return index;
}

//var something = permutationSort([1,0]);
//console.log(something);
//var somethingelse = [0, 0];
//console.log(JSON.stringify(something) === JSON.stringify(somethingelse));