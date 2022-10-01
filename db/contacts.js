const knex = require("./knex");

function createContact(contact) {
    return knex("contacts").insert(contact);
}

function getAllContacts() {
    return knex("contacts").select("*");
}

function deleteContact(id) {
    return knex("contacts").where("id", id).del();
}

function updateContact(id, car) {
    return knex("contacts").where("id", id).update(car);
}

module.exports = {
    createContact,
    getAllContacts,
    deleteContact,
    updateContact
}