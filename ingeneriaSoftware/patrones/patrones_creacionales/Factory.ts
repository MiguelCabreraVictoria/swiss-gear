/**
 * Patrón de diseño Factory
 * 
 * proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.
 * 
 * El patron Factory suguiere que en kugar de llamar al operador new para crear un objeto para construir objetos directamente se utilice un metodo fabrica especial.
 * 
 * Los objetos creados por el metodo fabrica se conocen como productos. 
 * 
 * ahora puedes sobrescribir el metodo fabrica en una subclase y cambiar la clase de productos que se creados por el metodo fabrica. la limitacion es que las subclases solo pueden devolver productos de distintos tipos si dichos productos tienen una clase base o interfaz en comun.
 * 
 * El codigo factory no encuentra diferencias entre los productos devueltos por varias subclases y trata a todos los productos como la clase abtracta
 * 
 * 
 * Estructura del patron Factory
 * 
 * 1. Producto: declara la interfaz que es comun a todos los objetos que se puede producir la clase creadora y sus subclases. 
 * 2. Productos Concretos: son distontas implemmentaciones de la interfaz producto.
 * 3. Creador: declara el metodo fabrica que devuelve nuevos objetos de producto.   
 *             - Es importante que el tipo de retorno de este metodo coincida con la interfaz del producto
 *             - Puedes declar el metodo factory como abstracto para forzar a todas las subclases a implementar sus propias versiones del metodo 
 *             - Como alternativa el metodo factory base puede devolver algun tipo de producto por defecto
 * 
 */

abstract class Notificacion {

    public abstract factoryMethod(): Mensaje;  


    /**
     * La funcion principal del creador no es crear productos, usualmente contiene alguna logica de negocio que depende de los productos que crea, regresando el metodo factory. 
     * 
     * Las subclases indirectamente pueden cambiar la logica de negocio al sobrescribir el metodo factory y regresar un producto distinto del producto en si.  
     * 
     * 
     */

}


/**
 * Los creadores concretos sobrescriben el metodo factory para cambiar el tipo de producto que crean.
 */
class ConcreteSMS extends Notificacion {

    /**
     * Nota que el siganture del metodo sigue usando el tipo abstracto de producto, aunque el producto concreto es realmente devuelto por el metodo.
     *  De esta forma el creador se mantiene independiente de las clases concretas de productos con los que trabaja.
     * 
     */

    public factoryMethod(): Mensaje {
        return new SMS();
    
    }
}

class ConcreteWhatsApp extends Notificacion {
    
        public factoryMethod(): Mensaje {
            return new WhatsApp();
        }
    }

/** 
 * La interface del producto declara las operaciones que todos los productos concretos deben implementar.
 */

interface Mensaje { 

    enviar(mensaje: string): void;
}

/**
 * Los productos concretos proveen varias implementaciones de la interfaz del producto.
 */

class SMS implements Mensaje {
    
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

class WhatsApp implements Mensaje {
    
    enviar(mensaje: string): void {
        console.log(`Enviando WhatsApp: ${mensaje}`);
    }
}


/**
 * El codigo cliente trabaja con una instancia de una subclase de creador concreto, aunque a traves de su interfaz base. 
 * Mientras el cliente continua trabajando con el creador a traves de la interfaz base, puedes pasar cualquier subclase de creador al cliente.
 */

function clientCode(creator: Notificacion, texto: string) {
    console.log('Cliente: No estoy seguro de la clase creadora, pero funciona');
    const mensaje = creator.factoryMethod();
    mensaje.enviar(texto);
}

clientCode(new ConcreteSMS(), 'Hola');  
clientCode(new ConcreteWhatsApp(), 'WA');