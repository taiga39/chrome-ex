   function set2fig(num) {
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}

   var nowTime = new Date();
   nowTime.setFullYear(2023 - nowTime.getFullYear());
   nowTime.setMonth(5 - nowTime.getMonth() -1 );
   nowTime.setDate(12 - nowTime.getDate() );
   var nowyear = nowTime.getFullYear();
   var nowmonth = nowTime.getMonth();
   var nowday = nowTime.getDate();

   var date = `${nowyear}` +"year"+ `${nowmonth}` +"month"+`${nowday}`+"day";
   document.getElementById("sakemetor").innerHTML = date;


