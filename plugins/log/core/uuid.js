module.exports = () => {
    let str = "xxxyxxx_xxxx_xxxx_"
    let times = Date.now()
    let strRule = times + "_" + times.toString(16).slice(3);
    return ((str.replace(/[xy]/g, (c) => {
        let r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })) + strRule).toUpperCase();
}