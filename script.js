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

function smazat(){
  document.getElementById("in1").className = "animace";
  setTimeout(mazani, 5000);
}
function mazani(){
  let mazanaVec = document.getElementById("in1");
  mazanaVec.remove();
}
