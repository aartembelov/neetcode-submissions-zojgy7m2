func replaceElements(arr []int) []int {
    for k, _ := range arr {
        maxElement := getMaxElement(arr[k+1:])
        arr[k] = maxElement
    }

    arr[len(arr) - 1] = -1

    return arr
}

func getMaxElement(arr []int) int {
    max := -1 
    for _, v := range arr {
        if v > max {
            max = v
        }
    }
    return max
}
