export module TsDemo {
    interface Person {
        firstName: string;
        lastName: string;
    }

    function greeter(person: Person) {
        return 'hello,' + person
    }
    let user = { firstName: 'David', lastName: 'DDD' }
    document.body.innerHTML = greeter(user)
}
