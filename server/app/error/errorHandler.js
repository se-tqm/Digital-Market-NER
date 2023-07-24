class Error extends error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    static InternalServerError(message){
        return new Error(500, message)
    }
    static BadGateWay(message){
        return new Error(502, message)
    }
    static ServiceUnavailable(message){
        return new Error(503, message)
    }
}