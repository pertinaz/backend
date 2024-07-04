const loggerMiddleware = (req,res,next) => {
    console.log(`${req.method} ${res.url}`);
    next();
};

export default loggerMiddleware;