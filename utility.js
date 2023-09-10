function sumOfProducts(id){
    switch(id){
        case 'cart1':
            calculationEntry('K. Accessories');
            sumFunc(39.00);
            break;
        case 'cart2':
            calculationEntry('K. Accessories');
            sumFunc(25.00);
            break;
        case 'cart3':
            calculationEntry('Home Cooker');
            sumFunc(49.00);
            break;
        case 'cart4':
            calculationEntry('Sports Back Cap');
            sumFunc(49.00);
            break;
        case 'cart5':
            calculationEntry('Full Jersey Set');
            sumFunc(69.00);
            break;
        case 'cart6':
            calculationEntry('Sports Cates');
            sumFunc(159.00);
            break;
        case 'cart7':
            calculationEntry('Single Relax Chair');
            sumFunc(185.00);
            break;
        case 'cart8':
            calculationEntry('Children Play');
            sumFunc(299.00);
            break;
        case 'cart9':
            calculationEntry('Flexible Sofa');
            sumFunc(339.00);
            break;
        default:
            console.log('nothing');
    }
}

sum = 0;
function sumFunc(amount){
    sum += amount;
    const tPrice = document.getElementById('t-price');
    tPrice.innerText = sum.toFixed(2);

    const purchaseBtn = document.getElementById('purchase-btn');
    const tPriceTk = document.getElementById('t-price-tk');
    const discountBtn = document.getElementById('discount-btn');

    if(sum > 0){
        tPriceTk.innerText = 'TK';
        purchaseBtn.removeAttribute('disabled');
    }

    if(sum > 200){
        discountBtn.removeAttribute('disabled');
    }
}

function discount(){
    const inputField = document.getElementById('coupon-code');
    const inputValueText = inputField.value.toLowerCase();
    const discount = document.getElementById('discount');
    const fTotal = document.getElementById('f-total');

    const fTotalTk = document.getElementById('f-total-tk')
    const discountTk = document.getElementById('discount-tk')

    if(inputValueText === 'sell200'){
        const afterDiscount = sum*0.20
        discount.innerText = afterDiscount.toFixed(2);
        const fTotalAfterDiscount = sum*0.80
        fTotal.innerText = fTotalAfterDiscount.toFixed(2);

        fTotalTk.innerText = 'TK';
        discountTk.innerText = 'TK';
    }
    else{
        alert("This coupon code isn't valid")
        inputField.value = '';
    }
}

function calculationEntry(prodName){
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    const count = calculationEntry.childElementCount;
    p.classList.add('text-xl')
    p.classList.add('font-[500]')
    p.innerHTML = `${count+1}${'.'} ${prodName}`;
    calculationEntry.appendChild(p);
}
