function setName() {
    console.log('start setName')
    return 'COD'
}
class Player {
    private static game: string

    #login: string
    private _password: string
    public server: string
    protected consent: boolean

    static {
        Player.game = setName()
    }

    // constructor(game: string) {
    //     Player.game = game
    // }

    get password() {
        return this._password
    }

    set password(newPass: string) {
        // Validation
        this._password = newPass
    }

    static getGameName() {
        return Player.game
    }
}

new Player()
new Player()
new Player()
console.log(Player.getGameName())

// Math.random()

// class CompetitivePlayer extends Player {
//     rank: number

//     isConsented() {
//         return this.consent ? 'Yes' : 'No'
//     }
// }

// const player = new CompetitivePlayer()
// player._password = '1qaz'
// player.login = 'abcd'

// class User {
//     public email: string
//     public name: string

//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }

// class User {
//     constructor(public email: string, public name: string){}
// }
