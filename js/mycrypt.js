sjcl.random.startCollectors();
var randomkey = sjcl.codec.base64.fromBits(sjcl.random.randomWords(8, 0), 0);
var message = "those jeans do not look good on you.";
var cipherdata = zeroCipher(randomkey, message);
