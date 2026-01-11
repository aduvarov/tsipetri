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

    constructor(login: string) {
        this.#login = login
    }

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

    logIn = () => {
        return `Player ${this.#login} online`
    }

    connect() {
        // smth
        return this
    }

    isPro(): this is CompetitivePlayer {
        return this instanceof CompetitivePlayer
    }
}

const player = new Player('Ivan')
// console.log(player.logIn())
console.log(player.connect().logIn())

// const test = player.logIn.bind(player)
const test = player.logIn
test()

class CompetitivePlayer extends Player {
    rank: number

    checkLogin() {
        return this.logIn()
    }

    private isConsented() {
        return this.consent ? 'Yes' : 'No'
    }
}

const player2 = new CompetitivePlayer('Vasya')
console.log(player2.checkLogin())

const somePlyaer: Player | CompetitivePlayer = new CompetitivePlayer('Misha')

somePlyaer.isPro() ? console.log(somePlyaer) : console.log(somePlyaer)
