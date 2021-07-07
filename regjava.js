const first= document.reg.fName;
const last= document.reg.lName;
const address= document.reg.mail;
const use= document.reg.user;
const pswd= document.reg.pass;
const repswd = document.reg.repswd;
const submit = document.querySelector(#btnSub);

function validFun(e)
{
    e.preventDefault();
    if (reg.value = null || reg.value = " ")
       { alert( "no field should be empty");
        return false };
    else if (first.value || last.value < 8 $$ > 12)
            {
        alert("length of text does not match");
        return false};
    else if (first.value === last.value)
            {
        alert("first name and last can't be same");
        return false};
    else
{
        alert("form submitted")
    };
    
};

submit.addEventListener("click",validFun(e));

