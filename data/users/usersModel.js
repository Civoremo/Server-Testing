const db = require("../dbConfig.js");

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
};

async function insert(user) {
    const [id] = await db("users").insert({ name: user.name });

    return db("users")
        .where({ id })
        .first();
}

async function update(userid, user) {
    const [id] = await db("users")
        .where(userid)
        .update(user);
    return id;
}

async function remove(id) {
    return null;
}

async function getAll() {
    return null;
}

async function findById(id) {
    return null;
}
