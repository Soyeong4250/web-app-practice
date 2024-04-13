import ReactDOM from 'react-dom/client'
import * as data from './data'

const children = data.makeArray(10).map((notUsed, idx) => (
  <div key={idx}>
    <p>{data.randomId()}</p>
    <p>{data.randomName()}</p>
    <p>{data.randomJobTitle()}</p>
    <p>{data.randomSentence()}</p>
    <img src={data.randomAvatar()} width={100} height={100} alt='randomAvatar' />
  </div>
))

const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)