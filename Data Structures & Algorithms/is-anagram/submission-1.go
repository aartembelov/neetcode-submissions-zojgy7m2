func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    } 

    sHash := map[rune]int{}
    tHash := map[rune]int{}

    for i := 0; i < len(s); i++ {
        sHash[rune(s[i])]++
        tHash[rune(t[i])]++
    }

    for key, _ := range sHash {
        if tHash[key] != sHash[key] {
            return false
        }
    }

    return true
}
