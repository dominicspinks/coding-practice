def convert(s, numRows):
    if numRows == 1: return s
    rows = ["" for _ in range(numRows)]

    direction = 1
    row = 0
    for c in s:
        rows[row] += c
        if (direction == 1 and row == numRows-1) or (direction == -1 and row == 0):
            direction *= -1
        row += direction

    return "".join(rows)

s = "PAYPALISHIRING"
numRows = 3
expected = "PAHNAPLSIIGYIR"
actual = convert(s, numRows)
print("expected", expected, "actual", actual, expected == actual)

s = "PAYPALISHIRING"
numRows = 4
expected = "PINALSIGYAHRPI"
actual = convert(s, numRows)
print("expected", expected, "actual", actual, expected == actual)

s = "PAYPALISHIRING"
numRows = 2
expected = "PYAIHRNAPLSIIG"
actual = convert(s, numRows)
print("expected", expected, "actual", actual, expected == actual)
