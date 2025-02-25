x = int(input())
y = int(input())
z = int(input())
n = int(input())

output = [[nx, ny, nz] for nx in range(0, x+1) for ny in range(0, y+1) for nz in range(0, z+1) if nx + ny + nz != n]

print(output)
