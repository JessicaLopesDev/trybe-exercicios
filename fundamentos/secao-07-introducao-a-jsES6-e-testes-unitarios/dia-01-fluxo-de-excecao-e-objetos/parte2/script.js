const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const deliveryName = order.order.delivery.deliveryPerson;
    const costumerName = order.name;
    const costumerPhone = order.phoneNumber;
    const costumerStreet = order.address.street;
    const costumerAdressNumber = order.address.number;
    const costumerApartment = order.address.apartment;

    const phrase = `Olá ${deliveryName}, entrega para: ${costumerName}, Telefone: ${costumerPhone}, R. ${costumerStreet}, Nº: ${costumerAdressNumber}, AP: ${costumerApartment}`;

    // console.log(phrase);
};

customerInfo(order);

const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.payment.total = 50;

    const costumerName = order.name;
    const pizzaKey = order.order.pizza
    const pizzaFlavors = Object.keys(pizzaKey);

    const drink = order.order.drinks.coke.type;
    const total = order.payment.total;


    const phrase = `Olá ${costumerName}, o total do seu pedido de ${pizzaFlavors[0]}, ${pizzaFlavors[1]} e ${drink} é R$ ${total},00.`;
    console.log(phrase);
};

orderModifier(order);