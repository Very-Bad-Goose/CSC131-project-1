export const getCart = (req,res)=>{
    pool.query(queries.getItems,(error, results)=>{
        if (error) throw error;
        // res.status(200).json(results.rows);
        res.status(200).render('../views/vtsItemPage01', { data: results.rows });
    })
    
};