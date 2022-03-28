var person_name;
var person_text;
var submit_btn;

window.onload = function()
{ 
    person_name = document.getElementById('person_name')
    person_text = document.getElementById('person_text')
    submit_btn = document.getElementById('submit_btn')

    submit_btn.onclick = function() {
        person_text.innerHTML = person_name.value;
        console.log("Person Name:" + person_name.value);
    }
}

// window.onload = function() {
//     const satoshi = new Wallet();
//     const bob = new Wallet();
//     const alice = new Wallet();

//     satoshi.sendMoney(50, bob.publicKey);
//     bob.sendMoney(23, alice.publicKey);
//     alice.sendMoney(5, bob.publicKey);

//     console.log(Chain.instance)
// }