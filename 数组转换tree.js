
function create(list, parId) {
    function loop(parId) {
        let res = [];
        list.forEach(item => {
            const parentId = item.parentId
            if (parentId == parId) {
                item.children = loop(item.id)
                res.push(item)
            }
        })
        return res
    }
    return loop(parId)
}
const list = [
    { parentId: 0, text: '全部', id: 1 },
    { parentId: 1, text: '一级', id: 2 },
    { parentId: 2, text: '二级', id: 3 },
    { parentId: 1, text: '一级', id: 4 },
    { parentId: 2, text: '二级', id: 5 },
    { parentId: 3, text: '三级', id: 6 },
]
console.log(create(list, 0))