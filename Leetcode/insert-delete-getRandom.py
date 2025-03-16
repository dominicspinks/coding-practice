import random
## My Solution ##
# class RandomizedSet:

#     def __init__(self):
#         self.set = set()


#     def insert(self, val: int) -> bool:
#         if val in self.set:
#             return False

#         self.set.add(val)
#         return True


#     def remove(self, val: int) -> bool:
#         if val not in self.set:
#             return False

#         self.set.remove(val)
#         return True


#     def getRandom(self) -> int:
#         return random.choice(list(self.set))


## Better Solution ##
class RandomizedSet:
    def __init__(self):
        self._map = {}
        self.size = 0
        self._list = []



    def insert(self, val: int) -> bool:
        if val in self._map:
            return False

        self._list.append(val)
        self._map[val] = self.size
        self.size += 1
        return True


    def remove(self, val: int) -> bool:
        if val not in self._map:
            return False

        idx = self._map[val]
        self.size -= 1
        self._list[idx] = self._list[self.size]
        self._map[self._list[idx]] = idx
        self._list.pop()
        self._map.pop(val)

        return True


    def getRandom(self) -> int:
        return random.choice(self._list)

obj = RandomizedSet()
obj.insert('ar')
obj.insert(2)
param_1 = obj.insert(2)
obj.insert(123)
obj.insert(5)
obj.insert(765)
param_2 = obj.remove(2)
param_3 = obj.getRandom()

print(param_1, param_2, param_3)