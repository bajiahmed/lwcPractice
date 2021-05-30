import { LightningElement, api } from 'lwc';

export default class AccountTile extends LightningElement {
    @api 
    acct = {
        Name : 'Baji Account',
        PhotoUrl: "/services/images/photo/003B0FakePictId"
    }

    @api 
    isSelected = false;

    @api
    get tileSelected(){
        return this.isSelected ? 'tile selected' : 'tile'; 
    }
}