import math


def fullJustify(words, maxWidth):
    def split_spaces(num_words, num_spaces):
        # num_spaces >= num_words - 1
        if num_words == 1:
            return [num_spaces]

        output = [math.floor(num_spaces / (num_words - 1)) for i in range(num_words - 1)]

        for i in range(num_spaces - sum(output)):
            output[i] += 1

        return output

    lines = []
    spaces = []

    line = []
    linelen = 0
    for word in words:
        if linelen + len(word) + len(line) > maxWidth:
            lines.append(line)
            spaces.append(split_spaces(len(line), maxWidth - linelen))
            line = []
            linelen = 0

        line.append(word)
        linelen += len(word)

    lines.append(line)
    lastline = [1 for i in range(len(line) - 1)]
    lastline.append(maxWidth - linelen - (len(line) - 1))
    spaces.append(lastline)

    output = []
    for i in range(len(lines)):
        linetext = ""
        for j in range(len(lines[i])):
            linetext += lines[i][j]
            if j < len(spaces[i]):
                linetext += " " * spaces[i][j]

        output.append(linetext)

    return output


# print(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
# print(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20))
print(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
