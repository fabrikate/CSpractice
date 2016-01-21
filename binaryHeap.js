// max heap
// create a constructor function for all binary heaps
function BinaryHeap() {
  this.nodes = [];
}

BinaryHeap.prototype.insert = function (value) {
  this.nodes.push(value);
   // upHeap is a function declaring what index is parent and how to traverse the tree
  this.upHeap(this.nodes.length - 1);
  return value;
}

BinaryHeap.prototype.upHeap = function (index) {
  // parent is a function that identifies what the parent is
  var parent = Math.floor((index - 1) / 2);
  // if index is 0 you have traveled the tree so no swaps are needed.
  if (index === 0) {
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

BinaryHeap.prototype.downHeap = function (index) {
  var left = Math.floor(2 * index + 1);
  var right = Math.floor(2 * index + 2);
  var leftVal = this.nodes[left];
  var rightVal = this.nodes[right];

  if (index === 0) {
    return;
  }
  // check that values HAVE values
  if (!lefVal && !rightVal) {
    return;
  }
  // if the leftVal is the greatest
  if (this.nodes[index] < this.nodes[left] && this.nodes[right] < this.nodes[left] ) {
    var temp = this.nodes[index];
    this.nodes[index] = this.nodes[left];
    leftVal = temp;
  }
  // if the rightVal is the greatest
  if (this.nodes[index] < this.nodes[right] && this.nodes[left] < this.nodes[right]) {
    var temp = this.nodes[index];
    this.nodes[index] = this.nodes[right];
    this.nodes[right] = temp;
  }
    // do it again to make sure the binary tree is in order
    this.downHeap(left);
};
