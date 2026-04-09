func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    } 

    hash := map[rune]int{}

    for i := 0; i < len(s); i++ {
        hash[rune(s[i])]++
        hash[rune(t[i])]--
    }

    for _, val := range hash {
        if val != 0 {
            return false
        }
    }

    return true
}
