 /*This function basically verifies the otp entered if matched directs it to the pixel6 web page else it promts the user to 
    retry fro 3 times if the OTP oest match it directs the page to the 404 not found page of pixel6.*/

    function check(){
        var op = document.getElementById('user_otp').value;
        var generated_otp = document.getElementById('o').value;
        if (op == "" || op==' '){
          alert("Please Enter the OTP");
          //location.reload();
        }
       
        var t;
         // for(var k =0;k<3;k++){
  //var op = document.getElementById('user_otp').value;
          if(op == generated_otp){
              //alert("Succesful");
              location.replace("second.html");
              window.open("http://pixel6.co/");
              
          }else{
  
              var attempt = document.getElementById("attempt").value;
              
          while(true){
              //document.getElementById("attempt").value = attempt -1;
              if(attempt >0){
                  var op1 = prompt("OTP Retry and attempts left: "+attempt,"");
                  attempt = attempt-1;
                  if(op1 == " " || op1 ==""){
                    
                    //document.getElementById("attempt").value = attempt+1;
                    attempt = attempt+1;
                    alert("Retry attempts left: "+attempt);
                    continue;
                    
  
                  } else if(op1 == generated_otp){
                          location.replace("second.html");
                          window.open("http://pixel6.co/");
                          break;
                }
              }else if(attempt ==0){
                  location.replace("http://pixel6.co/error");
                  break;
              }
              
              document.getElementById("attempt").value = attempt -1;
          }
        }
  } 