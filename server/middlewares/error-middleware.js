const errorMiddleware = (err , req , res , next) => {
    const status = err.status || 500;
    const message = err.message || 'Server Error';
    const extradetails = err.extradetails || "Error from Backend" ;

    return res.status(status).json({message , extradetails}) ;
};

module.exports = errorMiddleware;