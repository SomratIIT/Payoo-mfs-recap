document.getElementById('btn-add-money').addEventListener('click',function(event){

    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value ;
    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber =document.getElementById('input-pin-number').value ;

    


if(pinNumber==='1')
{
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber =parseFloat(balance);
   
    const newBalance = balanceNumber + addMoneyNumber ;
   
    console.log(addMoneyNumber,pinNumber,balanceNumber,newBalance);
}
else{
    alert('Get Out');
}
})