interface Veiculo{
    acelerar(): void
    frear(): void
    estado(): void
}

class veiculo_base implements Veiculo{
    modelo: string
    velocidade: number
    constructor(modelo: string, velocidade: number){
        this.modelo = modelo
        this.velocidade = velocidade
    }
    acelerar(){
    this.velocidade += 30
    console.log(`indo rápido! agora ${this.constructor.name} está em ${this.velocidade}KMH \n`)
    }
    frear(){
    this.velocidade -= 30
    console.log(`indo mais devagar... agora ${this.constructor.name} está em ${this.velocidade}KMH \n`)
    }
    estado(){
     console.log(`modelo: ${this.modelo} \n velocidade atual: ${this.velocidade} \n`)   
    }
}
class veiculo_terrestre extends veiculo_base{
   rodas: number
    constructor(modelo: string, velocidade: number, rodas: number){
        super(modelo, velocidade)
        this.rodas = rodas
    } 
}
class veiculo_aereo extends veiculo_base{
   altitude: number
    constructor(modelo: string, velocidade: number, altitude: number){
        super(modelo, velocidade)
        this.altitude = altitude
    } 
}
class Carro extends veiculo_terrestre{
    constructor(modelo: string, velocidade: number){
        super(modelo, velocidade, 4)
    }
}
class Moto extends veiculo_terrestre{
    constructor(modelo: string, velocidade: number){
        super(modelo, velocidade, 2)
    }
}
class Aviao extends veiculo_aereo{
    constructor(modelo: string, velocidade: number){
        super(modelo, velocidade, 4000)
    }
}
class Jato extends veiculo_aereo{
    constructor(modelo: string, velocidade: number){
        super(modelo, velocidade, 2000)
    }
}
let veiculos: Veiculo[] = [
    new Carro("Ferrari", 120),
    new Moto("Ninja", 100),
    new Aviao("Boing 737", 850),
    new Jato("Pilatus PC-24.", 1300)
]
for(let veiculo of veiculos){
     veiculo.estado();
     veiculo.acelerar();
     veiculo.frear();
}