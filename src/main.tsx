import './style.css'
import typescriptLogo from './typescript.svg'
import solojsxLogo from '/solojsx.png'
import viteLogo from '/vite.svg'

let count = 0
const setCounter = (count: number, element: HTMLElement) => {
    element.innerHTML = `count is ${count}`
}

const btnElement = <button id="counter" type="button"></button>
btnElement.onclick = () => setCounter(++count, btnElement)
setCounter(0, btnElement)

const e = <div>
    <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} class="logo logots" alt="TypeScript logo" />
    </a>
    <a href="https://github.com/SoloJSX/SoloJSX" target="_blank">
        <img src={solojsxLogo} class="logo logosolojsx" alt="SoloJSX logo" />
    </a>
    <h1>Vite + TypeScript + SoloJSX</h1>
    <div class="card">
        {btnElement}
    </div>
    <p class="read-the-docs">
        Click on the Vite, TypeScript and SoloJSX logos to learn more
    </p>
</div>

document.querySelector<HTMLDivElement>('#app')!.append(e)
