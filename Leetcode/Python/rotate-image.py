def rotate(matrix):
    """
    Do not return anything, modify matrix in-place instead.
    """
    # Loop through each ring
    for ring in range(len(matrix[0])//2):
        for step in range(len(matrix[0])-1-ring*2):
            last = matrix[ring][ring + step]
            matrix[ring][ring + step] = matrix[-1-step-ring][ring]
            matrix[-1-step-ring][ring] = matrix[-1-ring][-1-ring-step]
            matrix[-1-ring][-1-ring-step] = matrix[ring+step][-1-ring]
            matrix[ring+step][-1-ring] = last
    return

matrix = [[1,2,3],[4,5,6],[7,8,9]]
expected = [[7,4,1],[8,5,2],[9,6,3]]
rotate(matrix)
print("expected", expected, "final", matrix)

matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
expected = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
rotate(matrix)
print("expected", expected, "final", matrix)