
export const patientsData = [
                { id: 1, surname: 'Иванов', firstName: 'Иван', fatherName: 'Иванович', birthday: '1980-05-09', gender: 'Мужской', 
                snils: '12345678905', weight: 78, height: 175, age: 41, fullName: 'Иванов Иван Иванович' },
                { id: 2, surname: 'Петров', firstName: 'Петр', fatherName: 'Петрович', birthday: '1975-07-11', gender: 'Мужской', 
                snils: '12345678903', weight: 82, height: 180, age: 46, fullName: 'Петров Петр Петрович' },
                { id: 3, surname: 'Петрова', firstName: 'Лидия', fatherName: 'Павловна', birthday: '1978-06-12', gender: 'Женский', 
                snils: '12345678907', weight: 72, height: 170, age: 43, fullName: 'Петрова Лидия Павловна' },
                { id: 4, surname: 'Семенова', firstName: 'Инна', fatherName: 'Михайловна', birthday: '1995-04-10', gender: 'Женский', 
                snils: '12345678901', weight: 46, height: 162, age: 27, fullName: 'Семенова Инна Михайловна' },
                { id: 5, surname: 'Блинова', firstName: 'Ирина', fatherName: 'Витальевна', birthday: '1985-07-11', gender: 'Женский', 
                snils: '12345678904', weight: 50, height: 165, age: 36, fullName: 'Блинова Ирина Витальевна' },
                { id: 6, surname: 'Смирнов', firstName: 'Петр', fatherName: 'Алексеевич', birthday: '1965-08-15', gender: 'Мужской', 
                snils: '12345678902', weight: 75, height: 178, age: 57, fullName: 'Смирнов Петр Алексеевич' },
                { id: 7, surname: 'Лебедев', firstName: 'Антон', fatherName: 'Федорович', birthday: '1976-09-11', gender: 'Мужской', 
                snils: '12345678906', weight: 80, height: 176, age: 45, fullName: 'Лебедев Антон Федорович' }
            ]

export const consultsData = [
                { patientId: 1, patientConsults: [
                    { id: 11, date: '1980-05-09', time: '08:35', simptoms: 'Кружится голова' },
                    { id: 12, date: '1980-05-15', time: '08:55', simptoms: 'Температура' }
                ] },
                { patientId: 2, patientConsults: [
                    { id: 21, date: '1975-07-11', time: '10:35', simptoms: 'Кружится голова' },
                    { id: 22, date: '1975-07-15', time: '12:55', simptoms: 'Температура' }
                ] }
]