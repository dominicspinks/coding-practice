def lengthOfLastWord(s):
    return len((s.split())[-1])

s = "Hello World"
expected = 5
print("expected", expected, "actual", lengthOfLastWord(s))

s = "   fly me   to   the moon  "
expected = 4
print("expected", expected, "actual", lengthOfLastWord(s))


s = " a bb"
expected = 2
print("expected", expected, "actual", lengthOfLastWord(s))