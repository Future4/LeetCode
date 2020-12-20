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


const rootTree = {
    val: 15,
    left: {
        val: 6,
        left: {
            val: 3,
            left: {
                val: 2
            },
            right: {
                val: 2
            },
        },
        right: {
            val: 7,
            right: {
                val: 13,
                left: {
                    val: 9
                }
            }
        },
    },
    right: {
        val: 18,
        left: { val: 17 },
        right: { val: 20 },
    },
}
//查询二叉树 
//递归
function treeSearch(rootTree, k) {
    if (!rootTree || rootTree.val == k) {
        return rootTree
    }
    if (rootTree.val < k) {
        return treeSearch(rootTree.right, k)
    } else {
        return treeSearch(rootTree.left, k)
    }
}

//迭代
function treeSearch(rootTree, k) {
    while (rootTree && rootTree.val != k) {
        if (rootTree.val < k) {
            rootTree = rootTree.right
        } else {
            rootTree = rootTree.left
        }
    }
}


//插入二叉树
function treeInsert(rootTree, z) {
    let y;
    let x = rootTree
    while (x) {
        y = x
        if (z.val < x.val) {
            x = x.left
        } else {
            x = x.right
        }
    }
    if (z.val < y.val) {
        y.left = z
    } else {
        y.right = z
    }
    console.log(y, z, rootTree)
    return y
}
treeInsert(rootTree, { val: 16 })


