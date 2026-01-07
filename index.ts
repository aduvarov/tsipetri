type Currencies = {
    usa: 'usd'
    china?: 'cny'
    ukraine: 'uah'
    readonly kz: 'tenge'
}

type CurrWithoutUSA = Omit<Currencies, 'usa'>
type CurrUSAANDUkrain = Pick<Currencies, 'usa' | 'ukraine'>
type CountriesWithoutUSA = Exclude<keyof Currencies, 'usa'>

type FadeType = Exclude<MyAnimation, 'swipe'>
type SwipeType = Extract<MyAnimation | Direction, 'swipe'>

type CreateCustomCurr<T> = {
    -readonly [P in keyof T as `custom${Capitalize<string & P>}`]-?: string
}

type PlayersNames = 'alex' | 'john'
type GameDataCurr = Record<PlayersNames, CustomCurrencies>

const gameData: GameDataCurr = {
    alex: {
        customChina: 'qqqqq',
        customKz: 'KZ',
        customUkraine: 'UA',
        customUsa: 'USD',
    },
    john: {
        customChina: 'qqqqq',
        customKz: 'KZ',
        customUkraine: 'UA',
        customUsa: 'USD',
    },
}

type CustomCurrencies = CreateCustomCurr<Currencies>

type MyAnimation = 'fade' | 'swipe'
type Direction = 'in' | 'out'
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`
