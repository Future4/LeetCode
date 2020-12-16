//方法一  递归
const arr = [1, 2, 3]

function params(arr) {
    let res = []
    var dfs = (path) => {
        if (path.length == arr.length) {
            res.push([...path])
            return
        }
        for (let i = 1; i <= arr.length; i++) {
            if (path.includes(i)) {
                continue
            }
            path.push(i)
            dfs(path)
            path.pop()
        }
    }
    dfs([])
    console.log(res)
    return res
}
params(arr)
