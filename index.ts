let msg: 'Hello' = 'Hello'

msg = 'Hello'

// type Config = { protocol: 'http' | 'https'; port: 3000 | 3001 }
interface Config {
    protocol: 'http' | 'https'
    port: 3000 | 3001
    log: (msg: string) => void
}
// type Role = {
//     role: string
// }
// type ConfigWithRole = Config & Role

interface Role {
    role: string
}

interface ConfigWithRole extends Role, Config {}

const serverConfig: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: (msg: string): void => {
        console.log(msg)
    },
}

// const backupConfig: ConfigWithRole = {
//     protocol: 'http',
//     port: 3000,
//     role: 'sysadmin',
// }

type StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
) => string

const startServer: StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001,
    log: (msg: string) => void
): 'Server started' => {
    log(`Server started on ${protocol}://server:${port}`)
    return 'Server started'
}

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log)

// type AntimationTimingFunction = 'ease' | 'ease-out' | 'ease-in'
// type AnimationID = string | number

// function createAnimation(
//     id: AnimationID,
//     animationName: string,
//     timingFunc: AntimationTimingFunction = 'ease',
//     duration: number,
//     iterCount: 'infinite' | number
// ): void {
//     const elem = document.querySelector(`#${id}`) as HTMLElement
//     if (elem) {
//         elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`
//         console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
//     }
// }

// createAnimation('id', 'fade', 'ease-in', 5, 'infinite')

interface Styles {
    [key: string]: string
}

const styles: Styles = {
    position: 'absolute',
    top: '20px',
    left: '50px',
}
