function reOrderArray(array)
{
    var  arr = array.splice(0,array.length)；
    for(var i = 0;i<=array.length;i++){
        if(array[i]%2==1){
            arr.unshift(i);
        }
    }
    for(var i = 0;i<=array.length;i++){
        if(array[i]%2==0){
            arr.push(i);
        }
    }
    return arr;
}
