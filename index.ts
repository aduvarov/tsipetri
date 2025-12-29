const arr: Array<number> = [1, 2, 3]
const arr1: number[] = [1, 2, 3]

const roarr: ReadonlyArray<string> = ['ddd']
//roarr[0] = 'x' // error

interface IState {
    data: {
        name: string
    }
    tag?: string
}

const state: Partial<IState> = {
    data: {
        name: 'John',
    },
}

const strictState: Required<IState> = {
    data: {
        name: 'John',
    },
    tag: '#hash',
}

function action(state: Readonly<IState>) {
    // state.data = 'abc' // error
    state.data.name = 'userName' // ok
}
