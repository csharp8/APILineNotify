function SendNotify(token,message){
    var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
myHeaders.append('Authorization', 'Bearer ' + token);
var formdata = new FormData();
formdata.append('message', message);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};
fetch('https://notify-api.line.me/api/notify', requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
