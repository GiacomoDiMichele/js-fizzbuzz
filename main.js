//imposto un ciclo per far arrivare il numero da 1 fino a un max di 100
for (var i = 1; i <= 100; i++) {
//applico la condizione per la quale ogni multiplo di 3 (se non da resto) deve essere sostituito da 'fizz'
    if (i % 3 == 0) {
        console.log('fizz')
    }
//applico la condizione per la quale ogni multiplo di 5 (se non da resto) deve essere sostituito da 'buzz'
    else if (i % 5 == 0) {
        console.log('buzz')
    }
//applico la condizione per la quale ogni multiplo sia di 3 che di 5 (se non danno resto) devono essere sostituiti da 'fizzbuzz'
    else if (i % 3 && 5 == 0) {
        console.log('fizzBuzz');
    }
//altrimenti se i numeri danno resto nel calcolo stampo il numero
    else {
        console.log(i);
    }
}
