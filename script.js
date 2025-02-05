var msg = "Hello World"
for(var i=0; i<5; i++){
    document.write(msg + "<br>")
}

for(var i=1; i<=10;i++){
    document.write(`${i} <br>`)
}


const number = parseInt(prompt('Enter an integer: '));
const range = parseInt(prompt('Enter a range: '));

for(let i = 1; i <= range; i++) {
    const result = i * number;
    document.write(`${number} * ${i} = ${result} <br>`);
}

var phone = ['Nokia','Iphone','Q-mobile','xiaomi']
for(var i=0; i< phone.length; i++){
    document.write(phone[i] + "<br>")
}

var fruits =['mango','apple','graps','banana']
for(var i=0; i<fruits.length; i++){
    document.write(`${fruits[i]} <br>`)
}
var fruit =['mango','apple','graps','banana']
for(var i=0; i<fruit.length; i++){
    document.write(`Element is at index ${i} is ${fruit[i]} <br>`)
}

