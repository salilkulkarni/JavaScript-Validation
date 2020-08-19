  
                    /*thi fucntion gets activated oninput of the number to display it in a specific format as well as to change the 
                    image according to the company. Here the state and the company of the moile number is also shown.*/
                    function myfunction(){
                        //var numb = [0,0,0,0,0,0,0,0,0,0];

                        //var numb= document.getElementById('no').value
                         var numb = document.getElementsByName('no')[0].value;
                         //console.log(numb);
                        localStorage.setItem('numbb',numb);
                        //var s ="("+numb[0]+numb[1]+numb[2]+")"+"-"+numb[3]+numb[4]+numb[5]+"-"+numb[6]+numb[7]+numb[8]+numb[9];
                        //document.getElementById('txt1').value =s;
                       // nn = numb[0]+numb[1]+numb[2];
                        
                        //nn1 = numb[3]+numb[4]+numb[5];

                        var gg = numb.split("");
                        var nn = gg[1]+gg[2]+gg[3]; 
                        var nn1 = gg[6]+gg[7]+gg[8];


                       
                        company = get_company(nn);
                        state = get_state(nn1);
                        
                        

                        
                            if(company == 'Reliance Jio'){
                                document.getElementById('imgid').src='images/jio.png';
                            }else if(company=='Idea'){
                                document.getElementById('imgid').src='images/idea.png';
                            }else if (company=='Vodafone'){
                                document.getElementById('imgid').src='images/voda.png';
                            }

                            //document.getElementById('txt2').innerHTML=s +" " +company+','+state;
                            //document.getElementById('txt1').value = s;
                            document.getElementById("txt2").innerHTML = company+','+state;
                        }
                        
                    

                        function get_company(nn){
                            
                        if (nn>= 621 && nn<= 799){
                            return 'Reliance Jio';
                        }else if(nn>=801 && nn<=920){
                            return 'Idea';
                        }else if(nn >=921 && nn<=999){
                             return 'Vodafone';
                        }
                        }   

                        function get_state(nn1){
                            if (nn1 >= '000' && nn1<='027'){
                                return 'Andhra Pradesh';
                        }else if (nn1>= '028' && nn1 <="055"){
                            return 'Arunachaal Pradesh';
                        }else if (nn1>= '056' && nn1 <="082"){
                            return 'Assam';
                        }else if (nn1>= '083' && nn1 <="109"){
                            return 'Bihar';
                        }else if (nn1>= '110' && nn1 <="136"){
                            return 'Chattisgarh';
                        }else if (nn1>= '137' && nn1 <="164"){
                            return 'Goa';
                        }else if (nn1>= '165' && nn1 <="192"){
                            return 'Gujrat';
                        }else if (nn1>= '193' && nn1 <="220"){
                            return 'Haryana';
                        }else if (nn1>= '221' && nn1 <="248"){
                            return 'Himachal Pradesh';
                        }else if (nn1>= '249' && nn1 <="276"){
                            return 'Jharkhand';
                        }else if (nn1>= '277' && nn1 <="304"){
                            return 'Karnataka';
                        }else if (nn1>= '305' && nn1 <="332"){
                            return 'Kerela';
                        }else if (nn1>= '333' && nn1 <="360"){
                            return 'Madhya Pradesh';
                        }else if (nn1>= '361' && nn1 <="388"){
                            return 'Maharashtra';
                        }else if (nn1>= '389' && nn1 <="416"){
                            return 'Manipur';
                        }else if (nn1>= '417' && nn1 <="444"){
                            return 'Meghalaya';
                        }else if (nn1>= '445' && nn1 <="472"){
                            return 'Mizoram';
                        }else if (nn1>= '473' && nn1 <="500"){
                            return 'Nagaland';
                        }else if (nn1>= '501' && nn1 <="528"){
                            return 'Odhisa';
                        }else if (nn1>= '529' && nn1 <="556"){
                            return 'Punjab';
                        }else if (nn1>= '557' && nn1 <="584"){
                            return 'Rajasthan';
                        }else if (nn1>= "585" && nn1 <="612"){
                            return 'Sikkim';
                        }else if (nn1>= '613' && nn1 <="640"){
                            return 'Tamil Nadu';
                        }else if (nn1>= '641' && nn1 <="668"){
                            return 'Telangana';
                        }else if (nn1>= '669' && nn1 <="696"){
                            return 'Tripura';
                        }else if (nn1>= '697' && nn1 <="724"){
                            return 'Uttarakhand';
                        }else if (nn1>= '725' && nn1 <="752"){
                            return 'Uttar Pradesh';
                        }else if (nn1>= '753' && nn1 <="780"){
                            return 'West Bengal';
                        }else if (nn1>= '781' && nn1 <="808"){
                            return 'Andaman and Nicobar';
                        }else if (nn1>= '809' && nn1 <="836"){
                            return 'Chandigarh';
                        }else if (nn1>= '837' && nn1 <="864"){
                            return 'Dadra Nagar Haveli , Daman and Diu';
                        }else if (nn1>= '865' && nn1 <="892"){
                            return 'Delhi';
                        }else if (nn1>= '893' && nn1 <="920"){
                            return 'Jammu & Kashmir';
                        }else if (nn1>= '921' && nn1 <="948"){
                            return 'Ladhak';
                        }else if (nn1>= '949' && nn1 <="976"){
                            return 'Lakshwadeep';
                        }else if (nn1>= '977' && nn1 <="999"){
                            return 'Punducherry';
                        }
                    }
                        
                        
                    
                                         