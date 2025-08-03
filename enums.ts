enum tipo_pedido{
    Pendente,
    Enviado,
    Entregue,
    Cancelado
}
const acoes = {
    [tipo_pedido.Pendente]: () => console.log("Pedido em preparo!"),
    [tipo_pedido.Enviado]: () => console.log("Pedido enviado!"),
    [tipo_pedido.Entregue]: () => console.log("Pedido entregue!"),
    [tipo_pedido.Cancelado]: () => console.log("Pedido cancelado..."),
}

function mensagem(tipo: tipo_pedido){
    const fala = acoes[tipo]
    if (fala){
        fala()
    } else {
        console.log("status desconhecido")
    }
}
mensagem(tipo_pedido.Pendente)
mensagem(999 as tipo_pedido)
mensagem(tipo_pedido.Cancelado)