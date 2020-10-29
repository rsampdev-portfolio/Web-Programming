import React from 'react'
import ColorSlider from './ColorSlider'
import ColorOutput from './ColorOutput'
import styles from './ColorBrowser.module.css'

function ColorBrowser() {
    let [red, setRed] = React.useState(Math.floor(Math.random() * 256));
    let [green, setGreen] = React.useState(Math.floor(Math.random() * 256));
    let [blue, setBlue] = React.useState(Math.floor(Math.random() * 256));

    function getRandomColor() {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    return (
        <section className={styles["color-browser"]}>
            <h1>Welcome to the Color Browser</h1>
            <div className={styles.sliders}>
                <ColorSlider
                    name="red"
                    label="Red"
                    min={0}
                    max={255} 
                    value={red}
                    onChange={e => setRed(Number(e.target.value))}
                />

                <ColorSlider
                    name="green"
                    label="Green"
                    min={0}
                    max={255}
                    value={green}
                    onChange={e => setGreen(Number(e.target.value))}
                />

                <ColorSlider
                    name="blue"
                    label="Blue"
                    min={0}
                    max={255}
                    value={blue}
                    onChange={e => setBlue(Number(e.target.value))}
                    />
            </div>

            <ColorOutput
                red={red}
                green={green}
                blue={blue}
            />
            
            <br/>
            <button onClick={getRandomColor}>Random Color</button>
        </section>
    )
}

export default ColorBrowser