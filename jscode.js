// document.getElementById('phone-increase').addEventListener('click', function(){
//     const phoneNewCount = parseInt(document.getElementById('phone-count').value);
//     const totalCount = phoneNewCount + 1;
//     document.getElementById('phone-count').value = totalCount;
//     document.getElementById('phone-price').innerText = totalCount * 1219;
// })

// document.getElementById('phone-decrease').addEventListener('click', function(){
//     const phoneNewCount = parseInt(document.getElementById('phone-count').value);
//     const totalCount = phoneNewCount - 1;
//     document.getElementById('phone-count').value = totalCount;
//     document.getElementById('phone-price').innerText = totalCount * 1219;
// })

document.getElementById('phone-increase').addEventListener('click', function(){
    productCalculations(true, 'phone');
})

document.getElementById('phone-decrease').addEventListener('click', function(){
    productCalculations(false, 'phone');
})

document.getElementById('case-increase').addEventListener('click', function(){
    productCalculations(true, 'case');
})

document.getElementById('case-decrease').addEventListener('click', function(){
    productCalculations(false, 'case');
})

function productCalculations(isIncease, product) {
    const phoneNewCount = parseInt(document.getElementById(product + '-count').value);
    let totalCount = phoneNewCount;
    if (isIncease == true){
        totalCount = phoneNewCount + 1;
    }
    if(isIncease == false && phoneNewCount>0){
        totalCount = phoneNewCount - 1;
    }
    document.getElementById(product + '-count').value = totalCount;

    if(product == 'phone'){
      document.getElementById(product + '-price').innerText = totalCount * 1219;
    }
    if(product == 'case'){
        document.getElementById(product + '-price').innerText = totalCount * 59;
    }
    CalculateTotal();
}

function CalculateTotal(){
    const phnInput = parseInt(document.getElementById('phone-count').value);
    const caseInput = parseInt(document.getElementById('case-count').value);
    const subTotal = phnInput*1219 + caseInput*59;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = (subTotal * 0.1).toFixed(2);
    document.getElementById('grandTotal').innerText = (subTotal + subTotal * 0.1).toFixed(2);
}
