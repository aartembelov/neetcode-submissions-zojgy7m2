type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	var sb strings.Builder
	for _, v := range strs {
		vLen := len(v)
		sb.WriteString(strconv.Itoa(vLen))
		sb.WriteString(",")
		sb.WriteString(v)
	}

	return sb.String()
}

func (s *Solution) Decode(encoded string) []string {
	var decoded []string
	var curLen string

	for i := 0; i < len(encoded); i++ {
		if encoded[i] == ',' {
            currentStrLen, _ := strconv.Atoi(curLen)

			startPointer := i + 1
			endPointer := startPointer + currentStrLen
			
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