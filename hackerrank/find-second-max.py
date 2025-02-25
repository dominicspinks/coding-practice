n = int(input())
arr = map(int, input().split())

max1 = -100
max2 = -100

for val in list(arr):
    if val > max1:
        max2 = max1
        max1 = val
    elif val > max2 and val != max1:
        max2 = val

print(max2)
