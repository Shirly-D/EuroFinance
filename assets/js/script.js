var form = document.querySelector('.form');
var fname = document.querySelector('.first');
var lname = document.querySelector('.last');
var position = document.querySelector('.position');
var company = document.querySelector('.company');
var compType = document.querySelector('.comp-type');
var country = document.querySelector('.country');
var workEmail = document.querySelector('work-email');
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



















