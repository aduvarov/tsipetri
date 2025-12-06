let msg: 'Hello' = 'Hello'

msg = 'Hello'

const port3000: number = 3000
const port3001: number = 3001

function startServer(protocol: 'http' | 'https', port: 3000 | 3001) {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`)
    } else {
        console.error('Invalid port')
    }
}

startServer('https', 3001)

type AntimationTimingFunction = 'ease' | 'ease-out' | 'ease-in'
type AnimationID = string | number

function createAnimation(
    id: AnimationID,
    animationName: string,
    timingFunc: AntimationTimingFunction = 'ease',
    duration: number,
    iterCount: 'infinite' | number
): void {
    const elem = document.querySelector(`#${id}`) as HTMLElement
    if (elem) {
        elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`
        console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
    }
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite')
