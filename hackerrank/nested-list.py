students = []
lowest1grade = lowest2grade = float('inf')
for _ in range(int(input())):
    name = input()
    score = float(input())
    if score < lowest1grade:
        lowest2grade = lowest1grade
        lowest1grade = score
    elif score < lowest2grade and score != lowest1grade:
        lowest2grade = score
    students.append([name, score])

lowest2students = [student[0] for student in students if student[1] == lowest2grade]

lowest2students.sort()

for student in lowest2students:
    print(student)