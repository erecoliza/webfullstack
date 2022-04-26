class User {
    constructor(email, nombre) {
        this.email = email;
        this.nombre = nombre;
    }
    login() {
        console.log(this.nombre, 'Se ha logeado');
        return this;
    }
    logout() {
        console.log(this.nombre, 'Se ha deslogeado');
        return this;
    }
}

const user1 = new User('robert@gmail.com', 'Robert');
const user2 = new User('elizabeth@gmail.com', 'Elizabeth');

console.log(user1.login().logout());

class User {
    constructor(email, nombre) {
        this.email = email;
        this.nombre = nombre;
    }
    login() {
        console.log(this.nombre, 'Se ha logeado');
        return this;
    }
    logout() {
        console.log(this.nombre, 'Se ha deslogeado');
        return this;
    }
}

class Admin extends User {
    accederReportesAnaliticos() {
        console.log('Tiene todos los permisos disponibles');
        return this;
    }
}

class UserPremium extends User {
    evitarAnuncios() {
        console.log('Puede disfrutar de los videos sin publicidad');
        return this;
    }
}

class UserPremiumNivelUno extends UserPremium {
    constructor(email, nombre, numeroDeTarjeta, nroDeAfiliado) {
        super(email, nombre);
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.numeroDeAfiliado = nroDeAfiliado;
    }
}

const user1 = new UserPremiumNivelUno('robert@gmail.com', 'Robert', '45200 555 9378', '454632');
const user2 = new Admin('elizabeth@gmail.com', 'Elizabeth');
const user3 = new UserPremium('lucia@gmail.com', 'Lucia');

console.log(user1.login().logout());
console.log(user2.accederReportesAnaliticos());
console.log(user3.evitarAnuncios());