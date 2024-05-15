/*
Asegura que una clase tenga una unica instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

Implementacion de Singleton:
	- Hacer privado el constructor por defecto para evitar que otros objetos utilicen el operador new con la clase Singleton 
	- Crear un metodo de creacion estatico que actue como constructor. Este metodo invoca el constructor privado para crear un objeto y lo guarda en un campo estatico. Las siguientes llamadas a este metodo devuelven el objto almacenado en cache. 
	- El objeto Singleton solo se inicializa cuando se require por primera vez

Si el codigo tiene acceso a la clase singleton, podra invocar su metodo estatico. De esta manera, cada vez que se invoque este metodo, siempre devolvera el mismo metodo.

-- Problemas que resulve --

	- Garantiza que una clase tenga una unica instancia: El motivo mas habitual es controlar el acceso a algun recurso compartido
	- Propocionar un punto de acceso global a dicha instancia: Al igual que una variable global, el patron singleton nos permite acceder a un objeto desde cualquier parte del programa. Evitando que otro codigo sobreescriba esa instancia




#Metodo Estatico: metodo que pertenece a la clase en si mimsa en lugar de a instancias individuales de esa clase.
*/

class Singleton {
    static #instance;

    constructor() {
        if (Singleton.#instance) {
            console.log("La instancia Singleton ya existe");
            return Singleton.#instance;
        } else {
            console.log("Creando una instancia Singleton");
            Singleton.#instance = this;
        }
    }

    static getInstance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }
}

const singleton1 = Singleton.getInstance();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2)
