function NumberOf1(n){
    var a = n.tostring(2);
    var count = 0;
    while(a!= 0){
        count++;
        a = a & (a - 1);
    }
    return count;
}

