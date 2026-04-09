func groupAnagrams(strs []string) [][]string {
    hash := map[string][]string{}

    for _, value := range strs {
        chars := []rune(value)
        sort.Slice(chars, func(i, j int) bool { return chars[i] < chars[j] })
        sortedStr := string(chars)

        hash[sortedStr] = append(hash[sortedStr], value)
    }

    result := [][]string{}
    for _, value := range hash {
        result = append(result, value)
    }

    return result
}
