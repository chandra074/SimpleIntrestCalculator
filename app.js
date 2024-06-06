
document.addEventListener('DOMContentLoaded', function(){
    const venky = document.getElementById("btn")
    venky.addEventListener('click', function(event){
       event.preventDefault()
       let p = parseFloat(document.getElementById('principle').value);
       let t = parseFloat(document.getElementById('years').value);
       let r = parseFloat(document.getElementById('intrest').value);
   
       
       if(p>0 && t>0 && r>0)
       {
        let result = getSimpleIntrest(p, t, r);
        let amount = p + result;
        document.getElementById('resultDiv').classList.add('show')
        document.getElementById('p').innerHTML="Rs. " +p
        document.getElementById('t').innerHTML=t +"Months"
        document.getElementById('r').innerHTML=r+"%"
        document.getElementById('s').innerHTML="Rs. "+result
        document.getElementById('a').innerHTML="Rs. "+amount

        p = parseFloat(document.getElementById('principle').value='')
        t = parseFloat(document.getElementById('years').value='')
        r = parseFloat(document.getElementById('intrest').value='')
       }
       else{
        alert('Please fill in blankets')
       }
       
       
    });

    function getSimpleIntrest(p, t, r){
        let si = (p * t * r) / 100;
        return si;
    }
})




