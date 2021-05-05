
/* Answer 1 => */

function evenNumber(){

    let arr=[2,9,4,7,8];
    
    for(let i=0;i<arr.length;i++){
       
       if(arr[i]%2===0){
          console.log(' answer 1 =',arr[i]);
       }
    }
    }
    
    evenNumber();
    
    
    /* Answer 2 = > */
    
    function consecutive(){
    
    /* let arr = [0,0,1,1,0,0,0,1,0,0,1,1,1,0] */;
    let arr = [1,0,0,0,0,1,0,0,0,1];
    let count=0;
    let res=0;
    
    for(let i=0;i<arr.length;i++){
       
       if(arr[i]===0){
        count=0;   
       }else{
         count++;
         res=Math.max(count,res);
       }
       
    }
    
    console.log('answer 2 = ',res);
    
      
    }
    
    consecutive();
    
    
    /* Answer 3 =>  */
    
    function answer3(){
    
    let arr=[0,1,2,3,4,5,6,7,7,8,9,10];
    let element;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
         element=arr[i];
        }
     }
     
     console.log('answer 3 = '	,element);
    
    
    }
    
    answer3();
    
    // Answer 4 =>
    function validate(){
     
      let firstname = document.getElementById('firstname');
     let ifcheck = document.getElementById('checkme').checked;
      
      if(ifcheck==false || firstname===""){
       alert('Please Fill the Blank entries');
      }
      if(firstname=="" || ifcheck===true){
        alert('Please Fill the Blank entries');   
    }
    }
    
    
    
    

// answer 7
function ajaxcall() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("para").innerHTML =
        this.responseText;
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "www.example.com/api/get/1", true);
    xhttp.send();
}


function answer8(){
    var objarr = [
        {"id" : 4, "name" : "abc"},
        {"id" : 10, "name" : "ab2"},
        {"id" : 5, "name" : "abc3"},
        {"id" : 6, "name" : "abc5"},
    ]
       
      objarr.sort(function (a,b) {
          return a.id - b.id;
       });
       console.log(objarr);
}
  
answer8();