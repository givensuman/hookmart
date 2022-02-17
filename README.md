<h1 align='center'> 🛒 hookmart</h1>

hookmart is a collection of React hooks that have common use-cases.

Each hook is lightweight and tested, and the library is entirely tree-shakeable.

To install, run:

```bash
#npm
npm i --save hookmart
#or, with yarn
yarn add hookmart
```

<hr>

### Contents:

- <a href='#useBoolean'>`useBoolean`</a>
<br>
- <a href='#useClipboard'>`useClipboard`</a>
<br>
- <a href='#useEventListener'>`useEventListener`</a>
<br>
- <a href='#useGeolocation'>`useGeolocation`</a>
<br>
- <a href='#useHover'>`useHover`</a>
<br>
- <a href='#useInterval'>`useInterval`</a>
<br>
- <a href='#useLocalStorage'>`useLocalStorage`</a>
<br>
- <a href='#useOrientation'>`useOrientation`</a>
<br>
- <a href='#useParams'>`useParams`</a>
<br>
- <a href='#useScript'>`useScript`</a>
<br>
- <a href='#useTimeout'>`useTimeout`</a>
<br>
- <a href='#useWindowDimensions'>`useWindowDimensions`</a>
</ol>


<hr>

<div id='useBoolean'>

### useBoolean

Takes an optional initial boolean value and returns a boolean `state` variable with modifying functions `setTrue`, `setFalse`, and `toggle`. Returns are *named*.

Example usage:

```js
import React from 'react'
import { useBoolean } from 'hookmart'

const TrueOrFalse = () => {
    const { 
        state, setTrue, setFalse, toggle 
    } = useBoolean(true)
    return (
        <>
            {state && <h1>Hi, mom!</h1>}
            <button onClick={setTrue}>Show</button>
            <button onClick={setFalse}>Hide</button>
            <button onClick={toggle}>Toggle</button>
        </>
    )
}
```

</div>

<div id='useClipboard'>

### useClipboard

Returns an array with the `clipboard` statea variable and a `copy` function that writes to clipboard. Note that the state only tracks what is copied with the supplied `copy` function.

Example usage:

```js
import React from 'react'
import { useClipboard } from 'hookmart'

const CopyMe = () => {
    const [ text, copyText ] = useClipboard()
    const [ input, setInput ] = useState('')
    
    return (
        <input 
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        />
        <button onClick={() => {
            copyText(input)
            alert(`"${text}" has been copied to clipboard.`)
        }}>
            Copy me!
        </button>
    )
}
```
</div>


<div id='useEventListener'>

### useEventListener

Attaches the supplied callback to the supplied target with the supplied event trigger. If no target is supplied, it defaults to `window`. Fairly standard JavaScript, but useful as it contains state checking and cleanup.

Example usage:

```js
import React from 'react'
import { useEventListener } from 'hookmart'

const PokeyStick = () => {
    const ref = React.useRef()
    useEventListener(
        'click',
        () => alert('Ouch!'),
        ref
    )

    return (
        <div ref={ref}>Don't poke me!</div>
    )
}

```
</div>




