func topKFrequent(nums []int, k int) []int {
    freq := map[int]int{}
    for _, v := range nums {
        freq[v]++
    }

    bucket := make([][]int, len(nums)+1)
    for val, f := range freq {
        bucket[f] = append(bucket[f], val)
    }

    res := []int{}
    for i := len(bucket) - 1; i >= 0 && len(res) < k; i-- {
        for _, v := range bucket[i] {
            res = append(res, v)
            if len(res) == k {
                return res
            }
        }
    }

    return res
}