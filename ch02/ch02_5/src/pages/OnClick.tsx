const rootDiv = document.getElementById('root')

if(rootDiv) {
  rootDiv.onclick = (e: Event) => {  // 호출x
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }

  rootDiv.onclick = (e: Event) => {  // 호출o ( 가장 마지막에 설정된 콜백함수만 호출)
    const {isTrusted, target, bubbles} = e
    // prettier-ignore
    console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
  }
}

export default function onClick() {
  return <div>onClick</div>
}