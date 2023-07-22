const get4DigitCode = () => { 
    const code = Math.floor(1000 + Math.random() * 9000);
    return code;
}
console.log(get4DigitCode());