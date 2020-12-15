import react from 'react';

const OptionCustom = (props) =>{

    const {onSelectHandler, option} = props;

    const clickHandler = (event)=>{
        event.preventDefault();
        const value = event.currentTarget.innerText || null;
        onSelectHandler(value);
    }

    return(
        <li onClick={clickHandler}>{option.value}</li>
    )
}

export default OptionCustom;