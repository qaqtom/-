class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(value) {
        let node = new Node(value);
        let p = this.head;
        if (p) {
            while (p.next) {
                p = p.next;
            }
            p.next = node;
        } else {
            this.head = node;
        }
        this.length++;
    }
    print() {
        let p = this.head;
        if (p) {
            while (p) {
                console.log(p.value);
                p = p.next;
            }
        } else {
            console.log('空链表');
        }
    }
}

let linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

//console.log(linkedList.length);
linkedList.print();
