import React, {Component} from 'react';
import Option from './Option/Option';
import OptionCustom from './OptionCustom/OptionCustom';

import styles from './Dropdown.module.scss';

class Dropdown extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected: null,
            open: false
        }

        this.onSelectClick = this.onSelectClick.bind(this);
        this.onSelectHandler = this.onSelectHandler.bind(this);
    }

    //todo implement select outside

    onSelectHandler(value){
        console.log("item selected: " + value);

        this.setState({
            selected: value,
            open: !this.state.open
        });
    }

    getOptions() {
        if(!this.props || !this.props.options){
            return null;
        }

        return this.props.options.map((option, index) =>{
            return <Option key={index} onSelectHandler={this.onSelectHandler} option={option}/>
        });
    }

    getItems(){
        if(!this.props || !this.props.options){
            return null;
        }

        return this.props.options.map((option, index)=>{
            return <OptionCustom key={index} onSelectHandler={this.onSelectHandler} option={option} />
        });
    }

    onSelectClick(event){
        event.preventDefault();
        this.setState({open: !this.state.open});
    }

    getSelectHtmlTemplate(){
        const options = this.getOptions();
        return <select>{options}</select>
    }

    getCustomSelect(){
        const items = this.getItems();
        return (
            <div className={styles.selectWrapper}>
                <div className={styles.selectedItem} onClick={this.onSelectClick}>
                    <span>{this.state.selected || "Select"}</span>
                </div>
                <div className={styles.optionWrapper}>
                    {this.state.open && <ul>{items}</ul>}
                </div>
            </div>
        )
    }

    render(){
        const select = this.getCustomSelect();
        return (
            <div className={styles.dropdown}>
                <div className={styles.selectWrapper}>
                    {select}
                </div>
            </div>
        )
    }
    
}

export default Dropdown;