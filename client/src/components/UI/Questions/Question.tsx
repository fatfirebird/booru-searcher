import React from "react";

type TQuestion = {
  body: {
    question: string,
    answer: string
  }
}

const Question = ({body}: TQuestion) => {
  const { question, answer } = body;

  return(
    <React.Fragment>
      <div className='row'>
        <div className='question'>
          <p className='flow-text'>{question}</p>
          <p className='flow-text'>{answer}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Question