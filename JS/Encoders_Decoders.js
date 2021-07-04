functions = {
    "URL Percent Encoding": (value) => {

        const unencoded = value;
        return encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
    },
    "URL Percent Decoding": (value) => {

        const encoded = value;
        return decodeURIComponent(encoded.replace(/\+/g, " "));
    },
    "Base64 Encode": (value) => {

        const encoded = btoa(value);
        return encoded;
    },
    "Base64 Decode": (value) => {

        const decoded = btoa(value);
        return decoded;
    },
    "MD5 Hash Generator": (value) => {

        const crypto = require('crypto');
        const algo = 'md5'; //could be sha1, sha256, sha512
        return crypto.createHash(algo).update(value).digest('hex')
    },
    "SHA-1 Hash Generator": (value) => {

        const crypto = require('crypto');
        const algo = 'sha1'; //could be sha1, sha256, sha512
        return crypto.createHash(algo).update(value).digest('hex')

    },
    "SHA-256 Hash Generator": (value) => {
        const crypto = require('crypto');
        const algo = 'sha256'; //could be sha1, sha256, sha512
        return crypto.createHash(algo).update(value).digest('hex')
    },
    "SHA-512 Hash Generator": (value) => {
        const crypto = require('crypto');
        const algo = 'sha512'; //could be sha1, sha256, sha512
        const hash = crypto.createHash(algo).update(value).digest('hex');
        return hash;
    }
}
const button = document.querySelector('button');
button.onclick = event => {
    let operation = document.querySelector('input[id="operation"]');
    /*for (const s of operation) {
        if (s.checked) {
            operation = s.value;
            break;
        }
    }*/
    //var decodedStringBtoA = 'Hello World!';

    // Encode the String
    const obj = document.querySelector('#URL_input');
    document.querySelector('#URL_output').textContent = functions[operation.value](obj.value);
}