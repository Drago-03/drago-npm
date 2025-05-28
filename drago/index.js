const { render } = require('prettyjson')
const data = require('./lib/data')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
}

module.exports = ({ json } = {}) => {
  if (json) return JSON.stringify(data, null, 2)
  let output = render({
    Name: data.name,
    Pronouns: data.pronouns.join('/'),
    Location: data.location,
    Title: data.title,
    Education: data.education,
    'Current Focus': data.current_focus,
    Passions: data.passions,
    'Fun Fact': data.fun_fact,
    'Daily Routine': data.daily_routine.join(' → '),
    GitHub: data.github,
    Connect: data.connect,
    Links: data.urls,
    Achievements: data.achievements,
    Motto: data.motto
  }, renderOpts)
  return output
}