function convertDatetime(){
    console.log("start");
    var t_str = document.getElementById("unix").value;
    console.log(t_str);
    var date
    if(t_str.length == 10){
      date = new Date(Number(t_str)*1000);
    }else if(t_str.length == 13){
      date = new Date(Number(t_str));
    }else{
      // alert("wrong length");
      document.getElementById("reesult").innerHTML = "wrong length";
      return;
    }

    var year = date.getFullYear();
    var mon = date.getMonth();
    var day = date.getDay();
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    var formattedTime = year +'-'+ mon +'-'+ day +' '+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    document.getElementById("reesult").innerHTML = formattedTime;
    // alert(formattedTime);
}

// $('#btn_submit').click(function () {
//     convertDatetime();
// });

// console.log(document);
window.onload = function (){
    // alert("hee");
    document.getElementById("btn_submit").onclick = function(){
        convertDatetime();
    };
};