import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from "vuex"
import { useRoute } from "vue-router"

export function useCreateConsult(fn) {

    const store = useStore()
    const route = useRoute()
    const patientId = route.params.id
    const consultsPatient = store.getters[ 'consults/consults' ].filter(p => p.patientId == patientId)[0].patientConsults

    const MIN_DATE = new Date(new Date().getTime() - 24 * 3600 * 1000) // минимальная дата сегодня
    const { handleSubmit, isSubmitting } = useForm()

    const { value: date, errorMessage: errorDate, handleBlur: hbDate } = useField('date', 
    yup.date().min(MIN_DATE, 'Дата не может быть меньше текущей').required('Это поле обязательное для заполнения'))

    const { value: time, errorMessage: errorTime, handleBlur: hbTime } = useField('time', 
    yup.string().required('Это поле обязательное для заполнения').test('is-time', 'Это время недоступно',
    (timeChose) => {
        let isCorrect, resultTime
        const resultDate = consultsPatient.filter(c => c.date === date.value)
        if(timeChose === undefined) {
            isCorrect = true
        } else if(resultDate) {
            resultTime = resultDate.find(c => c.time == timeChose)
            if(resultTime) {
                return false
            } else {
                isCorrect = true
            }
        } else {
            isCorrect = true
        }
        return isCorrect
    }))

    const { value: simptoms } = useField('simptoms')

    const submitConsultForm = handleSubmit(fn)

    return { submitConsultForm, isSubmitting, simptoms,
        date, errorDate, hbDate,
        time, errorTime, hbTime }
}