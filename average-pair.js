// add whatever parameters you deem necessary
function averagePair(arr, val) {
    let left = 0;
    let right = arr.length -1;
    while(left <right){
        let average = (arr[left]+ arr[right])/2;
        if(average=== val){
            return true;
        }else if(average< val){
            left ++;
        }else{
            right --;
        }
    }
    return false;
    
}

module.exports= averagePair;