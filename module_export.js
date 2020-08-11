export let avg = (sum_val) => {

    const avg_parent = arr.length

    return (sum_val / avg_parent)
}

export let calculate = (op) => {
    var rtnVal = 0

    switch (op) {
        case '+':
            self.arr.forEach((num) => { rtnVal += num })
            break
        case '*':
            rtnVal++
            self.arr.forEach((num) => { rtnVal *= num })
            break
    }

    return rtnVal
}