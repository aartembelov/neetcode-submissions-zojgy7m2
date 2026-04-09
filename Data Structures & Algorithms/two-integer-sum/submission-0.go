func twoSum(nums []int, target int) []int {
    hash := map[int]int{}

    for index, num := range nums {
        if j, ok := hash[target-num]; ok {
            return []int{j, index}
        }
        hash[num] = index
    }
    
    return nil
}