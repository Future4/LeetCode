//二叉树的前序遍历
//1.递归法
var preorderTraversal = function (root) {
    let res = []
    function recursion(root) {
        if (!root) {
            return
        }
        res.push(root.val)
        recursion(root.left)
        recursion(root.right)
    }
    recursion(root)

    return res
}

//2.迭代法
var preorderTraversal = function (root) {
    let res = []
    let stk = []

    while (root || stk.length) {

        while (root) {
            res.push(root.val)
            stk.push(root) //入栈
            root = root.left
        }
        root = stk.pop() //最上面的出栈
        root = root.right
    }
    return res
}

//二叉树的中序遍历
//1.递归法
var inorderTraversal = function (root) {
    let res = []
    function recursion(root) {
        if (!root) {
            return
        }
        recursion(root.left)
        res.push(root.val)
        recursion(root.right)
    }
    recursion(root)

    return res
}

//2.迭代法
var inorderTraversal = function (root) {
    let res = []
    let stk = []

    while (root || stk.length) {

        while (root) {
            stk.push(root)
            root = root.left
        }
        root = stk.pop()
        res.push(root.val)
        root = root.right
    }

    return res
}

//二叉树的后序遍历
//1.递归法
var postorderTraversal = function (root) {
    let res = []
    function recursion(root) {
        if (!root) {
            return
        }
        recursion(root.left)
        recursion(root.right)
        res.push(root.val)

    }
    recursion(root)

    return res
}

//2.迭代法
var postorderTraversal = function (root) {
    let res = []
    let stk = []

 
}