const Registro = require("../models/register");

const getAll = (req, res)=>{
    Registro.find((err, registros)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        return res.status(200).json({registros});
    })
}

const getOneById = (req, res)=>{
    Registro.findById(req.params.id,(err, registros)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        return res.status(200).json({registros});
    })
}

const insert = (req, res)=>{
    let registro = new Registro({
        carnet: req.body.carnet,
        schedule: req.body.schedule,
        isLate: req.body.isLate
    });

    registro.save((err)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        res.status(201).json({mensaje:"Si"})

    });
}

const update = (req, res)=>{
    Registro.find((err, registros)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        return res.status(200).json({registros});
    })
}

const erase = (req, res)=>{
    Registro.find((err, registros)=>{
        if(err) return res.status(500).json({mensaje:"Error"})

        return res.status(200).json({registros});
    })
}


module.exports = {
    getAll,
    getOneById,
    insert,
    update,
    erase
};