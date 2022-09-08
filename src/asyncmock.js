

export const  getStock=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock)
        },1000)
    })
}


export const  getPedidoPorCodigo=(getPedidoPorCodigo)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock.filter(item=>item.codigo===getPedidoPorCodigo))
        },1000)
    })
}


export const  getPedidoPorId=(getPedidoPorId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(stock.filter(item=>item.id===getPedidoPorId))
        },2000)
    })
}