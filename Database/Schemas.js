import Realm from "realm";

const Income = {
    name: "Income",
    properties: {
        _id: 'int',
        source:"string",
        currency:"string",
        amount:"double",
        creationDate:"date"
    },
    primaryKey: '_id',
}

const Expense = {
    name: "Expense",
    properties: {
        _id: 'int',
        description:"string",
        currency:"string",
        amount:"double",
        creationDate:"date"
    },
    primaryKey: '_id',
}


const realm = new Realm({
    path: "myaccount",
    schema: [Income,Expense],
});

export default realm;