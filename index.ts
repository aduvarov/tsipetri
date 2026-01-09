enum TransferStatus {
    Pending = 'pending',
    Rejected = 'rejected',
    Completed = 'completed',
}

enum ErrorMessages {
    NotFound = 'Not found: 404',
    NotEnoughSpace = 'Not enough space: 507',
    Forbidden = 'Forbidden: 403',
}

interface ITransfer {
    path: string
    data: string[]
    date?: Date
    start: (p: string, d: string[]) => string
    stop: (reason: string) => string
}

interface TransferError {
    message: ErrorMessages
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, TransferError {
    // Место для реализаций

    path: string
    data: string[]
    date?: Date | undefined
    transferStatus: TransferStatus
    message: ErrorMessages

    start = (p: string, d: string[]) => {
        this.path = p
        this.data = d
        this.transferStatus = TransferStatus.Pending
        return 'started'
    }

    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    // Можно вывести в консоль данные, можно вернуть строку
    checkTransferStatus() {
        return this.transferStatus
    }

    // Необходимо создать метод, который будет останавливать передачу данных
    // И возвращать строку с причиной и датой остановки (Дата в любом формате)
    stop = (reason: string) => {
        this.transferStatus = TransferStatus.Rejected
        return `${reason} ${new Date()}`
    }

    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
    // Метод может показаться странным, но может использоваться для тестов, например

    getTransferStatus(): string {
        return `${this.transferStatus} ${ErrorMessages.NotFound}`
    }
}

const sft = new SingleFileTransfer()

console.log(sft.start('firstString', ['one', 'two']))
console.log(sft.checkTransferStatus())
console.log(sft.stop('network error'))
console.log(sft.checkTransferStatus())
console.log(sft.getTransferStatus())
