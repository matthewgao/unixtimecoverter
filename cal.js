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
      document.getElementById("result").innerHTML = "Not a unixtimestamp";
      return;
    }

    document.getElementById("result").innerHTML = date.toString();
    // alert(formattedTime);
}

// $('#btn_submit').click(function () {
//     convertDatetime();
// });

// console.log(document);
window.onload = function (){
    document.getElementById("btn_submit").onclick = function(){
        convertDatetime();
    };
};