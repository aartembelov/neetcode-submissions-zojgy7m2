// arr = [1,2,4,6]

// ->   [1]
//      [1, 1, 2, 8]

// rev = [6, 4, 2, 1]

// <-   [1]
//      [1, 6, 24, 48]

// 1 * 48 = [48]
// 1 * 24 = [48, 24]
// 2 * 6 = [48, 24, 12]
// 8 * 1 = [48, 24, 12, 8]




func productExceptSelf(nums []int) []int {
    prefixes := make([]int, len(nums))
    suffixes := make([]int, len(nums))

    for i := 0; i < len(nums); i++ {
        
        left := i
        if left == 0 {
            prefixes[i] = 1
        } else {
            prefixes[i] = prefixes[left - 1] * nums[left - 1]
        }
    }

    for i := len(nums) - 1; i > -1; i-- {
        if i == len(nums) - 1 {
            suffixes[i] = 1
        } else {
            suffixes[i] = suffixes[i + 1] * nums[i + 1]
        }
    }

    result := make([]int, len(nums))
    for i := 0; i < len(nums); i++ {
        result[i] = prefixes[i] * suffixes[i]
    }
    

    return result
}
