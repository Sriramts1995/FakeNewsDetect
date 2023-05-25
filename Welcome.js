function login-form-submit()
{
  var farmerID=document.getElementById("unames").value;
  localStorage.setItem("unames", farmerID);
  return false;
}
