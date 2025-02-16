class VoterResponse{
    constructor({id, name, email, has_voted}){
        this.id = id;
        this.name = name;
        this.email = email;
        this.has_voted = has_voted;
    }
}

module.exports = VoterResponse;