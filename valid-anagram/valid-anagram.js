/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArr = s.split('').sort()
    const tArr = t.split('').sort()
        if (JSON.stringify(sArr) === JSON.stringify(tArr)) {
        return true
    } else {
        return false
    }
};