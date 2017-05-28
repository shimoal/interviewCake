var Tree = function(val){
  this.val = val;
  this.right = null;
  this.left = null
}

Tree.prototype.addNode = function(val) {
  var tree = new Tree(val);
  if (val < this.val) {
    if (!this.left) {
      this.left = new Tree(val);
      return;
    } else {
      this.left.addNode(val);
    }

  }

  if(val > this.val) {
    if (!this.right) {
      this.right = new Tree(val);
      return;
    } else {
      this.right.addNode(val);
    }
  }
}

module.exports = Tree;