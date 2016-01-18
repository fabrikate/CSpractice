// max heap
// create a constructor function for all binary heaps
function BinaryHeap() {
  this.nodes = [];
}

BinaryHeap.prototype.insert = function (value) {
  this.nodes.push(value);
   // __upHeap is a function declaring what index is parent and how to traverse the tree
  this.upHeap(this.nodes.length - 1);
  return value;
}

BinaryHeap.prototype.upHeap = function (index) {
  // parent is a function that identifies what the parent is
  var parent = this.parent(index);
  // if there isn't a parent, return out of the function
  if (parent < 0) {
    return;
  }
  // is the parent the largest num?
  if (this.nodes[index] > this.nodes[parent]) {
    temp = this.nodes[parent];
    this.nodes[parent] = this.nodes[index];
    this.nodes[index] = temp;
    // recursivly call the function again to check
    this.upHeap(parent);
  }
  else {
    index -= index;
    if (index >= 0) {
      console.log( this.nodes );
      this.upHeap(index);
    }
  }
};

// take a number out.
BinaryHeap.prototype.extract = function () {
  //get the parent
  var value = this.nodes[0];
  // remove the first value and makes the last node the parent
  this.nodes[0] = this.nodes.pop();
  this.downHeap(0);
  return value;
}

BinaryHeap.prototype.parent = function (index) {
  return Math.floor((index - 1) / 2);
}

BinaryHeap.prototype.getLeft = function (index) {
  return 2 * index + 1;
}

BinaryHeap.prototype.getRight = function (index) {
  return 2 * index + 2;
}

BinaryHeap.prototype.downHeap = function (index) {
  var left = this.getLeft(index);
  var right = this.getRight(index);
  var leftVal = this.nodes[left] || -Infinity;
  var rightVal = this.nodes[right] || -Infinity;

  // check that values HAVE values
  if (leftVal == -Infinity && rightVal == -Infinity) {
    return;
  }
  // if the leftVal is the greatest
  if (this.nodes[index] < this.nodes[left] && this.nodes[right] < this.nodes[left] ) {
    temp = this.nodes[index];
    this.nodes[index] = this.nodes[left];
    leftVal = temp;
  }
    // do it again to make sure the binary tree is in order
    this.downHeap(left);
};
