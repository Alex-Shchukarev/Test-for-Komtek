import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { validateSnils } from '@/utils/validate-snils'

export function useEditPatient(fn) {

    const LENGTH = 11
    const MAX_DATE = new Date(new Date().getTime() - 14 * 24 * 3600 * 1000) //минимальный возраст пациента не менее 14 дней
    const MIN_DATE = new Date(new Date().getTime() - 36525 * 24 * 3600 * 1000) //максимальный возраст пациента не более 100 лет
    const { handleSubmit } = useForm()

    const { value: fullName } = useField('fullName')

    const { value: birthday, errorMessage: errorBirthday, handleBlur: hbBirthday } = useField('birthday', 
    yup.date().min(MIN_DATE, 'Дата рождения не более 100 лет назад').max(MAX_DATE, 'Дата рождения не может быть менее 14 дней'))

    const { value: gender } = useField('gender')

    const { value: snils, errorMessage: errorSnils, handleBlur: hbSnils } = useField('snils', 
    yup.string().trim().length(LENGTH, 'Должно быть 11 цифр').test('is-snils', 'Некорректный СНИЛС', validateSnils))

    const { value: weight } = useField('weight')

    const { value: height } = useField('height')

    const { value: age } = useField('age')

    const submitEditForm = handleSubmit(fn)

    return { submitEditForm,
        fullName, gender,
        birthday, errorBirthday, hbBirthday,
        snils, errorSnils, hbSnils,
        weight, height, age  }
}