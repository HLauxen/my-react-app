import React from "react";
import style from './Botao.module.scss';

interface BotaoProps {
    type: "button" | "submit" | "reset" | undefined
    text: string
}

const Botao = (props: BotaoProps) => {
        const type = props.type || "button";
        return ( 
            <button type={type} className={style.botao}>
                {props.text}
            </button>
        )
    }
export default Botao;