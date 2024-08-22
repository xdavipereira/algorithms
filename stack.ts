type Node<T>  = {
    prev?: Node<T>;
    value: T
}


export class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }



    pop() {
        this.length = Math.max(0, this.length- 1)
        if(this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head  = this.head;
        this.head = head.prev

        return head.value;
    }

    push(item: T) {
        const node = {value: item} as Node<T>
        this.length++;
        if(!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;

    }

    peak() {
        
    return this.head?.value;
    }



}

const x = new Stack<number>; 
