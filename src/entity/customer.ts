/*
Complexidade de negócio
Domain
- Entity
    - customer.ts //(regra de negócio)

Complexidade acidental
infra - mundo externo
- Entity / Model
    - customer.ts //(regra de negócio)
*/

import Address from "./address";

export default class Customer {
    _id: string;
    _name: string;
    _address: Address;
    _active: boolean = true;

    constructor(id: string, name: string, address: Address) {
        this._id = id;
        this._name = name;
        this._address = address;

        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error("Name is required.");
        }
        if (this._id.length === 0) {
            throw new Error("Id is required.");
        }
    }

    get id(): string {
        return this._id;
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address == null) {
            throw new Error("Address is mandatory to activate a customer.");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    get name(): string {
        return this._name;
    }

    get address(): Address {
        return this._address;
    }

    set name(name: string) {
        this._name = name;
    }

    set address(address: Address) {
        this.address = address;
    }
}