# n_english = input().strip()
# english = set(input().strip().split(" "))
# n_french = input().strip()
# french = set(input().strip().split(" "))

n_english = "9".strip()
english = set("1 2 3 4 5 6 7 8 9".strip().split(" "))
n_french = "9".strip()
french = set("10 1 2 3 11 21 55 6 8".strip().split(" "))

print(len(english.union(french)))
print(len(english.intersection(french)))
print(len(english.difference(french)))
print(len(english.symmetric_difference(french)))