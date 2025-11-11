# 🎯 QUEUE PRACTICE EXERCISES - BEGINNER TO PRO

## 📝 How to Use This Guide
1. Start with Level 1 (Beginner)
2. Solve each problem before looking at hints
3. Try to code it yourself first
4. Check the solution only if stuck
5. Move to next level when comfortable

---

## 🟢 LEVEL 1: BEGINNER (Start Here!)

### Exercise 1: Basic Queue Operations
**Problem:** Create a queue and perform these operations:
- Add 5 elements
- Remove 2 elements
- Display the queue
- Show front and rear elements

**Expected Output:**
```
Enqueued: 1
Enqueued: 2
Enqueued: 3
Enqueued: 4
Enqueued: 5
Dequeued: 1
Dequeued: 2
Queue: [3, 4, 5]
Front: 3
Rear: 5
```

**Hint:** Use the QueueUsingObject class from the examples.

---

### Exercise 2: Check if Queue is Empty
**Problem:** Write a function that checks if a queue is empty after various operations.

**Test Cases:**
```
Input: Create queue, check isEmpty
Output: true

Input: Add 3 elements, check isEmpty
Output: false

Input: Add 2, remove 2, check isEmpty
Output: true
```

**Hint:** Use the isEmpty() method.

---

### Exercise 3: Count Elements
**Problem:** Write a function to count elements in a queue without destroying it.

**Test Cases:**
```
Input: [1, 2, 3, 4, 5]
Output: 5

Input: []
Output: 0

Input: [10]
Output: 1
```

**Hint:** Use the size() method or count while dequeuing and re-enqueuing.

---

### Exercise 4: Find Maximum Element
**Problem:** Find the maximum element in a queue.

**Test Cases:**
```
Input: [3, 7, 2, 9, 1]
Output: 9

Input: [5]
Output: 5

Input: [-1, -5, -3]
Output: -1
```

**Hint:** Dequeue all elements, track max, then enqueue back.

---

### Exercise 5: Display Queue in Reverse
**Problem:** Display queue elements in reverse order without modifying the queue.

**Test Cases:**
```
Input: [1, 2, 3, 4]
Output: [4, 3, 2, 1]
Original Queue: [1, 2, 3, 4] (unchanged)
```

**Hint:** Use a temporary stack or array.

---

## 🟡 LEVEL 2: INTERMEDIATE

### Exercise 6: Reverse Queue Using Recursion
**Problem:** Reverse a queue using recursion (no extra data structures).

**Test Cases:**
```
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
```

**Algorithm:**
```
1. If queue is empty, return
2. Dequeue front element
3. Recursively reverse remaining queue
4. Enqueue the dequeued element
```

**Code Template:**
```python
def reverse_queue_recursive(queue):
    if queue.is_empty():
        return
    
    # Your code here
    front = queue.dequeue()
    reverse_queue_recursive(queue)
    queue.enqueue(front)
```

---

### Exercise 7: Reverse First K Elements
**Problem:** Reverse only the first K elements of a queue.

**Test Cases:**
```
Input: [1, 2, 3, 4, 5], K = 3
Output: [3, 2, 1, 4, 5]

Input: [10, 20, 30, 40], K = 2
Output: [20, 10, 30, 40]
```

**Algorithm:**
```
1. Dequeue first K elements and push to stack
2. Pop from stack and enqueue (reverses first K)
3. Dequeue and enqueue remaining (n-K) elements
```

---

### Exercise 8: Interleave Queue
**Problem:** Interleave first half with second half of queue.

**Test Cases:**
```
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 4, 2, 5, 3, 6]

Input: [11, 12, 13, 14]
Output: [11, 13, 12, 14]
```

**Algorithm:**
```
1. Split queue into two halves
2. Dequeue from both alternately
3. Enqueue in interleaved manner
```

---

### Exercise 9: Sort a Queue
**Problem:** Sort a queue in ascending order.

**Test Cases:**
```
Input: [5, 1, 4, 2, 3]
Output: [1, 2, 3, 4, 5]

Input: [9, 3, 7, 1]
Output: [1, 3, 7, 9]
```

**Hint:** Use recursion or convert to array, sort, then back to queue.

---

### Exercise 10: Queue Using Two Stacks
**Problem:** Implement a queue using two stacks.

**Operations:** enqueue(), dequeue(), front()

**Algorithm:**
```
Stack1: For enqueue
Stack2: For dequeue

Enqueue: Push to Stack1
Dequeue: 
  - If Stack2 is empty, move all from Stack1 to Stack2
  - Pop from Stack2
```

**Code Template:**
```python
class QueueUsingStacks:
    def __init__(self):
        self.stack1 = []  # For enqueue
        self.stack2 = []  # For dequeue
    
    def enqueue(self, item):
        # Your code here
        pass
    
    def dequeue(self):
        # Your code here
        pass
```

---

## 🔴 LEVEL 3: ADVANCED

### Exercise 11: Sliding Window Maximum
**Problem:** Find maximum in each window of size K.

**Test Cases:**
```
Input: [1, 3, -1, -3, 5, 3, 6, 7], K = 3
Output: [3, 3, 5, 5, 6, 7]

Explanation:
Window [1, 3, -1] → Max = 3
Window [3, -1, -3] → Max = 3
Window [-1, -3, 5] → Max = 5
Window [-3, 5, 3] → Max = 5
Window [5, 3, 6] → Max = 6
Window [3, 6, 7] → Max = 7
```

**Algorithm:**
```
Use Deque (double-ended queue):
1. Store indices in deque
2. Remove elements outside window
3. Remove smaller elements from rear
4. Front of deque is maximum
```

---

### Exercise 12: First Negative in Window
**Problem:** Find first negative number in each window of size K.

**Test Cases:**
```
Input: [12, -1, -7, 8, -15, 30, 16, 28], K = 3
Output: [-1, -1, -7, -15, -15, 0]

Explanation:
Window [12, -1, -7] → First negative = -1
Window [-1, -7, 8] → First negative = -1
Window [-7, 8, -15] → First negative = -7
Window [8, -15, 30] → First negative = -15
Window [-15, 30, 16] → First negative = -15
Window [30, 16, 28] → First negative = 0 (none)
```

---

### Exercise 13: Rotten Oranges (BFS)
**Problem:** Find minimum time to rot all oranges.

**Grid Values:**
- 0 = Empty cell
- 1 = Fresh orange
- 2 = Rotten orange

**Rules:**
- Rotten orange rots adjacent fresh oranges in 1 minute
- Adjacent = up, down, left, right (not diagonal)

**Test Case:**
```
Input:
[
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
]

Output: 4 minutes

Explanation:
Minute 0: Initial state
Minute 1: (0,1) rots
Minute 2: (0,2) and (1,1) rot
Minute 3: (1,0) and (2,1) rot
Minute 4: (2,2) rots
```

**Algorithm:**
```
1. Add all rotten oranges to queue with time = 0
2. BFS: For each rotten orange, rot adjacent fresh ones
3. Add newly rotten oranges to queue with time + 1
4. Return maximum time
```

---

### Exercise 14: Design Circular Deque
**Problem:** Implement a circular double-ended queue with fixed size.

**Operations:**
- insertFront(value)
- insertLast(value)
- deleteFront()
- deleteLast()
- getFront()
- getRear()
- isEmpty()
- isFull()

**Test Case:**
```
CircularDeque deque = new CircularDeque(3);
deque.insertLast(1);   // [1]
deque.insertLast(2);   // [1, 2]
deque.insertFront(3);  // [3, 1, 2]
deque.insertFront(4);  // Full, returns false
deque.getRear();       // Returns 2
deque.isFull();        // Returns true
deque.deleteLast();    // [3, 1]
deque.insertFront(4);  // [4, 3, 1]
deque.getFront();      // Returns 4
```

---

### Exercise 15: LRU Cache
**Problem:** Implement Least Recently Used (LRU) cache.

**Operations:**
- get(key): Get value (returns -1 if not found)
- put(key, value): Insert or update value

**Rules:**
- Fixed capacity
- When full, remove least recently used item
- get() and put() should be O(1)

**Test Case:**
```
LRUCache cache = new LRUCache(2);
cache.put(1, 1);  // Cache: {1=1}
cache.put(2, 2);  // Cache: {1=1, 2=2}
cache.get(1);     // Returns 1, Cache: {2=2, 1=1}
cache.put(3, 3);  // Evicts 2, Cache: {1=1, 3=3}
cache.get(2);     // Returns -1 (not found)
cache.put(4, 4);  // Evicts 1, Cache: {3=3, 4=4}
cache.get(1);     // Returns -1 (not found)
cache.get(3);     // Returns 3
cache.get(4);     // Returns 4
```

**Hint:** Use Queue + HashMap (or Doubly Linked List + HashMap)

---

## 🎯 BONUS CHALLENGES

### Challenge 1: Design Hit Counter
**Problem:** Design a hit counter that counts hits in the past 5 minutes.

**Operations:**
- hit(timestamp): Record a hit
- getHits(timestamp): Get hits in past 5 minutes

---

### Challenge 2: Moving Average
**Problem:** Calculate moving average from data stream.

**Example:**
```
MovingAverage m = new MovingAverage(3);
m.next(1) = 1.0
m.next(10) = 5.5
m.next(3) = 4.67
m.next(5) = 6.0
```

---

### Challenge 3: Snake and Ladder
**Problem:** Find minimum dice throws to reach end of board.

**Input:** Board with snakes and ladders
**Output:** Minimum number of moves

---

## 📊 Progress Tracker

Track your progress:

```
Level 1 (Beginner):
[ ] Exercise 1: Basic Operations
[ ] Exercise 2: Check Empty
[ ] Exercise 3: Count Elements
[ ] Exercise 4: Find Maximum
[ ] Exercise 5: Display Reverse

Level 2 (Intermediate):
[ ] Exercise 6: Reverse Recursively
[ ] Exercise 7: Reverse First K
[ ] Exercise 8: Interleave Queue
[ ] Exercise 9: Sort Queue
[ ] Exercise 10: Queue Using Stacks

Level 3 (Advanced):
[ ] Exercise 11: Sliding Window Max
[ ] Exercise 12: First Negative
[ ] Exercise 13: Rotten Oranges
[ ] Exercise 14: Circular Deque
[ ] Exercise 15: LRU Cache

Bonus:
[ ] Challenge 1: Hit Counter
[ ] Challenge 2: Moving Average
[ ] Challenge 3: Snake and Ladder
```

---

## 💡 Tips for Success

1. **Start Simple:** Begin with Level 1, don't skip!
2. **Understand First:** Read problem 3 times before coding
3. **Draw Diagrams:** Visualize queue operations
4. **Test Edge Cases:** Empty queue, single element, full queue
5. **Time Yourself:** Try to solve in 15-30 minutes
6. **Review Solutions:** Even if you solve it, check other approaches
7. **Practice Daily:** Solve 1-2 problems every day
8. **Teach Others:** Explain your solution to someone

---

## 🎓 Learning Path

```
Week 1: Level 1 (Exercises 1-5)
Week 2: Level 2 (Exercises 6-10)
Week 3: Level 3 (Exercises 11-13)
Week 4: Level 3 (Exercises 14-15) + Bonus
```

---

## 🏆 You're Ready!

Remember:
- **Practice makes perfect**
- **Don't give up on hard problems**
- **Learn from mistakes**
- **Keep coding every day**

**You've got this! 💪 Now go become a DSA PRO!**
