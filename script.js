function univerzalni(smile)
{
    //document.getElementById("emoji").innerHTML = smile;
    document.getElementById("rada").innerHTML += " " + smile;

}



function pridat()
{
    let text = document.getElementById("vstup").value;
    
    

    if (text.length>0) 
        {   
            univerzalni(text);
            alert("přidali jste vlastní text: "+text);
        } 
        else 
        {
            alert("není co přidat!!!");
        }
}
function odstranit() {
  let id = null;
  const ctverec = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 2500) {
      clearInterval(id);
    } else {
      pos++;
      ctverec.style.left = pos + "px"; 
    }
  }
}