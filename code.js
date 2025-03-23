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
    if (a.length == 0){
        return 0;
    }
    if (a.length == 1){
        return 1;
    }

    var sorted = false;
    var index = 0;
    var allpermutations = getAllPermutations(a);

    while (!sorted){
        var temp = allpermutations[index];
        sorted = true;
        
        for (let i = 0; i < temp.length - 1; i++){
            if (!(temp[i] <= temp[i + 1])){
                sorted = false;
                break;
            }
        }

        if (sorted) {
            for (let i = 0; i < a.length; i++) {
                a[i] = temp[i]; // Update `a` to reflect the sorted permutation
            }
        }

        index++;
    }
    return index;
}