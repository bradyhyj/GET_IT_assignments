export const getProduct = (req, res) => {
    const { name, price } = req.query;
    res.json({
        message: "Product List",
        data: { name, price }
    });
}

export const createProduct = (req, res) => {
    const { name, price } = req.query;
    res.status(201).json({
        message: "Product Created",
        data: {
            name: name,
            price: price
        }
    });
}