window.onload = function() {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var date1 = new Date("1/14/2021");
  var date2 = new Date(today);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var theDate = Math.ceil(timeDiff / (1000 * 3600 * 24));


  document.getElementById('dayCount').innerText = "Currently Out of Order. Jason is working on this right now. It has been " + theDate + " days since he started.";

};
