type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	var result string
	for _, v := range strs {
		vLen := len(v)
		result += strconv.Itoa(vLen) + "," + v
	}

    // fmt.Println(result)

	return result
}

func (s *Solution) Decode(encoded string) []string {
	var decoded []string
	var curLen string

	for i := 0; i < len(encoded); i++ {
		if encoded[i] == ',' {
			startPointer := i + 1
			
            endInt, _ := strconv.Atoi(curLen)
			endPointer := startPointer + endInt
			
            str := encoded[startPointer:endPointer]

			decoded = append(decoded, str)

			i = endPointer - 1
            curLen = ""
		} else {
			curLen += string(encoded[i])
		}
	}

	return decoded
}