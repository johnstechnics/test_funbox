import { useState } from "react";

export const Product = (props) => {

    const [hover, setHover] = useState(false);

    const setClassNameActive = () => {
        if (!props.product.available) {
            return 'disable';
        } else if (props.selected.find(i => i === props.product.id)) {
            return 'active';
        } else {
            return '';
        }
    };

    const setClassNameHover = () => {
        if (hover) {
            return 'hover';
        } else {
            return '';
        };
    };

    const mouseEnter = () => {
        props.selected.find(i => i === props.product.id) && setHover(true);
    };

    const mouseLeave = () => {
        setHover(false);
    };

    return (
        <div className="item">
            <div
                className={`item__card ${setClassNameActive()} ${setClassNameHover()}`}
                onClick={() => props.onSelect(props.product.id)}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
            >
                <div className="item__header">
                    <p className="item__subtitle">
                        Сказочное заморское яство
                    </p>
                    <p className="item__title">
                        Нямушка
                    </p>
                    <p className="item__taste">
                        {props.product.taste}
                    </p>
                    <p className="item__dose">
                        <span>{props.product.dose}</span> порций
                    </p>
                    <p className="item__gift">
                        <span>{props.product.gift.amount && props.product.gift.amount}</span> {props.product.gift.text}
                    </p>
                    <p className="item__comment">
                        {props.product.comment && props.product.comment}
                    </p>
                </div>
                <div className="item__weight item-weight">
                    <p className="item-weight__amount">
                        {props.product.weight}
                    </p>
                    <p className="item-weight__units">
                        кг
                    </p>
                </div>
                <div className="item__img"></div>
            </div>
            {!props.product.available ? (
                <p className="item__not-available-text">
                    {`Печалька, ${props.product.taste} закончился.`}
                </p>
            ) : props.selected.find(i => i === props.product.id) ? (
                <p className="item__taste-desc">
                    {props.product.tasteDesc}
                </p>
            ) : (
                <p className="item__link">
                    Чего сидишь? Порадуй котэ, <a href="#" onClick={(event) => {
                        event.preventDefault();
                        props.onSelect(props.product.id)
                    }}><span>купи</span>.</a>
                </p>
            )}
        </div>
    );
};
