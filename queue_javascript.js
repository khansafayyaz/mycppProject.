/**
 * QUEUE DATA STRUCTURE - COMPLETE GUIDE
 * =====================================
 * Author: DSA Learning Path
 * Language: JavaScript
 */

// ============================================
// METHOD 1: Queue using Array
// ============================================

class QueueUsingArray {
    /**
     * Simple Queue implementation using Array
     * Time Complexity:
     * - Enqueue: O(1)
     * - Dequeue: O(n) - because shift() is O(n)
     */
    
    constructor() {
        this.queue = [];
    }
    
    enqueue(item) {
        this.queue.push(item);
        console.log(`Enqueued: ${item}`);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        const item = this.queue.shift(); // Remove from front
        console.log(`Dequeued: ${item}`);
        return item;
    }
    
    front() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.queue[0];
    }
    
    rear() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.queue[this.queue.length - 1];
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
    
    size() {
        return this.queue.length;
    }
    
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
        } else {
            console.log(`Queue: [${this.queue.join(', ')}]`);
        }
    }
}


// ============================================
// METHOD 2: Optimized Queue using Object
// ============================================

class QueueUsingObject {
    /**
     * Efficient Queue implementation using Object
     * Time Complexity:
     * - Enqueue: O(1)
     * - Dequeue: O(1) - Much better!
     */
    
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    }
    
    enqueue(item) {
        this.items[this.rearIndex] = item;
        this.rearIndex++;
        console.log(`Enqueued: ${item}`);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        console.log(`Dequeued: ${item}`);
        return item;
    }
    
    front() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.items[this.frontIndex];
    }
    
    rear() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.items[this.rearIndex - 1];
    }
    
    isEmpty() {
        return this.rearIndex - this.frontIndex === 0;
    }
    
    size() {
        return this.rearIndex - this.frontIndex;
    }
    
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return;
        }
        
        const elements = [];
        for (let i = this.frontIndex; i < this.rearIndex; i++) {
            elements.push(this.items[i]);
        }
        console.log(`Queue: [${elements.join(', ')}]`);
    }
}


// ============================================
// METHOD 3: Queue using Linked List
// ============================================

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueUsingLinkedList {
    /**
     * Queue implementation using Linked List
     * Time Complexity:
     * - Enqueue: O(1)
     * - Dequeue: O(1)
     */
    
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
        this.length = 0;
    }
    
    enqueue(item) {
        const newNode = new Node(item);
        
        if (this.rearNode === null) { // Queue is empty
            this.frontNode = this.rearNode = newNode;
        } else {
            this.rearNode.next = newNode;
            this.rearNode = newNode;
        }
        
        this.length++;
        console.log(`Enqueued: ${item}`);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        
        const item = this.frontNode.data;
        this.frontNode = this.frontNode.next;
        
        if (this.frontNode === null) { // Queue became empty
            this.rearNode = null;
        }
        
        this.length--;
        console.log(`Dequeued: ${item}`);
        return item;
    }
    
    front() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.frontNode.data;
    }
    
    rear() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.rearNode.data;
    }
    
    isEmpty() {
        return this.frontNode === null;
    }
    
    size() {
        return this.length;
    }
    
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return;
        }
        
        const elements = [];
        let current = this.frontNode;
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(`Queue: [${elements.join(', ')}]`);
    }
}


// ============================================
// METHOD 4: Circular Queue (Fixed Size)
// ============================================

class CircularQueue {
    /**
     * Circular Queue with fixed size
     * Efficient use of space - reuses empty positions
     */
    
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.count = 0;
    }
    
    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is Full!");
            return false;
        }
        
        if (this.front === -1) { // First element
            this.front = 0;
        }
        
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = item;
        this.count++;
        console.log(`Enqueued: ${item}`);
        return true;
    }
    
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        
        const item = this.queue[this.front];
        
        if (this.front === this.rear) { // Only one element
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }
        
        this.count--;
        console.log(`Dequeued: ${item}`);
        return item;
    }
    
    frontElement() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.queue[this.front];
    }
    
    rearElement() {
        if (this.isEmpty()) {
            return "Queue is Empty!";
        }
        return this.queue[this.rear];
    }
    
    isEmpty() {
        return this.count === 0;
    }
    
    isFull() {
        return this.count === this.capacity;
    }
    
    size() {
        return this.count;
    }
    
    display() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
            return;
        }
        
        const elements = [];
        let i = this.front;
        for (let j = 0; j < this.count; j++) {
            elements.push(this.queue[i]);
            i = (i + 1) % this.capacity;
        }
        console.log(`Queue: [${elements.join(', ')}]`);
    }
}


// ============================================
// DEMONSTRATION & TESTING
// ============================================

function demoQueueOperations() {
    console.log("\n" + "=".repeat(50));
    console.log("QUEUE USING ARRAY");
    console.log("=".repeat(50));
    const q1 = new QueueUsingArray();
    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.display();
    console.log(`Front: ${q1.front()}`);
    console.log(`Rear: ${q1.rear()}`);
    console.log(`Size: ${q1.size()}`);
    q1.dequeue();
    q1.display();
    
    console.log("\n" + "=".repeat(50));
    console.log("QUEUE USING OBJECT (RECOMMENDED)");
    console.log("=".repeat(50));
    const q2 = new QueueUsingObject();
    q2.enqueue("Apple");
    q2.enqueue("Banana");
    q2.enqueue("Cherry");
    q2.display();
    console.log(`Front: ${q2.front()}`);
    q2.dequeue();
    q2.display();
    
    console.log("\n" + "=".repeat(50));
    console.log("QUEUE USING LINKED LIST");
    console.log("=".repeat(50));
    const q3 = new QueueUsingLinkedList();
    q3.enqueue(100);
    q3.enqueue(200);
    q3.enqueue(300);
    q3.display();
    q3.dequeue();
    q3.display();
    
    console.log("\n" + "=".repeat(50));
    console.log("CIRCULAR QUEUE");
    console.log("=".repeat(50));
    const q4 = new CircularQueue(5);
    q4.enqueue(1);
    q4.enqueue(2);
    q4.enqueue(3);
    q4.display();
    q4.dequeue();
    q4.enqueue(4);
    q4.enqueue(5);
    q4.enqueue(6);
    q4.display();
}


// ============================================
// COMMON QUEUE PROBLEMS
// ============================================

function generateBinaryNumbers(n) {
    /**
     * Generate binary numbers from 1 to n using queue
     */
    const result = [];
    const queue = ["1"];
    
    for (let i = 0; i < n; i++) {
        const binary = queue.shift();
        result.push(binary);
        
        // Generate next binary numbers
        queue.push(binary + "0");
        queue.push(binary + "1");
    }
    
    return result;
}


function firstNonRepeatingCharacter(stream) {
    /**
     * Find first non-repeating character in stream
     */
    const queue = [];
    const freq = {};
    const result = [];
    
    for (const char of stream) {
        freq[char] = (freq[char] || 0) + 1;
        queue.push(char);
        
        // Remove repeating characters from front
        while (queue.length > 0 && freq[queue[0]] > 1) {
            queue.shift();
        }
        
        if (queue.length > 0) {
            result.push(queue[0]);
        } else {
            result.push('#');
        }
    }
    
    return result;
}


function reverseQueue(queue) {
    /**
     * Reverse a queue using stack
     */
    const stack = [];
    
    // Transfer all elements to stack
    while (!queue.isEmpty()) {
        stack.push(queue.dequeue());
    }
    
    // Transfer back to queue (now reversed)
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }
    
    return queue;
}


function demoQueueProblems() {
    console.log("\n" + "=".repeat(50));
    console.log("QUEUE PROBLEMS");
    console.log("=".repeat(50));
    
    // Problem 1: Generate Binary Numbers
    console.log("\n1. Generate Binary Numbers from 1 to 10:");
    const binaryNums = generateBinaryNumbers(10);
    console.log(binaryNums);
    
    // Problem 2: First Non-Repeating Character
    console.log("\n2. First Non-Repeating Character in Stream:");
    const stream = "aabccxb";
    const result = firstNonRepeatingCharacter(stream);
    for (let i = 0; i < stream.length; i++) {
        console.log(`After '${stream[i]}': ${result[i]}`);
    }
    
    // Problem 3: Reverse Queue
    console.log("\n3. Reverse Queue:");
    const q = new QueueUsingObject();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    console.log("Original:");
    q.display();
    reverseQueue(q);
    console.log("Reversed:");
    q.display();
}


// ============================================
// MAIN EXECUTION
// ============================================

console.log("\n🎯 QUEUE DATA STRUCTURE - COMPLETE GUIDE 🎯\n");

// Run demonstrations
demoQueueOperations();
demoQueueProblems();

console.log("\n" + "=".repeat(50));
console.log("✅ ALL DEMONSTRATIONS COMPLETED!");
console.log("=".repeat(50));
