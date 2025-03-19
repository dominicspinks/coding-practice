def isValid(s):
    open = []

    for c in s:
        if c == '{' or c == '[' or c == '(':
            open.append(c)
            continue

        if len(open) == 0 or (c == '}' and open.pop() != '{') or (c == ')' and open.pop() != '(') or (c == ']' and open.pop() != '['):
            return False


    return len(open) == 0


print(isValid('()'), "should be", True)
print(isValid('()[]{}'), "should be", True)
print(isValid('([[{}()]])'), "should be", True)
print(isValid('(]'), "should be", False)
print(isValid(')'), "should be", False)
print(isValid('('), "should be", False)