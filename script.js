$("document").ready(function(){
    var value;
    
    $("#fibClick").click(function(){
        var final;
        
        var userFib = prompt("How about you give me a number and I'll tell you which Fibonacci number is at that index?");
            console.log("The user chose " + userFib);
        
        function fib(num){
            if(num === 0 || num === 1){
                console.log("Primatives are being added - Woo binary!");
                return num;
                //alert("The number at index " + userFib + "is " + ??? )
            }
            else if(num > 1){
                final = (fib(num-1) + fib(num-2));
                    //console.log("Great things are happening");
                    console.log(final);
                return final;
                
                //$("#answerDiv").append("Cool!");
            }
        }  
        fib(userFib);
    });


//Work in progress... 
    $("#fibArray").click(function(){
        fibby = [];
        function fibonacci(num) {
          if (num <= 1){ 
              return 1;
          }
          else if(num > 1){
            console.log(fibby);
            $("#answerDiv").append("Well something happened...");
          return fibby;
          }
        }
        fibonacci(7);
    });



/* Work in progress...    
    $("#fibArray").click(function(){
       var fibbyFinal = [];
       function fibby(num){
           // base case below
           if(num === 0 || num === 1){
               return num;
           }
           // fibby will return an array up until the 10th index.
            else if(num>1){
                fibbyFinal.push(fibby(num-1) + fibby(num-2));
                return fibbyFinal;
            }
           
       }
       fibby(10);
    });
    
*/

    
    //API stuff from eBay class 2/8
    $("#go").click(function(){
        value = $("#userInput").val();
        console.log("The user input is " + value);
        
       var thisTemp; 
        $.get(
     
     "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&units=imperial&appid=4a92e633bcc35f684c92a062bf2cfecb",
     function(response) {
        $("#temp").html("Temp for " + value + ": " + response.main.temp);
        $("#hum").html("Humidity for " + value + ": " + response.main.humidity);
        $("#wind").html("Windspeed for " + value + ": " + response.wind.speed);
        console.log("This is working");
       thisTemp = response.main.temp;
           if(thisTemp >= 70){
      $("body").css("background-image", "url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/421f0c16071075.562a500e6ddd4.gif)");
       }
      else if(thisTemp > 45){
        console.log("the temp is below 70 but above 45");
        $("body").css("background-image", "url(http://www.clker.com/cliparts/X/t/c/y/q/f/red-long-sleeve-shirt-md.png)");
       }
      else{
                console.log("the temp is below 45");
        $("body").css("background-image", "url(http://images.shape.mdpcdn.com/sites/shape.com/files/u431/4snow-linus.gif)");
      } 
     
     });
      
 


     
    });      
   
        
        
  
     
      // temp
     
     
     
    //  // humidity
    // function(response) {
    //  console.log(response);
    //   $("#hum").append(":" + main.humidity);
    //   };
     
     
    //   // wind speed
    // function(response) {
    //      console.log(response);
    //      $("#wind").append(":" + wind.speed);
    //   });
     
     
    //   // Image of Lat and Lon
    //  $("button2").click(function(){
    //      $("#div").css("src","https://www.fema.gov/sites/default/files/orig/graphics/fhm/st_usmap.jpg");
    //      //$("#div").css("src","https://api.mapbox.com/v4/mapbox.dark/-76.9,38.9,10/600x600.png?access_token=pk.eyJ1IjoiZG9kZ2VyNDg3IiwiYSI6ImNpeXcxY2xraDAwZHUyd21wam00NWc5NXIifQ.VNP3UdlAUjSJVz3_FrBkEQ");
  
});
