export const prepareQuizData = (questions, title) => {
  const data = {
    title,
    questions: questions.map((q) => ({
      title: q.title,
      answer: q.answer,
      choices: [q.option1, q.option2, q.option3],
      score: q.score
    }))
  }
  return data
}

export const prepareDataForQuestionPreview = (questions) => {
  return questions.map((q, index) => (
    {
      _id: (q._id) ? q._id : 'index-' + index,
      option1: (q.choices && q.choices[0]) ? q.choices[0] : '',
      option2: (q.choices && q.choices[1]) ? q.choices[1] : '',
      option3: (q.choices && q.choices[2]) ? q.choices[2] : '',
      ...q
    }
  ))
}

export const graphData = (result) => {
  let data = {
    labels: [],
    series: []
  }
  let temp = []
  for (let k in result) {
    data.labels.push(k)
    temp.push(result[k])
  }
  data.series = [temp]

  return data
}

export const responseCountGraph = (result) => {
  let data = {
    labels: [],
    series: []
  }
  let temp = []
  let count = 1
  result.map((item) => {
    data.labels.push(`Quiz ${count}`)
    count++
    temp.push(item.count)
  })
  data.series = [temp]

  return data
}
