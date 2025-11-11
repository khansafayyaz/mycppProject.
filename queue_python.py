"""
QUEUE DATA STRUCTURE - COMPLETE GUIDE
=====================================
Author: DSA Learning Path
Language: Python
"""

# ============================================
# METHOD 1: Queue using Python List
# ============================================

class QueueUsingList:
    """
    Simple Queue implementation using Python list
    Time Complexity:
    - Enqueue: O(1)
    - Dequeue: O(n) - because we remove from front
    """
    
    def __init__(self):
        self.queue = []
    
    def enqueue(self, item):
        """Add item to the rear of queue"""
        self.queue.append(item)
        print(f"Enqueued: {item}")
    
    def dequeue(self):
        """Remove and return item from front of queue"""
        if self.is_empty():
            return "Queue is Empty!"
        item = self.queue.pop(0)  # Remove from front
        print(f"Dequeued: {item}")
        return item
    
    def front(self):
        """Return front element without removing"""
        if self.is_empty():
            return "Queue is Empty!"
        return self.queue[0]
    
    def rear(self):
        """Return rear element without removing"""
        if self.is_empty():
            return "Queue is Empty!"
        return self.queue[-1]
    
    def is_empty(self):
        """Check if queue is empty"""
        return len(self.queue) == 0
    
    def size(self):
        """Return size of queue"""
        return len(self.queue)
    
    def display(self):
        """Display all elements"""
        if self.is_empty():
            print("Queue is Empty!")
        else:
            print(f"Queue: {self.queue}")


# ============================================
# METHOD 2: Queue using collections.deque
# ============================================

from collections import deque

class QueueUsingDeque:
    """
    Efficient Queue implementation using deque
    Time Complexity:
    - Enqueue: O(1)
    - Dequeue: O(1) - Much better!
    """
    
    def __init__(self):
        self.queue = deque()
    
    def enqueue(self, item):
        self.queue.append(item)
        print(f"Enqueued: {item}")
    
    def dequeue(self):
        if self.is_empty():
            return "Queue is Empty!"
        item = self.queue.popleft()  # O(1) operation
        print(f"Dequeued: {item}")
        return item
    
    def front(self):
        if self.is_empty():
            return "Queue is Empty!"
        return self.queue[0]
    
    def rear(self):
        if self.is_empty():
            return "Queue is Empty!"
        return self.queue[-1]
    
    def is_empty(self):
        return len(self.queue) == 0
    
    def size(self):
        return len(self.queue)
    
    def display(self):
        if self.is_empty():
            print("Queue is Empty!")
        else:
            print(f"Queue: {list(self.queue)}")


# ============================================
# METHOD 3: Queue using Linked List
# ============================================

class Node:
    """Node for Linked List"""
    def __init__(self, data):
        self.data = data
        self.next = None


class QueueUsingLinkedList:
    """
    Queue implementation using Linked List
    Time Complexity:
    - Enqueue: O(1)
    - Dequeue: O(1)
    Space: O(n) where n is number of elements
    """
    
    def __init__(self):
        self.front_node = None
        self.rear_node = None
        self.length = 0
    
    def enqueue(self, item):
        """Add item to rear"""
        new_node = Node(item)
        
        if self.rear_node is None:  # Queue is empty
            self.front_node = self.rear_node = new_node
        else:
            self.rear_node.next = new_node
            self.rear_node = new_node
        
        self.length += 1
        print(f"Enqueued: {item}")
    
    def dequeue(self):
        """Remove item from front"""
        if self.is_empty():
            return "Queue is Empty!"
        
        item = self.front_node.data
        self.front_node = self.front_node.next
        
        if self.front_node is None:  # Queue became empty
            self.rear_node = None
        
        self.length -= 1
        print(f"Dequeued: {item}")
        return item
    
    def front(self):
        if self.is_empty():
            return "Queue is Empty!"
        return self.front_node.data
    
    def rear(self):
        if self.is_empty():
            return "Queue is Empty!"
        return self.rear_node.data
    
    def is_empty(self):
        return self.front_node is None
    
    def size(self):
        return self.length
    
    def display(self):
        if self.is_empty():
            print("Queue is Empty!")
            return
        
        current = self.front_node
        elements = []
        while current:
            elements.append(current.data)
            current = current.next
        print(f"Queue: {elements}")


# ============================================
# METHOD 4: Circular Queue (Fixed Size)
# ============================================

class CircularQueue:
    """
    Circular Queue with fixed size
    Efficient use of space - reuses empty positions
    """
    
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = -1
        self.rear = -1
        self.count = 0
    
    def enqueue(self, item):
        if self.is_full():
            print("Queue is Full!")
            return False
        
        if self.front == -1:  # First element
            self.front = 0
        
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = item
        self.count += 1
        print(f"Enqueued: {item}")
        return True
    
    def dequeue(self):
        if self.is_empty():
            return "Queue is Empty!"
        
        item = self.queue[self.front]
        
        if self.front == self.rear:  # Only one element
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity
        
        self.count -= 1
        print(f"Dequeued: {item}")
        return item
    
    def front_element(self):
        if self.is_empty():
            return "Queue is Empty!"
        return self.queue[self.front]
    
    def rear_element(self):
        if self.is_empty():
            return "Queue is Empty!"
        return self.queue[self.rear]
    
    def is_empty(self):
        return self.count == 0
    
    def is_full(self):
        return self.count == self.capacity
    
    def size(self):
        return self.count
    
    def display(self):
        if self.is_empty():
            print("Queue is Empty!")
            return
        
        elements = []
        i = self.front
        for _ in range(self.count):
            elements.append(self.queue[i])
            i = (i + 1) % self.capacity
        print(f"Queue: {elements}")


# ============================================
# DEMONSTRATION & TESTING
# ============================================

def demo_queue_operations():
    """Demonstrate all queue operations"""
    
    print("\n" + "="*50)
    print("QUEUE USING LIST")
    print("="*50)
    q1 = QueueUsingList()
    q1.enqueue(10)
    q1.enqueue(20)
    q1.enqueue(30)
    q1.display()
    print(f"Front: {q1.front()}")
    print(f"Rear: {q1.rear()}")
    print(f"Size: {q1.size()}")
    q1.dequeue()
    q1.display()
    
    print("\n" + "="*50)
    print("QUEUE USING DEQUE (RECOMMENDED)")
    print("="*50)
    q2 = QueueUsingDeque()
    q2.enqueue("Apple")
    q2.enqueue("Banana")
    q2.enqueue("Cherry")
    q2.display()
    print(f"Front: {q2.front()}")
    q2.dequeue()
    q2.display()
    
    print("\n" + "="*50)
    print("QUEUE USING LINKED LIST")
    print("="*50)
    q3 = QueueUsingLinkedList()
    q3.enqueue(100)
    q3.enqueue(200)
    q3.enqueue(300)
    q3.display()
    q3.dequeue()
    q3.display()
    
    print("\n" + "="*50)
    print("CIRCULAR QUEUE")
    print("="*50)
    q4 = CircularQueue(5)
    q4.enqueue(1)
    q4.enqueue(2)
    q4.enqueue(3)
    q4.display()
    q4.dequeue()
    q4.enqueue(4)
    q4.enqueue(5)
    q4.enqueue(6)
    q4.display()


# ============================================
# COMMON QUEUE PROBLEMS
# ============================================

def reverse_queue(queue):
    """Reverse a queue using stack"""
    stack = []
    
    # Transfer all elements to stack
    while not queue.is_empty():
        stack.append(queue.dequeue())
    
    # Transfer back to queue (now reversed)
    while stack:
        queue.enqueue(stack.pop())
    
    return queue


def generate_binary_numbers(n):
    """Generate binary numbers from 1 to n using queue"""
    from collections import deque
    
    result = []
    queue = deque()
    queue.append("1")
    
    for _ in range(n):
        binary = queue.popleft()
        result.append(binary)
        
        # Generate next binary numbers
        queue.append(binary + "0")
        queue.append(binary + "1")
    
    return result


def first_non_repeating_character(stream):
    """Find first non-repeating character in stream"""
    from collections import deque, defaultdict
    
    queue = deque()
    freq = defaultdict(int)
    result = []
    
    for char in stream:
        freq[char] += 1
        queue.append(char)
        
        # Remove repeating characters from front
        while queue and freq[queue[0]] > 1:
            queue.popleft()
        
        if queue:
            result.append(queue[0])
        else:
            result.append('#')
    
    return result


def demo_queue_problems():
    """Demonstrate common queue problems"""
    
    print("\n" + "="*50)
    print("QUEUE PROBLEMS")
    print("="*50)
    
    # Problem 1: Generate Binary Numbers
    print("\n1. Generate Binary Numbers from 1 to 10:")
    binary_nums = generate_binary_numbers(10)
    print(binary_nums)
    
    # Problem 2: First Non-Repeating Character
    print("\n2. First Non-Repeating Character in Stream:")
    stream = "aabccxb"
    result = first_non_repeating_character(stream)
    for i, char in enumerate(stream):
        print(f"After '{char}': {result[i]}")


# ============================================
# MAIN EXECUTION
# ============================================

if __name__ == "__main__":
    print("\n🎯 QUEUE DATA STRUCTURE - COMPLETE GUIDE 🎯\n")
    
    # Run demonstrations
    demo_queue_operations()
    demo_queue_problems()
    
    print("\n" + "="*50)
    print("✅ ALL DEMONSTRATIONS COMPLETED!")
    print("="*50)
