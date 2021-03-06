### USK
See project(https://TZ-Komtek.alsch19.repl.co)

ТЗ – Учетная система консультаций:
Необходимо спроектировать и разработать учетную систему “Консультации”. Основная цель которого автоматизации работы с консультациями пациентов.

## Сущности

1. Пациент
   1. **Фамилия [строка];**
   2. **Имя [строка];**
   3. Отчество [строка];
   4. **Дата рождения [дата];**
   5. **Пол [строка];**
   6. **СНИЛС [строка] - необходимо проверить формат и контрольную сумму.**
   7. Физиологические данные пациента: Вес, Рост, Возраст;
2. Консультация
   1. **Дата [date] - выбор с помощью компонента date picker (предусмотреть рабочий график с 08:00 до 20:00);**
   2. **Время время в формате HH:mm;**
   3. Симптомы - [текст] - Симптомы пациента.

Поля выделенные жирным обязательны.

## Формы

1. Пациент — операции добавления/удаления/редактирования пациента;
   1. Страница с таблицей содержащая список всех пациентов с возможностью поиска по ФИО и СНИЛС, возможность сортировать по заголовкам таблицы;
   2. Страница создания пациента с валидацией;
   3. Страница редактирования пациента;
   4. Страница просмотра данных пациента с таблицей всех его консультаций;
   5. Удаление пациента.
2. Консультации — операции добавления/удаления/редактирования консультаций;
   1. Страница добавления консультации для пациента(предусмотреть возможность запрета добавления, при условии, если уже существует консультация для пациента в это же время);
   2. Страница редактирования;
   3. Удаление.

Необходимо реализовать валидацию данных по форматам полей и признаку обязательности.

## Технологический стек

- Frontend
  - Vue
  - Vuex (для каждой сущности свой модуль)
  - Vuetify (не обязательно)

1.Страница с таблицей содержащей список всех пациентов:
![Screenshot_10](https://user-images.githubusercontent.com/78414390/166972212-19f81236-9e29-4941-b5e2-1b2c0c592a0c.png)
1)	Кнопка создания нового пациента (п.2)
2)	Иконка удаления пациента из таблицы (при удалении пациента, также удаляются все его консультации)
3)	Иконка редактирования данных пациента (п.3)
4)	Заголовки столбцов с возможностью сортировки (А-Я / Я-А)
5)	Поля фильтра с возможностью фильтрации по ФИО и/или СНИЛС
6)	Кнопка просмотра карточки пациента (п.4)

8.Модальное окно создания нового пациента:
![Screenshot_11](https://user-images.githubusercontent.com/78414390/166972268-b232b558-533f-4719-a3bd-2b84455d98ef.png)

3.Страница редактирования данных пациента:
![Screenshot_12](https://user-images.githubusercontent.com/78414390/166972340-df911e64-5bf8-4f3d-874a-f19f741d049d.png)

4.Страница просмотра карточки пациента:
![Screenshot_13](https://user-images.githubusercontent.com/78414390/166972384-11086dc1-3d55-47cd-a3b1-da238ab700dc.png)
1)	Кнопка создания новой консультации (п.5)
2)	Иконка удаления консультации из таблицы консультаций
3)	Иконка редактирования консультации (п.6)

5.Модальное окно создания новой консультации:
![Screenshot_14](https://user-images.githubusercontent.com/78414390/166972446-81ae39be-baae-4ee6-8df4-16f9731210c7.png)

6.Страница редактирования консультации:
![Screenshot_15](https://user-images.githubusercontent.com/78414390/166972489-bd3d92da-8476-4aad-8861-5ff7aee00556.png)

Для выполнения ТЗ были дополнительно использованы:
1)	Библиотека vee-validate – для валидации форм фреймворка
2)	Библиотека yup - это конструктор схем JavaScript для анализа и проверки значений
3)	Деплой проекта выполнен с помощью replIt

