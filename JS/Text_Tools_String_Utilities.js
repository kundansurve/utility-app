functions = {
    "split": (string) => {
        const char = document.querySelector("#splitchar")
        return string.split(char.value);
    },
    "To Uppercase": (string) => { return string.toUpperCase() },
    "To Lowercase": (string) => { return string.toLowerCase() },
    "Reverse": (string) => { return string.split().reverse().join() },
    "word count": (string) => {
        return (string.split("")).length;
    },
    "character count": (string) => {
        return (string.split()).length;
    }
}

const button = document.querySelector('button');
button.onclick = event => {
    let operation = document.querySelector('input[id="operation"]');
    const obj = document.querySelector('#URL_input');
    document.querySelector('#URL_output').textContent = functions[operation.value](obj.value);
}