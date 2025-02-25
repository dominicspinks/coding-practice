n = int(input().strip())
rooms = input().strip().split(" ")

for i in range(0, len(rooms)):
    rooms[i] = int(rooms[i])

unique_rooms = set(rooms)

count = dict()
for i in unique_rooms:
    count[i] = 0

for room in rooms:
    count[room] += 1

for room in unique_rooms:
    if count[room] == 1:
        print(room)
        break
