# 🎯 COMPLETE QUEUE GUIDE - BEGINNER TO PRO

## 📚 Table of Contents
1. [What is a Queue?](#what-is-a-queue)
2. [Real-Life Examples](#real-life-examples)
3. [Queue Operations](#queue-operations)
4. [Types of Queues](#types-of-queues)
5. [Implementation Methods](#implementation-methods)
6. [Time & Space Complexity](#time--space-complexity)
7. [Common Problems](#common-problems)
8. [Interview Questions](#interview-questions)
9. [Practice Problems](#practice-problems)

---

## What is a Queue?

A **Queue** is a linear data structure that follows the **FIFO (First In, First Out)** principle.

```
FIFO = First In, First Out

Front → [10] [20] [30] [40] ← Rear
        ↑                  ↑
    Remove here        Add here
```

### Key Characteristics:
- Elements are added at the **REAR** (back)
- Elements are removed from the **FRONT**
- The first element added is the first one to be removed

---

## Real-Life Examples

1. **🎫 Movie Theater Line**
   - First person in line gets ticket first
   
2. **🖨️ Printer Queue**
   - Documents print in order they were sent
   
3. **📞 Customer Service**
   - Calls are answered in order received
   
4. **🚗 Toll Booth**
   - Cars pass through in order of arrival
   
5. **🍔 Fast Food Drive-Through**
   - Orders are served in sequence

---

## Queue Operations

### 1. **Enqueue (Add)**
```
Add element to the rear of queue

Before: [10] [20] [30]
Enqueue(40)
After:  [10] [20] [30] [40]
```

### 2. **Dequeue (Remove)**
```
Remove element from the front of queue

Before: [10] [20] [30] [40]
Dequeue()
After:  [20] [30] [40]
Returns: 10
```

### 3. **Front/Peek**
```
View the front element without removing

Queue: [10] [20] [30]
Front() → Returns: 10
Queue: [10] [20] [30] (unchanged)
```

### 4. **Rear**
```
View the rear element without removing

Queue: [10] [20] [30]
Rear() → Returns: 30
```

### 5. **isEmpty**
```
Check if queue is empty

Queue: []
isEmpty() → Returns: true

Queue: [10]
isEmpty() → Returns: false
```

### 6. **Size**
```
Get number of elements

Queue: [10] [20] [30]
Size() → Returns: 3
```

---

## Types of Queues

### 1. **Simple Queue (Linear Queue)**
- Basic FIFO queue
- Elements added at rear, removed from front

### 2. **Circular Queue**
- Last position connects back to first position
- Efficient use of space
- Reuses empty positions

```
Circular Queue (Size 5):
[1] [2] [3] [4] [5]
 ↑               ↓
 └───────────────┘
```

### 3. **Priority Queue**
- Elements have priorities
- Higher priority elements dequeued first
- Not strictly FIFO

### 4. **Double-Ended Queue (Deque)**
- Elements can be added/removed from both ends
- More flexible than simple queue

---

## Implementation Methods

### Method 1: Using Array/List
```
✅ Pros:
- Simple to implement
- Easy to understand

❌ Cons:
- Dequeue is O(n) - slow!
- Wastes space (front positions unused)
```

### Method 2: Using Linked List
```
✅ Pros:
- Enqueue: O(1)
- Dequeue: O(1)
- Dynamic size

❌ Cons:
- Extra memory for pointers
- Slightly more complex
```

### Method 3: Using Circular Array
```
✅ Pros:
- Efficient space usage
- O(1) operations
- Fixed size (good for memory control)

❌ Cons:
- Fixed capacity
- Slightly complex logic
```

### Method 4: Using Object/HashMap (JavaScript/Python)
```
✅ Pros:
- O(1) enqueue and dequeue
- Simple implementation
- Dynamic size

✅ Best Choice for Most Cases!
```

---

## Time & Space Complexity

| Operation | Array | Linked List | Circular Array | Object/HashMap |
|-----------|-------|-------------|----------------|----------------|
| Enqueue   | O(1)  | O(1)        | O(1)           | O(1)           |
| Dequeue   | O(n)  | O(1)        | O(1)           | O(1)           |
| Front     | O(1)  | O(1)        | O(1)           | O(1)           |
| Rear      | O(1)  | O(1)        | O(1)           | O(1)           |
| isEmpty   | O(1)  | O(1)        | O(1)           | O(1)           |
| Size      | O(1)  | O(1)        | O(1)           | O(1)           |
| **Space** | O(n)  | O(n)        | O(n)           | O(n)           |

**Recommendation:** Use **Linked List** or **Object/HashMap** for best performance!

---

## Common Problems

### 1. **Generate Binary Numbers**
```
Problem: Generate binary numbers from 1 to n

Input: n = 5
Output: ["1", "10", "11", "100", "101"]

Algorithm:
1. Start with "1" in queue
2. For each number:
   - Dequeue it
   - Add to result
   - Enqueue number + "0"
   - Enqueue number + "1"
```

### 2. **First Non-Repeating Character**
```
Problem: Find first non-repeating character in stream

Input: "aabccxb"
Output: ['a', '#', 'b', 'b', 'b', 'x', 'x']

Algorithm:
1. Use queue + frequency map
2. For each character:
   - Increment frequency
   - Add to queue
   - Remove repeating chars from front
   - Return front element
```

### 3. **Reverse Queue**
```
Problem: Reverse a queue

Input: [1, 2, 3, 4]
Output: [4, 3, 2, 1]

Algorithm:
1. Use a stack
2. Dequeue all → push to stack
3. Pop all → enqueue back
```

### 4. **Implement Stack using Queues**
```
Problem: Implement stack operations using queues

Operations: push(), pop(), top()

Algorithm:
- Use 2 queues
- Make push or pop operation costly
```

### 5. **Sliding Window Maximum**
```
Problem: Find maximum in each window of size k

Input: [1, 3, -1, -3, 5, 3, 6, 7], k = 3
Output: [3, 3, 5, 5, 6, 7]

Algorithm:
- Use deque (double-ended queue)
- Maintain decreasing order
```

---

## Interview Questions

### Easy Level:
1. Implement queue using array
2. Implement queue using linked list
3. Reverse a queue
4. Check if queue is empty
5. Find size of queue

### Medium Level:
1. Implement circular queue
2. Generate binary numbers using queue
3. First non-repeating character in stream
4. Implement stack using queues
5. Reverse first K elements of queue
6. Interleave first half with second half
7. Queue using two stacks

### Hard Level:
1. Sliding window maximum
2. LRU Cache implementation
3. Design circular deque
4. Maximum of all subarrays of size k
5. Rotten oranges (BFS problem)
6. Snake and ladder problem
7. Word ladder problem

---

## Practice Problems

### Beginner:
```
1. Create a queue and perform basic operations
2. Check if a queue is palindrome
3. Count elements in queue
4. Find minimum element in queue
5. Remove all even numbers from queue
```

### Intermediate:
```
1. Reverse queue using recursion
2. Sort a queue
3. Implement priority queue
4. Queue using linked list with size limit
5. Merge two queues
```

### Advanced:
```
1. Design a queue that supports getMin() in O(1)
2. Implement LRU cache
3. Design a hit counter
4. Moving average from data stream
5. Design circular queue with dynamic size
```

---

## Queue vs Stack

| Feature | Queue | Stack |
|---------|-------|-------|
| Principle | FIFO (First In, First Out) | LIFO (Last In, First Out) |
| Add | Enqueue (at rear) | Push (at top) |
| Remove | Dequeue (from front) | Pop (from top) |
| View | Front/Peek | Top/Peek |
| Real-Life | Line at ticket counter | Stack of plates |
| Use Cases | BFS, Scheduling | DFS, Undo/Redo |

---

## When to Use Queue?

✅ **Use Queue When:**
- Order matters (FIFO)
- Processing tasks in sequence
- Breadth-First Search (BFS)
- Level-order tree traversal
- Scheduling algorithms
- Buffering (keyboard, printer)
- Asynchronous data transfer

❌ **Don't Use Queue When:**
- Need random access
- Need to access middle elements
- LIFO behavior needed (use Stack)
- Need fast search (use Hash Table)

---

## Key Takeaways

1. **Queue = FIFO** (First In, First Out)
2. **Two main operations:** Enqueue (add) and Dequeue (remove)
3. **Best implementation:** Linked List or Object/HashMap
4. **Time complexity:** O(1) for all operations (with good implementation)
5. **Common in:** BFS, scheduling, buffering
6. **Practice:** Solve problems to master queues!

---

## Next Steps

1. ✅ Understand queue concept
2. ✅ Implement queue in your language
3. ✅ Solve basic problems
4. ✅ Learn circular queue
5. ✅ Practice medium problems
6. ✅ Master BFS using queue
7. ✅ Solve hard problems
8. ✅ Build real projects using queues

---

## Resources

### Practice Platforms:
- LeetCode (Queue tag)
- HackerRank (Queue problems)
- GeeksforGeeks (Queue section)
- CodeForces (Queue problems)

### Topics to Learn Next:
1. Deque (Double-ended queue)
2. Priority Queue
3. Breadth-First Search (BFS)
4. Level-order traversal
5. Circular queue applications

---

## 🎯 Remember:
**"Queue is like a line at a store - first come, first served!"**

**Practice daily, solve problems, and you'll become a DSA PRO! 💪**
