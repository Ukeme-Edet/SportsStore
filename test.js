/**
 * Definition for singly-linked list.
 */
 class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let v1 = returnListInt(l1);
    let v2 = returnListInt(l2);
    let v3 = `${Number(v1) + Number(v2)}`.split("");
    let result;
    for (let i = 0; i <= v3.length - 1; i++) {
        result = new ListNode(Number(v3[i]), result ? result : null);
    }
    return result;
};

function returnListInt(ll) {
    let result = [];
    while (ll.next) {
        result.unshift(`${ll.val}`);
        ll = ll.next;
    }
    result.unshift(`${ll.val}`);
    return result.join("");
}

function add(v1, v2) {

}

let test = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let testresult;
for (let n of test) {
    testresult = new ListNode(n, testresult);
}

console.log(addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(9))), testresult));