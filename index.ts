interface Form {
    email: string
    title: string
    text: string
    checkbox: boolean
}

const formData: Form = {
    email: '',
    title: '',
    text: '',
    checkbox: false,
}

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData(data: Form) {
    // Если каждое из свойств объекта data правдиво...
    if (inputEmail.value && inputTitle.value && inputText.value && inputCheckbox.checked) {
        return true
    } else {
        console.log('Please, complete all fields')
        return false
    }
}

function checkFormData(data: Form) {
    const { email } = data
    const emails = ['example@gmail.com', 'example@ex.com', 'admin@gmail.com']

    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(data.email)) {
        console.log('This email is already exist')
    } else {
        console.log('Posting data...')
    }
}

const formEmail = document.querySelector('#form_email') as HTMLFormElement
const formText = document.querySelector('#form_text') as HTMLFormElement
const inputEmail = document.querySelector('#email') as HTMLInputElement
const inputTitle = document.querySelector('#title') as HTMLInputElement
const inputText = document.querySelector('#text') as HTMLTextAreaElement
const inputCheckbox = document.querySelector('#checkbox') as HTMLInputElement

formEmail.addEventListener('submit', onSubmit)
formText.addEventListener('submit', onSubmit)

function onSubmit(e: SubmitEvent) {
    e.preventDefault()
    formData.email = inputEmail.value
    formData.title = inputTitle.value
    formData.text = inputText.value
    formData.checkbox = inputCheckbox.checked
    if (validateFormData(formData)) {
        checkFormData(formData)
    }
}
