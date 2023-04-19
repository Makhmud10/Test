import React, { useState } from 'react';
import './Component.css'

const Calculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }

    const clear = () => {
        setResult("")
    }

    const calculate = () => {
        try{
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error");
        }

    }

        return(
            <>
                <div className="container">
                    <form>
                        <input type="text" value={result} class="main" />
                    </form>
                    <div class="row">
                        <button name='1' onClick={handleClick} class="col-sm-3 all">1</button>
                        <button name='2' onClick={handleClick} class="col-sm-3 all">2</button>
                        <button name='3' onClick={handleClick} class="col-sm-3 all">3</button>
                        <button name='+' onClick={handleClick} class="col-sm-3 all back-color">+</button>
                    </div>
                    <div class="row">
                        <button name='4' onClick={handleClick} class="col-sm-3 all">4</button>
                        <button name='5' onClick={handleClick} class="col-sm-3 all">5</button>
                        <button name='6' onClick={handleClick} class="col-sm-3 all">6</button>
                        <button name='-' onClick={handleClick} class="col-sm-3 all back-color">-</button>
                    </div>
                    <div class="row">
                        <button name='7' onClick={handleClick} class="col-sm-3 all">7</button>
                        <button name='8' onClick={handleClick} class="col-sm-3 all">8</button>
                        <button name='9' onClick={handleClick} class="col-sm-3 all">9</button>
                        <button name='*' onClick={handleClick} class="col-sm-3 all back-color">*</button>
                    </div>
                    <div class="row">
                        <button onClick={clear} id="clear" class="col-sm-3 all back-color-red">C</button>
                        <button name='0' onClick={handleClick} class="col-sm-3 all">0</button>
                        <button onClick={calculate} id="result" class="col-sm-3 all">=</button>
                        <button name='/' onClick={handleClick} class="col-sm-3 all back-color">/</button>
                    </div>
                </div>
            </>
        )
    }

export default Calculator;