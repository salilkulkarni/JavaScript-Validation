/* This function is executed when the submit button is clicked. It calls the fucntion for validation of mobile number,
        email, and name. Here the otp is generated as well and sent to the next page.*/
        function sayHello() {

            var result ="";
            result += validate_name();
            result += validateEmail();
            result += valiation_tel();

            //condition for OTP generation.
            if (result=="") {
                
                var otp="";
                var num ='1234567890';
                for (var i=0;i<4;i++){
                    otp += num[Math.floor(Math.random()*10)];
                   
                }

                localStorage.setItem('onetp',otp);
                location.replace("otp_Page.html");
                return true;
            }
            else{
                alert("validation result:\t"+result);
                return false;
            }
            


        
        }

        /*validates name feild fro having atleast two letters, if error is found it alert's an error message
        Also it also locally stores the  first name to send it to the next form.*/
        function validate_name(){
            var name = document.getElementsByName("name")[0].value;
            //document.write(name);
            
            var ff = name.split(" ");
            var second ;
            var first = ff[0].length ;
            
            if(ff.length != 2){
                //alert("error in the name(should be atleast 2 words with min 4 letters)");
                //location.reload();
                return"error in the name(should be atleast 2 words with min 4 letters)     ";
                
                
            }else{
                second = ff[1].length;
            }
            
            localStorage.setItem('textvalue',ff[0]);
           if (first <4 ){
            return "error in the name(should be atleast 2 words with min 4 letters)     ";
           }else if(second <4){
            return "error in the name(should be atleast 2 words with min 4 letters)     ";
           }
           return "";
                  

            //if(ff[0].length !=0  && ff[1].length !=0 && ff[0].length>=4 && ff[1].length >=4 )

        }
        
        //Here the validatio of the Email is checked
        function validateEmail() {
            var email = document.getElementsByName("email")[0].value;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
                
                    return "";
                       
            return 'error in the email      ';
        }	

         /*Here the Telephone number is checked for only 10 numbers, as well as for the numbers are valid and for a specified company
        it also stores the number locally for sending it to the next page */
        function valiation_tel(){
            var numb = document.getElementsByName('no')[0].value;
            //alert(numb)
            //var fff=[];
            var fff = numb.split("");

            //localStorage.setItem('numbb',numb);
            var three = fff[1]+fff[2]+fff[3];
            //alert(three);
            //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            //var phoneno = /^\d{10}$/;
            ///^\d{10}$/.test(numb) 
            if(three <=621 || three ==800 || three =="" || numb=="" || numb=="()--")
                  return 'error in number     ';
            return "";
       
    }
