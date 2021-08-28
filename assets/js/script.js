var form = document.querySelector('.form');
var fname = document.querySelector('.first');
var lname = document.querySelector('.last');
var position = document.querySelector('.position');
var company = document.querySelector('.company');
var compType = document.querySelector('.comp-type');
var country = document.querySelector('.country');
var workEmail = document.querySelector('.work-email');
var checkYes = document.querySelector('.yes:checked');
var checkNo = document.querySelector('.no:checked');
var nameLength = /^[A-Za-z. ]{3,30}$/;

form.addEventListener('submit', function(e){
    e.preventDefault();
    inputValue();
})

function inputValue() {
    if(fname.value == "") {
        errorMsg(fname, '*This field is required');
    } else if(!nameLength.test(fname.value)  || fname.value.length < 1) {
        errorMsg(fname, 'Enter valid name');
    } else {
        successMsg(fname);
    }
    if(lname.value == "") {
        errorMsg(lname, '*This field is required');
    } else if(!nameLength.test(lname.value)  ||lname.value.length < 1) {
        errorMsg(lname, 'Enter valid name');
    } else {
        successMsg(lname);
    }
    if(position.value == "") {
        errorMsg(position, '*This field is required');
    } else if(!nameLength.test(position.value)  || position.value.length < 1) {
        errorMsg(position, 'Enter valid position');
    } else {
        successMsg(position);
    }
    if(company.value == "") {
        errorMsg(company, '*This field is required');
    } else if(!nameLength.test(company.value)  || company.value.length < 1) {
        errorMsg(company, 'Enter valid company name');
    } else {
        successMsg(company);
    }
    if(compType.value == "") {
        errorMsg(compType, '*This field is required');
    } else if(!nameLength.test(compType.value)  || compType.value.length < 1) {
        errorMsg(compType, 'Select valid company Type');
    } else {
        successMsg(compType);
    }
    if(country.value == "") {
        errorMsg(country, '*This field is required');
    } else if(!nameLength.test(country.value)  || country.value.length < 1) {
        errorMsg(country, 'Select valid company name');
    } else {
        successMsg(country);
    }
    if(workEmail.value == "") {
        errorMsg(workEmail, '*This field is required');
    } else if(!nameLength.test(workEmail.value) || (!isEmail(workEmail.value))) {
        errorMsg(workEmail, 'Email is invalid');
    } else {
        successMsg(workEmail);
    } 
    if(checkYes) {
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
    var small = formControl.querySelector('span');
    small.innerText = message;
    formControl.className += ' form-control error';
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

// scroll

// var scrollTop = document.querySelector('.form-section');
// scrollTop.addEventListener('click', function(e){
//     scrollTop.classList.add('arrow-active');
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })

// var bottomScrollTop = document.querySelector('.footer-top');
// bottomScrollTop.addEventListener('click', function(e){
//     bottomScrollTop.classList.add('arrow-active');
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })



















