/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const result = [];
    function test (node) {
        if (node === null) {
            return;
        }
        test(node.left);
        if (node.val) {
            result.push(node.val);
        }
        test(node.right);
    }
    test(root);
    return result;
};