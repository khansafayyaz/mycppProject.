# 🚀 QUEUE QUICK REFERENCE CHEAT SHEET

## 📌 One-Line Definition
**Queue = FIFO (First In, First Out) - Like a line at a store!**

---

## 🎨 Visual Representation

```
┌─────────────────────────────────────────┐
│         QUEUE STRUCTURE                 │
└─────────────────────────────────────────┘

Front                              Rear
  ↓                                  ↓
┌───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │
└───┴───┴───┴───┴───┘
  ↑                   ↑
Remove              Add
(Dequeue)        (Enqueue)


OPERATIONS:
───────────

1. ENQUEUE (Add to rear):
   Before: [1][2][3]
   Enqueue(4)
   After:  [1][2][3][4]
                    ↑
                  Added

2. DEQUEUE (Remove from front):
   Before: [1][2][3][4]
           ↓
   Dequeue() → Returns 1
   After:  [2][3][4]

3. FRONT/PEEK:
   Queue: [1][2][3]
          ↑
   Front() → Returns 1 (no change)

4. REAR:
   Queue: [1][2][3]
                 ↑
   Rear() → Returns 3 (no change)
```

---

## 🔥 Essential Operations

| Operation | Description | Time | Code (Python) | Code (JavaScript) |
|-----------|-------------|------|---------------|-------------------|
| **Enqueue** | Add to rear | O(1) | `queue.append(x)` | `queue.push(x)` |
| **Dequeue** | Remove from front | O(1)* | `queue.popleft()` | `queue.shift()` |
| **Front** | View front | O(1) | `queue[0]` | `queue[0]` |
| **Rear** | View rear | O(1) | `queue[-1]` | `queue[queue.length-1]` |
| **isEmpty** | Check empty | O(1) | `len(queue)==0` | `queue.length===0` |
| **Size** | Get size | O(1) | `len(queue)` | `queue.length` |

*O(1) with deque/linked list, O(n) with array

---

## 💻 Quick Implementation

### Python (Best Method):
```python
from collections import deque

# Create queue
queue = deque()

# Operations
queue.append(10)        # Enqueue
queue.append(20)
item = queue.popleft()  # Dequeue → 10
front = queue[0]        # Front
rear = queue[-1]        # Rear
size = len(queue)       # Size
empty = len(queue) == 0 # isEmpty
```

### JavaScript (Best Method):
```javascript
// Create queue
class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
    
    enqueue(item) {
        this.items[this.rear] = item;
        this.rear++;
    }
    
    dequeue() {
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    isEmpty() {
        return this.rear - this.front === 0;
    }
}

// Usage
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.dequeue(); // → 10
```

---

## 🎯 Common Patterns

### Pattern 1: Process All Elements
```python
while not queue.is_empty():
    item = queue.dequeue()
    # Process item
```

### Pattern 2: Reverse Queue
```python
stack = []
while not queue.is_empty():
    stack.append(queue.dequeue())
while stack:
    queue.enqueue(stack.pop())
```

### Pattern 3: BFS (Breadth-First Search)
```python
queue = deque([start_node])
visited = set([start_node])

while queue:
    node = queue.popleft()
    # Process node
    
    for neighbor in node.neighbors:
        if neighbor not in visited:
            visited.add(neighbor)
            queue.append(neighbor)
```

### Pattern 4: Sliding Window
```python
from collections import deque

def sliding_window(arr, k):
    dq = deque()
    result = []
    
    for i in range(len(arr)):
        # Remove elements outside window
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        
        # Remove smaller elements
        while dq and arr[dq[-1]] < arr[i]:
            dq.pop()
        
        dq.append(i)
        
        if i >= k - 1:
            result.append(arr[dq[0]])
    
    return result
```

---

## 🔄 Queue vs Other Data Structures

```
┌──────────┬──────────┬──────────┬──────────┐
│ Feature  │  Queue   │  Stack   │  Array   │
├──────────┼──────────┼──────────┼──────────┤
│ Order    │   FIFO   │   LIFO   │  Index   │
│ Add      │  O(1)    │  O(1)    │  O(1)*   │
│ Remove   │  O(1)    │  O(1)    │  O(n)    │
│ Access   │  Front   │   Top    │  Any     │
│ Use Case │  BFS     │   DFS    │  Random  │
└──────────┴──────────┴──────────┴──────────┘
```

---

## 🎪 Types of Queues

### 1. Simple Queue (Linear)
```
Front → [1][2][3][4] ← Rear
```

### 2. Circular Queue
```
     [1][2]
    ↙     ↘
  [5]     [3]
    ↖     ↗
     [4]
```

### 3. Priority Queue
```
High Priority → [9][8][7]
Low Priority  → [3][2][1]
```

### 4. Deque (Double-Ended)
```
    ↓           ↓
  [1][2][3][4][5]
    ↑           ↑
Add/Remove   Add/Remove
```

---

## 🏆 Top 10 Queue Problems

1. ✅ Implement Queue using Array/Linked List
2. ✅ Reverse a Queue
3. ✅ Generate Binary Numbers (1 to n)
4. ✅ First Non-Repeating Character
5. ✅ Implement Stack using Queues
6. ✅ Reverse First K Elements
7. ✅ Sliding Window Maximum
8. ✅ Rotten Oranges (BFS)
9. ✅ LRU Cache
10. ✅ Level Order Tree Traversal

---

## ⚡ Time Complexity Summary

```
┌─────────────────┬──────────┬──────────────┬──────────────┐
│   Operation     │  Array   │ Linked List  │   Deque      │
├─────────────────┼──────────┼──────────────┼──────────────┤
│ Enqueue         │   O(1)   │     O(1)     │     O(1)     │
│ Dequeue         │   O(n)   │     O(1)     │     O(1)     │
│ Front           │   O(1)   │     O(1)     │     O(1)     │
│ Rear            │   O(1)   │     O(1)     │     O(1)     │
│ isEmpty         │   O(1)   │     O(1)     │     O(1)     │
│ Size            │   O(1)   │     O(1)     │     O(1)     │
└─────────────────┴──────────┴──────────────┴──────────────┘

🏆 WINNER: Linked List or Deque (all O(1) operations!)
```

---

## 🐛 Common Mistakes to Avoid

❌ **Mistake 1:** Using array.shift() in JavaScript (O(n))
✅ **Fix:** Use object-based queue or linked list

❌ **Mistake 2:** Forgetting to check isEmpty before dequeue
✅ **Fix:** Always check: `if (!queue.isEmpty())`

❌ **Mistake 3:** Confusing queue with stack
✅ **Fix:** Queue = FIFO, Stack = LIFO

❌ **Mistake 4:** Not handling edge cases
✅ **Fix:** Test with: empty queue, single element, full queue

❌ **Mistake 5:** Using wrong data structure
✅ **Fix:** Use queue for BFS, stack for DFS

---

## 🎓 When to Use Queue?

### ✅ USE QUEUE:
- Breadth-First Search (BFS)
- Level-order tree traversal
- Scheduling tasks (FIFO)
- Printer queue
- Keyboard buffer
- Process scheduling
- Handling requests (web server)
- Asynchronous data transfer

### ❌ DON'T USE QUEUE:
- Need random access → Use Array
- Need LIFO behavior → Use Stack
- Need fast search → Use Hash Table
- Need sorted data → Use Heap/BST

---

## 📝 Code Templates

### Template 1: Basic Queue Class
```python
class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
    
    def front(self):
        if not self.is_empty():
            return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
```

### Template 2: BFS
```python
def bfs(graph, start):
    queue = deque([start])
    visited = set([start])
    
    while queue:
        node = queue.popleft()
        print(node)  # Process node
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

### Template 3: Level Order Traversal
```python
def level_order(root):
    if not root:
        return []
    
    queue = deque([root])
    result = []
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result
```

---

## 🎯 Interview Tips

1. **Always ask:**
   - What's the expected size?
   - Can it be empty?
   - What to return on empty?
   - Any constraints?

2. **Mention complexity:**
   - "This solution is O(n) time and O(1) space"

3. **Test edge cases:**
   - Empty queue
   - Single element
   - Full queue (if fixed size)

4. **Optimize:**
   - Start with simple solution
   - Then optimize if needed

5. **Explain approach:**
   - Draw diagram
   - Walk through example
   - Then code

---

## 🔗 Related Topics

- **Stack** (LIFO structure)
- **Deque** (Double-ended queue)
- **Priority Queue** (Heap-based)
- **Circular Buffer**
- **BFS Algorithm**
- **Graph Traversal**
- **Tree Level Order**

---

## 📚 Practice Resources

### Online Judges:
- LeetCode: Queue tag (50+ problems)
- HackerRank: Queue section
- GeeksforGeeks: Queue problems
- CodeForces: Queue problems

### Recommended Problems:
1. LeetCode 232: Implement Queue using Stacks
2. LeetCode 622: Design Circular Queue
3. LeetCode 933: Number of Recent Calls
4. LeetCode 239: Sliding Window Maximum
5. LeetCode 994: Rotting Oranges

---

## 🎉 Quick Win Checklist

```
Day 1:
[ ] Understand FIFO concept
[ ] Implement basic queue
[ ] Test all operations

Day 2:
[ ] Solve 3 easy problems
[ ] Implement circular queue

Day 3:
[ ] Learn BFS with queue
[ ] Solve 2 medium problems

Day 4:
[ ] Implement queue using stacks
[ ] Solve sliding window problem

Day 5:
[ ] Review all concepts
[ ] Solve 1 hard problem
```

---

## 💡 Remember

```
┌─────────────────────────────────────┐
│  "Queue is like waiting in line -  │
│   First Come, First Served!"       │
│                                     │
│  Master it by:                      │
│  1. Understanding FIFO              │
│  2. Practicing daily                │
│  3. Solving problems                │
│  4. Teaching others                 │
└─────────────────────────────────────┘
```

---

## 🚀 Next Steps

1. ✅ Implement queue in your favorite language
2. ✅ Solve 5 easy problems
3. ✅ Learn BFS algorithm
4. ✅ Solve 5 medium problems
5. ✅ Master circular queue
6. ✅ Solve 3 hard problems
7. ✅ Build a real project using queues

---

**You're now ready to become a Queue Master! 🏆**

**Keep this cheat sheet handy and practice daily! 💪**
