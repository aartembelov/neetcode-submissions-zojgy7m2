func hasDuplicate(nums []int) bool {
    hash := map[int]bool{}

    for i := 0; i < len(nums); i++ {
        if hash[nums[i]] == true {
            return true
        }

        hash[nums[i]] = true
    }

    return false
}
