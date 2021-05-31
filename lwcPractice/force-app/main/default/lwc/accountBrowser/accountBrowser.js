import { LightningElement } from 'lwc';

export default class AccountBrowser extends LightningElement {

    acctList = [];

    constructor(){
        super();
        const acctNames = ['Rad', 'Stuart', 'Andres', 'Rahul', 'Amit'];
        this.acctList = acctNames.map((acctName, index) => {
            return {
                'sobjectType' : 'Contact',
                'Name' : acctName,
                'PhotoUrl' : '/services/images/photo/003B0FakePictId',
                'Id' : index
            };
        } );
        console.log('Baji -->'+this.acctList);
    }
}