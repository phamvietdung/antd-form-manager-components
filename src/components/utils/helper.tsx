import { Buffer } from "buffer";

const NewId = () => {
    
    var now = new Date();

    var encodeString = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}:${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`;

    var buf = Buffer.from(encodeString, 'base64').toString();

    return buf.replace(/\=/,'');

}

export {
    NewId
}