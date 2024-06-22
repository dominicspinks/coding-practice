function removeNthFromEnd(head, n) {
    // Find length of list
    let cur = head;
    let length = 0;
    while (cur) {
        length++;
        cur = cur.next;
    }
    // Find node to remove
    cur = head;
    let prev = null;
    let next = cur.next;
    let count = 0;

    while (cur) {
        if (count !== length - n) {
            prev = cur;
            cur = next;
            next = cur.next;
            count++;
            continue;
        }
        if (prev) {
            prev.next = next;
        } else {
            head = next;
        }
        break;
    }
    return head;
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

let head = [1, 2, 3, 4];
let n = 2;

let res = [1, 2, 4];

console.log(listValues(removeNthFromEnd(createList(head), n)), res);

head = [5];
n = 1;
res = [];

console.log(listValues(removeNthFromEnd(createList(head), n)), res);

head = [1, 2];
n = 2;
res = [2];

console.log(listValues(removeNthFromEnd(createList(head), n)), res);
