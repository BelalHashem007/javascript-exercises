const fibonacci = function(num) {
    let fibArr= [1];
    let temp1 = 0;
    let temp2 = fibArr[0];
    const newNum = Number(num);
    if (num <0)
        return 'OOPS';
    for (i=1; i<newNum; i++)
    {
      fibArr[i]= temp1+temp2;
      temp1 = temp2;
      temp2 = fibArr[i];
    }
    return num==0 ? 0 : fibArr[newNum-1];
};

// Do not edit below this line
module.exports = fibonacci;
