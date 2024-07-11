/** 
 * 
 * Abstract Factory  
 * 
 * una clase abstracta es una clase que no puede ser implementada por si misma y que requiere que sus metodos sean implementados por sus subclases.
 * 
 * es un patron de diseño creacional que te permite producir familias de objetos relacionados sin especificar sus clases concretas.
 * 
 * Declarar de forma explicita interfaces para cada producto diferente de la familia de productos  
 * Despues podemos hacer que todas las variantes de los productos sigan esas interfaces.
 * Declarar la fabrica abstracta: una interfaz con una lista de metodos de creacion para todos los productos que son parte de la familia de productos. 
 * Estos metodos deben devolver productos abstractos representados por las interfaces que declaramos anteriormente.
 * Para cada variante de una familia de productos creamos una clase de fabrica independiente basada en la interfaz de la fabrica abstracta  
 * 
 * 1. Producto Concreto: declaran interfaces para un grupo de productos diferentes pero relacionados que forman una familia de productos 
 * 
 * 2. Produtos Abstracto : son implementaciones distintas de una de productos abstractos agrupados por variantes.  
 *      - Cada producto abstracto debe implementarse en todas las variantes dadas
 * 
 * 3. Interfaz Fabrica Abstracta: declara un grupo de metodos para crear cada uno de los productos abstractos.  
 * 
 * 4. Fabricas Concretas: implementan metodos de creacion de fabrica abstracta. Cada fabrica concreta se corresponden con una variante especifica de los productos y crean tan dichas variantes de los productos  
 *      - Aunque las fabricas concretas instancian productos concretos, las firmas de sus metodos de creacion deben devolver productos abstractos 
 *      - De este modo el codigo cliente que utiliza una fabrica no se acopla a la variente especifica de la clase de producto que crea 
 */


/**
 * La interfaz de la clase abstracta delcara un conjunto de metodos que devulven distintos productos abstractos. Estos productos son llamados familia y estan relacionados por un tema o concepto de alto nivel. 
 * 
 * los productos de una familia usualmente son capaces de colaborar entre si. Una familia de productos puede tener muchas variantes y la interfaz de la fabrica declara una serie de metodos para crear cada uno de los productos de la familia.
 */

interface FabricaProductos {

    crearSilla (): Silla;

    crearSofa (): Sofa;

    crearMesa (): Mesa;
}

class FabricaProductosModernos implements FabricaProductos {

    public crearSilla (): Silla {
        return new SillaModerna();
    } 

    public crearSofa (): Sofa {
        return new SofaModerno();
    }

    public crearMesa (): Mesa {
        return new MesaModerna();
    }

}

class FabricaProductosVintage implements FabricaProductos{

    public crearSilla (): Silla {
        return new SillaVintage();
    } 

    public crearSofa (): Sofa {
        return new SofaVintage();
    }

    public crearMesa (): Mesa {
        return new MesaVintage();
    }
}

/**
 * Cada producto de una familia debe tener una interfaz base.
 */

interface Silla {
    sentarse (): void;  
}

interface Sofa {
    tumbarse (): void;
}

interface Mesa {
    comer (): void;
}   


class SillaModerna implements Silla {
    sentarse (): void {
        console.log('Sentandose en una silla moderna');
    }
}


class SofaModerno implements Sofa {
    tumbarse (): void {
        console.log('Tumbandose en un sofa moderno');
    }
}

class MesaModerna implements Mesa {
    comer (): void {
        console.log('Comiendo en una mesa moderna');
    }
}


class SillaVintage implements Silla {
    sentarse (): void {
        console.log('Sentandose en una silla vintage');
    }
}

class SofaVintage implements Sofa {
    tumbarse (): void {
        console.log('Tumbandose en un sofa vintage');
    }
}

class MesaVintage implements Mesa {
    comer (): void {
        console.log('Comiendo en una mesa vintage');
    }
}


/**
 * El codigo cliente trabaja con fabricas y productos solo a traves de tipos abstractos: FabricaProductos y productos. 
 * Esto permite pasar cualquier subclase de fabrica o producto al codigo cliente sin romperlo.
 */

function cliente (fabrica: FabricaProductos) {

    const silla = fabrica.crearSilla();
    const sofa = fabrica.crearSofa();
    const mesa = fabrica.crearMesa();

    silla.sentarse();
    sofa.tumbarse();
    mesa.comer();
}

cliente(new FabricaProductosModernos());
cliente(new FabricaProductosVintage());