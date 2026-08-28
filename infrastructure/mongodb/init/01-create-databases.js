const databases = [
    "ecommerce_products",
    "ecommerce_notifications",
    "ecommerce_analytics"
];

databases.forEach((databaseName) => {
    const database = db.getSiblingDB(databaseName);

    database.createCollection("_initialization");

    database._initialization.insertOne({
        initialized: true,
        initializedAt: new Date()
    });

    database._initialization.drop();
});