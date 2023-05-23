function calc(){
      let bmi;

      let result = document.getElementById("bmi");

      let height = parseInt(document.getElementById("height").value);
      let weight = parseInt(document.getElementById("weight").value);
  
      let text = document.getElementById("text"),
      bmI = (weight / Math.pow( (height/100), 2 )).toFixed(1);
      result.innerHTML = bmi;
  
  
      if(bmi < 18.5){
          result.innerHTML = bmI;
          text.innerHTML = 'underweight';
      }
  
      else if( bmI >= 18.5 && bmI <= 24.9 ){
          result.innerHTML = bmI;
          text.innerHTML = 'healthy';
      }
  
    
      else if( bmI >= 25 && bmI <= 29.9 ){
          result.innerHTML = bmI;
          text.innerHTML = 'overweight';
      }
  
      else{
         result.innerHTML = bmI;
         text.innerHTML = 'obese';
      }
    }
    //nother function
    function clearC() {
        document.getElementById("result").value = "";
        document.getElementById("height").value = "";
        document.getElementById("weight").value = "";
        document.getElementById("text").value = "";
    }