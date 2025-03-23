def strStr(haystack, needle):
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i:i+len(needle)] == needle:
            return i
    return -1

haystack = "sadbutsad"
needle = "sad"
expected = 0
print("expected", expected, "actual", strStr(haystack, needle))

haystack = "leetcodeleeto"
needle = "leeto"
expected = -1
print("expected", expected, "actual", strStr(haystack, needle))
