## My solution ##
# def calculate(s):

#     def handleOp(list, operations, val):
#         operation = '+'
#         if len(operations) > 0:
#             operation = operations.pop()


#         if operation == '+' or operation == '++':
#             list[-1] += val
#         elif operation == '-':
#             list[-1] -= val

#     nums = [0]
#     opStack = ['++']
#     currentStr = ''
#     current = 0
#     for c in s:
#         if c in ['1','2','3','4','5','6','7','8','9','0']:
#             currentStr += c
#             continue
#         elif c == " ":
#             continue
#         elif len(currentStr) > 0:
#             current = int(currentStr)
#             currentStr = ''
#             handleOp(nums, opStack, current)

#         if c == '(':
#             opStack.append('++')
#             nums.append(0)
#             continue

#         if c in ['+','-']:
#             if len(opStack) > 0 and opStack[-1] == '++' and c == '-':
#                 opStack[-1] = c
#             else:
#                 opStack.append(c)
#             continue

#         if c == ')':
#             num = nums.pop()
#             handleOp(nums, opStack, num)

#     if len(currentStr) > 0:
#         handleOp(nums, opStack, int(currentStr))
#     return nums[0]


## Better solution ##
def calculate(s):
    total = 0
    num = 0
    sign = 1
    signs = [sign]

    for c in s:
        if c in ['1','2','3','4','5','6','7','8','9','0']:
            num = num * 10 + int(c)
        elif c == '(':
            signs.append(sign)
        elif c == ')':
            signs.pop()
        elif c == '+' or c == '-':
            total += sign * num
            sign = (1 if c == '+' else -1) * signs[-1]
            num = 0

    return total + sign * num

print(calculate("1 + 1+1"), "should be", 3)
print(calculate("(1+(4+5+2)-3)+(6+8)"), "should be", 23)
print(calculate(" 2-1 + 2 "), "should be", 3)
print(calculate("-((4+5+(2-3))+(6+8))-15"), "should be", -37)
print(calculate("1-(     -2)"), "should be", 3)
