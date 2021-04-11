import realm from './Schemas'

const addIncome = ({
        amount,
        creationDate,
        currency,
        source
    }) => {
    realm.write(() => {
        realm.create('Income',{
            _id:new Date().getTime(),
            amount,
            creationDate,
            currency,
            source
        });
    });
}

const addExpense = ({
        amount,
        creationDate,
        currency,
        description
    }) => {
    realm.write(() => {
        realm.create('Expense',{
            _id:new Date().getTime(),
            amount,
            creationDate,
            currency,
            description
        });
    });
}

const retrieveAll = (name) => {
    return realm.objects(name);
}

const retrieve = (name,id) => {
    return realm.objectForPrimaryKey(name,id);
}

export {
    addIncome,
    addExpense,
    retrieve,
    retrieveAll
}