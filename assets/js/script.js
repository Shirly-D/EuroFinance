var form = document.querySelector('.form');
var fname = document.querySelector('.first');
var lname = document.querySelector('.last');
var position = document.querySelector('.position');
var company = document.querySelector('.company');
var compType = document.querySelector('.comp-type');
var country = document.querySelector('.country');
var workEmail = document.querySelector('.work-email');
var checkYes = document.querySelector('.yes');
var checkNo = document.querySelector('.no');
var nameLength = /^[A-Za-z. ]{3,30}$/;

form.addEventListener('submit', function(e){
    e.preventDefault();
    inputValue();
})

function inputValue() {
    if(!nameLength.test(fname.value)) {
        errorMsg(fname, '*This field is required');
    } else {
        successMsg(fname);
    }
    if(!nameLength.test(lname.value)) {
        errorMsg(lname, '*This field is required');
    } else {
        successMsg(lname);
    }
    if(!nameLength.test(position.value)) {
        errorMsg(position, '*This field is required');
    } else {
        successMsg(position);
    }
    if(!nameLength.test(company.value)) {
        errorMsg(company, '*This field is required');
    } else {
        successMsg(company);
    }
    if(!nameLength.test(compType.value)) {
        errorMsg(compType, '*This field is required');
    } else {
        successMsg(compType);
    }
    if(!nameLength.test(country.value)) {
        errorMsg(country, '*This field is required');
    } else {
        successMsg(country);
    }
    if(!nameLength.test(workEmail.value)) {
        errorMsg(workEmail, '*This field is required');
    } else if (!isEmail(email)) {
        errorMsg(workEmail, 'Email is invalid');
    } else {
        successMsg(workEmail);
    }  
    if(!checkYes == checked) {
        errorMsg(checkYes, '*This field is required');
    } else {
        successMsg(checkYes);
    }
    if(checkNo) {
        errorMsg(checkNo, '*This field is required');
    } else {
        successMsg(checkNo);
    }
}

function errorMsg(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = ' form-control error';
}

function successMsg(input) {
    var formControl = input.parentElement;
    formControl.className = ' form-control success';
}

function isEmail(email) {
    return /^[A-Za-z_]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(email);
}


var menu = document.querySelector('.menu');
var bar = document.querySelector('.bar');
var navUl = menu.querySelector('ul');
menu.addEventListener('click', function(e){
    menu.classList.toggle('active');
    bar.classList.toggle('ham-active');
    navUl.classList.toggle('active');
})


















