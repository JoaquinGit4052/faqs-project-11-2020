import React from 'react'
import Card from './Card'
import questions from '../data'

const Main = () => {
  return (
    <>
      <h1>Faqs</h1>
      <div className='faq-container'>
        {questions.map((question) => {
          return <Card key={question.id} {...question} />
        })}
      </div>
    </>
  )
}

export default Main
