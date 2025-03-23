def longestCommonPrefix(strs):
    common = strs[0]

    i = 1
    while len(common) > 0 and i < len(strs):
        if strs[i].startswith(common):
            i += 1
        else:
            common = common[:-1]
    return common

strs = ["flower","flow","flight"]
expected = "fl"
print("Expected", expected, "Actual", longestCommonPrefix(strs))

strs = ["dog","racecar","car"]
expected = ""
print("Expected", expected, "Actual", longestCommonPrefix(strs))

strs = ["c","acc","ccc"]
expected = ""
print("Expected", expected, "Actual", longestCommonPrefix(strs))

# flower
# flows

# is 'flower' in 'flow'? No
# is 'flowe' in 'flow'? No
# is 'flow' in 'flow'? Yes
# Set flow as best, Next word
# is 'flow' in 'flight'? No
# is 'flo' in 'flight'? No
# is 'fl' in 'flight'? Yes
# Set 'fl' as best, next word