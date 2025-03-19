def gameOfLife(board):
    # Copy boards state
    current = []
    for row in board:
        current.append([*row])

    # for each cell, check neighbors
    w = len(board[0])
    h = len(board)

    for j in range(h):
        for i in range(w):
            num = sum([current[a][b] for b in range(max(0, i-1), min(w, i+2)) for a in range(max(0,j-1), min(h, j+2)) if a != j or b != i])
            # print("num", num)
            if num < 2 or num > 3:
                board[j][i] = 0
            elif num == 3:
                board[j][i] = 1

    return

board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
board = [[1]]
print(board)
gameOfLife(board)
print(board)