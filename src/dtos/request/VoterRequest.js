class VoterRequest {
    constructor({name, email, has_voted}){
        this.name = name;
        this.email = email;
        this.has_voted = has_voted;
    }
}

module.exports = VoterRequest;