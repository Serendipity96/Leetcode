function LinkedList() {

    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    this.head = null;
    var length = 0;

    this.append = function (element) {
        var node = new ListNode(element), current;
        if (this.head === null) {
            this.head = node;

        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        length++;
    };

    this.size = function () {
        return length;
    };


}


var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return l1
    }
    if (l1.val > l2.val) {
        let tmp = l1
        l1 = l2
        l2 = tmp
    }
    let head = l1
    let lr = head
    l1 = l1.next

    while (l1 !== null) {
        if (l2.val < l1.val) {
            let tmp = l1
            l1 = l2
            l2 = tmp
        }
        lr.next = l1
        l1 = l1.next
        lr = lr.next
    }

    lr.next = l2
    return head
}


var list1 = new LinkedList();
list1.append(2);
list1.append(4);
list1.append(6);
console.log(list1.size())

var list2 = new LinkedList();
list2.append(1);
list2.append(3);
list2.append(5);
console.log(list2.size())
mergeTwoLists(list1.head, list2.head)