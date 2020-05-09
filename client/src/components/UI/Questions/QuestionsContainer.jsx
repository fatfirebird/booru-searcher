import React from 'react'
import Question from "./Question";

const QuestionsContainer = () => {
  const data = [
    {question: 'Что это?', answer: 'Штука, которая ищет картинки по заданным тегам среди бур.'},
    {question: 'Как искать?', answer: 'Жмякай на поиск, выбирай буру, пиши теги(или не пиши), выбирай нужные параметры и ищи'},
    {question: 'Как писать теги?', answer: 'Теги пишутся на английском, 1 слово = 1 тег. Если тег состоит из нескольких слов, нужно разделить их вот_так.'},
    {question: 'Что означает мод?', answer: 'Мод — настройка для фильтрации контента. Safe – безопасный контент, Questionable – эротика, потенциально опасный контент, Explicit – непристойный, опасный контент, Any – показать весь контент.'},
    {question: 'Что означает порядок?', answer: 'То, в каком порядке будут выводиться картинки. Data desc – начиная с самых новых, Random – в случайном порядке.'}
  ]

  return(
    <React.Fragment>
      {data.map((el, id) => <Question key={id} body={el}/>)}
    </React.Fragment>
  )
}

export default QuestionsContainer