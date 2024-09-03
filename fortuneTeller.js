
//first part of message
const messageSubj = () => {
    let string;
    let randNumber = Math.ceil(Math.random() * 3);
    switch (randNumber) {
        case 1:
            string = 'Your future';
            break;
        case 2:
            string = 'Your love life';
            break;
        case 3:
            string = 'Your work';
            break;
        default:
            break;
    }
    return string;
}

//second part of message
const messagePhrase = () => {
    let string;
    let randNumber = Math.ceil(Math.random() * 3);
    switch (randNumber) {
        case 1:
            string = 'is bright';
            break;
        case 2:
            string = 'looks scary';
            break;
        case 3:
            string = 'is uncertain';
            break;
        default:
            break;
    }
    return string;
}


//final part of message
const messageEnding = () => {
    let string;
    let randNumber = Math.ceil(Math.random() * 3);
    switch (randNumber) {
        case 1:
            string = 'Keep at it!';
            break;
        case 2:
            string = 'Give it your best!';
            break;
        case 3:
            string = 'Try harder!';
            break;
        default:
            break;
    }
    return string;
}


//function to put message together
let fullMessage = () => {
    return `${messageSubj()} ${messagePhrase()}. ${messageEnding()}`;
}

console.log(fullMessage());