

module.exports = function(expTime) {
    
    let time = Date.now() - expTime * 1000
    console.log(time);
    return time
}