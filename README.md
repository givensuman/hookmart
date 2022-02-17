<h1 align='center'> 🦜 hookmart</h1>

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

- <a href='#useClipboard'>`useClipboard`</a>

- <a href='#useEventListener'>`useEventListener`</a>

- <a href='#useGeolocation'>`useGeolocation`</a>

- <a href='#useHover'>`useHover`</a>

- <a href='#useLocalStorage'>`useLocalStorage`</a>

- <a href='#useOrientation'>`useOrientation`</a>

- <a href='#useParams'>`useParams`</a>

- <a href='#useScript'>`useScript`</a>

- <a href='#useTimeout'>`useTimeout`</a>

- <a href='#useWindowDimensions'>`useWindowDimensions`</a>
  
</ol>


<hr>

<div id='useBoolean'>

### useBoolean

Takes an optional initial boolean value and returns a boolean `state` variable with modifying functions `setTrue`, `setFalse`, and `toggle`. Returns are *named*.

Example usage:

```js
import React from 'react'
import useBoolean from 'hookmart/useBoolean'

const TrueOrFalse = () => {
    const { 
        state as booleanState, setTrue, setFalse, toggle 
    } = useBoolean(true)
    return (
        <>
        {booleanState && <h1>Hi, mom! 👋</h1>}
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
import useClipboard from 'hookmart/useClipboard'

const CopyMe = () => {
    const [ text, copyText ] = useClipboard()
    const [ input, setInput ] = React.useState('')
    
    return (
        <>
        <input 
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        />
        <button onClick={() => {
            copyText(input)
            alert(`You got busted for trying to cheat. ${text} isn't even the right answer.`)
        }}>
            Pssst... copy me! 📝
        </button>
        </>
    )
}
```
</div>


<div id='useEventListener'>

### useEventListener

Attaches the supplied event trigger and callback to the supplied target. If no target is supplied, it defaults to `window`. Fairly standard JavaScript, but useful as it contains state checking and cleanup.

Example usage:

```js
import React from 'react'
import useEventListener from 'hookmart/useEventListener'

const PokeyStick = () => {
    const ref = React.useRef()
    useEventListener(
        'click',
        () => alert('Ouch!'),
        ref
    )

    return (
        <div ref={ref}>
            Don't poke me! 👈
        </div>
    )
}

```
</div>

<div id='useGeolocation'>

### useGeolocation

Returns coordinates from the `navigator.geolocation` object.

Example usage:

```js
import React from 'react'
import useGeolocation from 'hookmart/useGeolocation'

const LatLong = () => {
    const coords = useGeolocation()

    return (
        <>
        <h1>I know where you live! 🌐</h1>
        <p>Latitude: {coords?.latitude}</p>
        <p>Longitude: {coords?.longitude}</p>
        </>
    )
}
```
</div>

<div id='useHover'>

### useHover

Takes an input target and optional callbacks for `mouseover` and `mouseout` events, and returns a boolean of the hover state.

Example usage:

```js
import React from 'react'
import useHover from 'hookmart/useHover'

const HoverHand = () => {
    const ref = React.useRef()
    const hoverState = useHover(
        ref,
        () => alert('Glad you arrived!'),
        () => alert('Sorry to see you go.')
    )

    return (
        <div ref={ref}>
            There's a party in here! 💃
        </div>
    )
}
```
</div>

<div id='useInterval'>

### useInterval

Creates an `setInterval` from the supplied callback and delay (in milliseconds).

Example usage:

```js
import React from 'react'
import useInterval from 'hookmart/useInterval'

const GrowShrink = () => {
    const [ grow, setGrow ] = React.useState(false)
    useInterval(() => setGrow(state => !state), 1000)

    return (
        <div
        style={{
            height: grow ? '500px' : '250px',
            width: 'auto',
            borderRadius: '50%',
            transition: 'height 1s, width 1s',
            backgroundColor: 'lavenderblush'
        }}
        >
            {grow ? '🖐' : '🤏'}
        </div>
    )
}
```
</div>

<div id='useLocalStorage'>

### useLocalStorage

Returns an array with access to the state of a supplied localstorage key and a setter function to update it. Note that the state only tracks what is set to localstorage with the supplied setter function. Also takes an option initial value (default `null`) to use if there is no item at the supplied key.

Example usage:

```js
import React from 'react'
import useLocalStorage from 'hookmart/useLocalStorage'

const Theme = () => {
    const [ theme, setTheme ] = useLocalStorage('theme', 'light')

    return (
        <div className={theme}>
            <button
            disabled={theme === 'light'}
            onClick={() => setTheme('light')}
            >
                Light theme 🌻
            </button>
            <button
            disabled={theme === 'dark'}
            onClick={() => setTheme('dark')}
            >
                Dark theme 🦇
            </button>
        </div>
    )
}
```
</div>

<div id='useOrientation'>

### useOrientation

Returns the state of the `window.screen.orientation` object.

Example usage:

```js
import React from 'react'
import useOrientation from 'hookmart/useOrientation'

const Somersault = () => {
    const orientation  = useOrientation()

    if (orientation === ('landscape-primary' || 'landscape-secondary')) {
        return <h1>What a beautiful landscape 🦋</h1>
    } else if (orientation === ('portrait-primary' || 'portrait-secondary')) {
        return <h1>WORLD STAR 💯</h1>
    } else {
        return <h1>What are you using, a smart fridge?</h1>
    }
}
```
</div>

<div id='useParams'>

### useParams

Pulls query parameters from an optional supplied URL string. If one isn't supplied, it uses `window.location`.

Example usage:

```js
import React from 'react'
import useParams from 'hookmart/useParams'

const HowDidIGetHere = () => {
    const params = useParams()

    return (
        <h1>You passed these parameters 🦆:</h1>
        {Object.entries(params).map((item, index) => 
            <p key={index}>item[0] | item[1]</p>
        )}
    )
}
```
</div>

<div id='useScript'>

### useScript

Adds a script to the `document` with the supplied `src` string. Returns a boolean loading state. Also accepts an optional object for options to attach to the script.

```js
import React from 'react'
import useScript from 'hookmart/useScript'

const ForgotMyLines = () => {
    const loadingState = useScript(
        'http://somescript/', 
        {
            id: 'my-script'
            async: true
        }
    )

    return (
        <h1>
            {loadingState ? 'Done! ✅' : 'Working on it... 😰'}
        </h1>
    )
}
```
</div>

<div id='useTimeout'>

### useTimeout

Creates a `setTimeout` from the supplied callback and delay (in milliseconds). If no delay is provided, it defaults to 0 ms.

Example usage:

```js
import React from 'react'
import useTimeout from 'hookmart/useTimeout'

const ComedicTiming = () => {
    useTimeout(() => alert('He was outstanding in his field!', 1000))

    return (
        <h1>Why did the scarecrow win an award? 🌽</h1>
    )
}
```
</div>

<div id='useWindowDimensions'>

### useWindowDimensions

Returns the state of the window's dimensions in `width` and `height`. Returns are *named*. 

Example usage:

```js
import React from 'react'
import useWindowDimensions from 'hookmart/useWindowDimensions'

const WhichIsBigger = () => {
    const { width, height } = useWindowDimensions()

    if (width > height) {
        return <h1>CAUTION: Wide Load 🚚</h1>
    } else if (height > width) {
        return <h1>How's the weather up there? ⛅</h1>
    } else {
        return <h1>A perfect square!</h1>
    }
}
```
</div>
