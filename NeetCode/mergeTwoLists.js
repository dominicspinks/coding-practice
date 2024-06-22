function mergeTwoLists(list1, list2) {
    let cur1 = list1;
    let cur2 = list2;
    let outHead = { val: 0, next: null };
    let outCur = outHead;
    while (cur1 || cur2) {
        if ((cur1 && cur1.val <= cur2?.val) || !cur2) {
            outCur.next = cur1;
            cur1 = cur1.next;
        } else if (cur2) {
            outCur.next = cur2;
            cur2 = cur2.next;
        } else {
            break;
        }

        outCur = outCur.next;
    }
    return outHead.next;
}

function createList(head) {
    class ListNode {
        constructor(val = 0, next = null) {
            this.val = val;
            this.next = next;
        }
    }
    if (head.length === 0) return null;
    const list = new ListNode(head[0]);
    let cur = list;
    for (let i = 1; i < head.length; i++) {
        cur.next = new ListNode(head[i]);
        cur = cur.next;
    }
    return list;
}

function listValues(head) {
    const output = [];
    let cur = head;
    while (cur) {
        output.push(cur.val);
        cur = cur.next;
    }
    return output;
}

let list1 = [1, 2, 4];
let list2 = [1, 3, 5];
let res = [1, 1, 2, 3, 4, 5];

console.log(
    listValues(mergeTwoLists(createList(list1), createList(list2))),
    res
);

list1 = [1];
list2 = [];
res = [];

console.log(
    listValues(mergeTwoLists(createList(list1), createList(list2))),
    res
);
