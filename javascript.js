function conputation(){
  let dosu = document.querySelectorAll(".c");
  let oV = document.querySelectorAll(".otherV");
  
  let dosuu = [5,15,25,35,45,55,65,75,85,95];
  let deviation = 0;  // 偏差の2乗を足したもの
  let average = 0;     // 平均
  let stdDviation = 0; // 標準偏差
  let devilationV = 0; // 偏差値


  let dosuTotal = 0;   // 人数合計
  for(let i=0; i<10; i++){
    dosuTotal += Number(dosu[i].value);
  }
  dosuTotal+=1; // 自分が人数として入っていないので+1


  let total = 0;
  for(let i=0; i<10; i++){
    total += Number(dosu[i].value) * dosuu[i];
  }
  total += Number(dosu[10].value);
  oV[0].textContent = total;


  if(dosu[11].value == ""){ 

    average = total / dosuTotal;
    dosu[11].value = average.toFixed(1);

  }else{

    average = Number(dosu[11].value);

  }


  for(let i=0; i<10; i++){
    deviation += Number(dosu[i].value) * (( dosuu[i] - average ) ** 2); //偏差の2乗を全て求めて足す
    console.log(`${Number(dosu[i].value)} * (( ${dosuu[i]} - ${average} ) ** 2) = ${deviation}`);
  }
  deviation += ( Number(dosu[10].value) - average ) ** 2;


  stdDviation = Math.sqrt( deviation / dosuTotal );
  oV[1].textContent = stdDviation.toFixed(1);

  devilationV = ((( dosu[10].value - average ) / stdDviation) * 10 ) + 50 ;
  oV[2].textContent = devilationV.toFixed(1);
}