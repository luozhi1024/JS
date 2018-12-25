function MoreThanHalfNum_Solution(array)
{
    var b = 0;
    for(var a=0;a<=Math.max.apply(Math,array);a++){
        for(var i=0; i<array.length;i++){
            b++;
            if(b>(array.length)/2){
                return a;
                continue;
            }else{
                return 0;
                continue;
            }
        }
    }

}