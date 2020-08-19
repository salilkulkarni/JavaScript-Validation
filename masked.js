
/* The myfucntion1() is a maseked function which works on keypress event and is used to write the mobile number in a specific mask
we define a mask and as the user enters the number is substitues '_' in mask with the numbers
the validate_init function is for the validating the number entered is digit only.
*/



function validate(myEvento) {
    if ((myEvento.charCode >= 48 && myEvento.charCode <= 57) || myEvento.keyCode == 9 || myEvento.keyCode == 10 || myEvento.keyCode == 13 || myEvento.keyCode == 8 || myEvento.keyCode == 116 || myEvento.keyCode == 46 || (myEvento.keyCode <= 40 && myEvento.keyCode >= 37)) {
            flag = true;
    } else {
            flag = false;
        }
             return flag;
    }
function myfunction1(){

var mask = "(___)-___-____";
var rawd = document.getElementById("no");
var myText="";
var myNumber = [];
var myOP = "";
var lastpos = 1;
myText = rawd.value;
//getting the numbers
for (var i=0;i<myText.length;i++){
    if(!isNaN(myText.charAt(i))&& myText.charAt(i) != " " ){
        myNumber.push(myText.charAt(i));
    }
}
//f = myNumber[1]+mynumber[2]+mynumber[3];
// console.log(f);

//write over to the mask
for (var j=0;j <mask.length;j++){
    if(mask.charAt(j)=='_'){ // Replace this Digit
        if(myNumber.length ==0)
            myOp = myOP + mask.charAt(j);
            else{
                    myOP =myOP + myNumber.shift();
                    lastpos = j+1;
                }
    } else{
            myOP = myOP+mask.charAt(j); 
        }
}
document.getElementById("no").value=myOP;
document.getElementById("no").setSelectionRange(lastpos,lastpos);
}
document.getElementById("no").onkeypress = validate;
document.getElementById("no").onkeyup = myfunction1;
