func replaceElements(arr []int) []int {
    maxItem := -1
    
    res := make([]int, len(arr))
    for i := len(arr) - 2; i > -1; i-- {
        maxItem = max(maxItem, arr[i+1])
        res[i] = maxItem
    } 

    res[len(arr) - 1] = -1

    return res
}
