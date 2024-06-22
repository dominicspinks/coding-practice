function reverseList(head) {
    let [prev, curr, next] = [null, head, null];
    // console.log(prev, curr, next);
    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
        // console.log(prev, curr, next);
    }

    return prev;
}

let head = [0, 1, 2, 3];
let res = [3, 2, 1, 0];

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

console.log(listValues(reverseList(createList(head))), res);
