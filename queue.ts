type Node<T>  = {
    next?: Node<T>;
    value: T
}



export class Queue<T> {
    public length: number;
    private tail?: Node<T>;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.tail = undefined;
        this.head = undefined;
    }



    dequeue() {
        if(!this.head) {
            return undefined;
        }
    
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        
        head.next = undefined;

        return head.value;

    }

    enqueue(item: T) {
        const node = {value: item} as Node<T>;
        this.length ++;


        if(!this.tail) {
            this.head = node;
            this.tail = this.head;
        }


        this.tail.next = node;
        this.tail = node;
    }

    peak() {
        if(!this.head) {
            return undefined;
        }
        return this.head?.value;
    }



}

const x = new Queue<number>;

x.enqueue(1);

console.log(x);

x.enqueue(2);
x.enqueue(3);

console.log(x.peak);

x.dequeue();

console.log(x);

console.log(x.peak());