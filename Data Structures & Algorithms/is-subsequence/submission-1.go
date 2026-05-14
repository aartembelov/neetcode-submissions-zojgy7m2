func isSubsequence(s string, t string) bool {
    if len(s) > len(t) {
        return false
    }

    tPointer := 0
    for sPointer := 0; sPointer < len(s); sPointer++ {
        found := false
        for curTPointer := tPointer; curTPointer < len(t); curTPointer++ {
            if s[sPointer] == t[curTPointer] {
                found = true
                tPointer = curTPointer + 1
                break;
            }
        }

        if found == false {
            return false
        }
    }

    return true
}
