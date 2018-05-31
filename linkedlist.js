function linkedList() {
    this.head = null;
    this.length = 0;
}

function node(value) {
    this.value = value;
    this.next = null;
}

linkedList.prototype.insertAtTail = function(value) {
    const newNode = new node(value);
    
    if(!this.head){
        this.head = newNode;  
        console.log(this.head);
    } 
    else {
        let current = this.head;
        while(current.next != null) {
        
            current = current.next;    
        }
        
        current.next = newNode;
        
        
    }

    this.length++;
}

linkedList.prototype.traverse = function() {
    if(!this.head ) return false;
    
    let current = this.head;
    console.log(`THE VALUES ARE:`);
    while(current != null) {
        console.log(current.value);
        current = current.next;
    }
}

linkedList.prototype.insertAtN = function(value,n) {
  if(!this.head || n < 0 || n > this.length) return false;

  const newNode = new node(value);
  
  if(n==0) {
    newNode.next = this.head;
    this.head = newNode;
  }

  else if(n == this.length) {
    this.insertAtTail(value);
  }

  else {
    let count = 0;
    let current = this.head;
    let prev = null;
    
    while(count < n ) {
      prev = current;
      current = current.next;
      count++;
    }
    
    prev.next = newNode;
    newNode.next = current;
    
  }
}

// var a = new linkedList();

// a.insertAtTail(1);
// a.insertAtTail(2);
// a.insertAtTail(3);
// a.insertAtN(400,2)

// a.traverse();










