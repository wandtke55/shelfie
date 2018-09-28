module.exports ={
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
        .then(products=> res.status(200).send(products))
        .catch((err)=>{
            res.status(500).send({errorMessage: 'Well this is embarrasing, it didnt work'});
            console.log(err)
        })
    },
    create: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {name, price, imageUrl} = req.body;
        const {string} = req.body;

        dbInstance.create([name, price, imageUrl])
        .then((products)=> res.send(products))
        .catch((err)=>{
            res.status(500).send({errorMessage: 'Well this is embarrasing, it didnt work'})
            console.log(err)
        })
    },
    delete: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {params} = req

        dbInstance.delete(params.id)
        .then(()=> res.sendStatus(200))
        .catch((err)=>{
            res.status(500).send('Well this is embarrasing, it didnt work')
            console.log(err)
        })
    }
}
