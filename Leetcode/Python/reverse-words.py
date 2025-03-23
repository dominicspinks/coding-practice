def reverseWords(s):
    arr = s.split()
    arr.reverse()

    return " ".join(arr)

print(reverseWords("a good   example"))