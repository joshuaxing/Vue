export const formatRouterTree = (data) => {
    const parents = data.filter((item) => item.pid === 0)
    const children = data.filter((item) => item.pid !== 0)
    dataToTree(parents, children)
    function dataToTree(parents, children) {
        parents.map((p) => {
            children.map((c, i) => {
                if (p.id === c.pid) {
                    if (p.children) {
                      p.children.push(c)
                    } else {
                      p.children = [c]
                    }
                    // 递归
                    const _c = JSON.parse(JSON.stringify(children))
                    _c.splice(i, 1)
                    dataToTree([c], _c)
                }
            })
        })
    }

    return parents
}