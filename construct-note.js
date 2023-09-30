// add whatever parameters you deem necessary
function freqCounter(str){
    const frequencies = new Map();
    for(let val of str){
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);
    }
    return frequencies;
}

function constructNote(msg, letters) {
    if(letters.length ===0) return false;
    let messageFreq = freqCounter(msg);
    let lettersFreq = freqCounter(letters);
    for(let letter of messageFreq.keys()){
        if(!lettersFreq.has(letter) || messageFreq.get(letter) > lettersFreq.get(letter)) return false;
    }
    return true;
}


module.exports = constructNote;