document.getElementById(`submit`).addEventListener(`click`, function(){
    const myArray = []
    myArray.push(document.getElementById(`first`).value)
    myArray.push(document.getElementById(`second`).value)
    myArray.push(document.getElementById(`third`).value)
    myArray.push(document.getElementById(`fourth`).value)
    myArray.push(document.getElementById(`fifth`).value)
    for (i=0;i<5;i++){
          console.log(myArray[i]);
        if(i==0){
            document.getElementById(`firstOut`).innerHTML = myArray[i];
        }
        if(i==1){
            document.getElementById(`secondOut`).innerHTML = myArray[i];
        }
        if(i==2){
            document.getElementById(`thirdOut`).innerHTML = myArray[i];
        }
        if(i==3){
            document.getElementById(`fourthOut`).innerHTML = myArray[i];
        }
        if(i==4){
            document.getElementById(`fifthOut`).innerHTML = myArray[i];
        }
    }
})


