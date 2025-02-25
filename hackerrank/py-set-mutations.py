n_a = int(input().strip())
a = set(input().strip().split(" "))
N = int(input().strip())

for i in range(0, N):
    operation = input().strip().split(" ")
    values = set(input().strip().split(" "))

    match operation[0]:
        case "update":
            a.update(values)
        case "intersection_update":
            a.intersection_update(values)
        case "difference_update":
            a.difference_update(values)
        case "symmetric_difference_update":
            a.symmetric_difference_update(values)

total = 0
for i in a:
    total += int(i)
print(total)
