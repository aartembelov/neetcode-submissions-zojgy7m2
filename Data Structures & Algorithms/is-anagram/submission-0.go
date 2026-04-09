func isAnagram(s string, t string) bool {
    sHash := map[string]int{}
    tHash := map[string]int{}

    for _, char := range s {
        sHash[string(char)]++
    }

    for _, char := range t {
        tHash[string(char)]++
    }

    if len(sHash) != len(tHash) {
        return false
    }

    for key, _ := range sHash {
        if tHash[key] != sHash[key] {
            return false
        }
    }

    return true
}
