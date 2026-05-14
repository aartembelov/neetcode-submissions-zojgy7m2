func hasDuplicate(nums []int) bool {
    hash := map[int]bool{}

    for _, v := range nums {
        if _, ok := hash[v]; ok {
            return true
        }

        hash[v] = true
    }

    return false
}
