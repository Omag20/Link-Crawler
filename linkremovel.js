console.log('dede')
let divelem = document.createElement('div'); // create div elemet using js
let text;
let val = localStorage.getItem('text');
if (val == null) {
    text = document.createTextNode('this is editble div, just  dod it'); // create a child text node variable
} else {
    text = document.createTextNode(val);
}

divelem.setAttribute('id', 'elem'); // give a id to crated div
divelem.setAttribute('style', 'border:5px soild black; width:200px; height:200px; background-color:red;') // giving styling

let body = document.querySelector('.body'); // select parent elemt jisme rkhna hai
let div = document.querySelector('#one'); // select niche wala elemet jiske upper rkhna hai

divelem.appendChild(text); // append child text node variable to existing div
body.insertBefore(divelem, div); //inserting

divelem.addEventListener('click', function () {
    let notextarea = document.getElementsByClassName('textarea').length;
    if (notextarea == 0) {
        let html = elem.innerHTML;
        divelem.innerHTML = ` <textarea class='textarea' rows='4' id='textarea'> ${html} </textarea> `;
    };
    let textarea = document.getElementsByClassName('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

