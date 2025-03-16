def canCompleteCircuit(gas, cost):
    net = []
    for i in range(len(gas)):
        net.append(gas[i] - cost[i])

    if sum(net) < 0:
        return -1

    print(net)
    for i in range(len(gas)-2, -1, -1):
        net[i] += net[i+1]

    max = net[0]
    maxI = 0
    for i in range(1, len(net)):
        if max < net[i]:
            max = net[i]
            maxI = i

    return maxI


# gas = [1,2,3,4,5]
# cost = [3,4,5,1,2]
# result = 3
# print("expected", result, "actual", canCompleteCircuit(gas, cost))

# gas = [2,7,1,1,3,5,2,1]
# cost = [4,1,6,1,2,1,5,2]
# result = 1
# print("expected", result, "actual", canCompleteCircuit(gas, cost))

# gas = [2,3,4]
# cost = [3,4,3]
# result = -1
# print("expected", result, "actual", canCompleteCircuit(gas, cost))

gas = [5,1,2,3,4]
cost = [4,4,1,5,1]
result = 4
print("expected", result, "actual", canCompleteCircuit(gas, cost))