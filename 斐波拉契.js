function Fibonacci(n)
{
    if(n == 0){
        return 0;
    }else if( n == 1){
        return  1;
    }else if(n ==2){
        return 1;
    }else if(n>2){
        var x =1;
        var y= 1;
        var sum =0;
        for(var i = 2;i<=n;i++){
            sum = x+y;
            y = x;
            x = sum;
        }
        return sum-1;
    }
}