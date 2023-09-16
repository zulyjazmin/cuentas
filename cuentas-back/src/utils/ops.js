const ops = 
{

    async formatAccount(data)
    {
        return {
            'numero': data.numero,
            'nombre': data.nombre,
            'rubro': data.rubro,
            'subrubro': data.subrubro,
            'deposito': data.deposito,
            'moneda': data.moneda
        }
    },
   
     async formatUser(data)
     {
        return {
            'nombre': data.nombre,
            'email': data.email,
            'usuario': data.usuario,
            'clave': data.clave,
        }
     },

    async throwIfSomeEmpty(data)
    {

        if (
            Object.values(data).some(x => x === undefined) )
                 throw new Error("Cuenta mal formateada");
       console.log(data);
        return data;   
    },

    throwIfExists(model, query)
    {
        return async (result) => {
            const existingDoc = await model.findOne(query).exec();

            if (existingDoc != null)
                 throw new Error("Cuenta ya existe");

                 console.log(result);
                return result;
        }
    },
    insertInModel(model)
    {
        return async (result) => 
        
        {
            console.log(result);
            return  await model.insertMany([result]);
        }
    }

};

module.exports = ops;