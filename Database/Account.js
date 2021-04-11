import realm from './Schemas'

const addIncome = ({
        amount,
        currency,
        source
    }) => {
    realm.write(() => {
        realm.create('Income',{
            _id:new Date().getTime(),
            amount,
            createdAt:new Date(),
            currency,
            source
        });
    });
}

const addExpense = ({
        amount,
        currency,
        description
    }) => {
    realm.write(() => {
        realm.create('Expense',{
            _id:new Date().getTime(),
            amount,
            createdAt:new Date(),
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