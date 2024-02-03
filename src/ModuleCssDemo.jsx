import React,{Component} from "react";
import  ReactDOM  from "react-dom";

import styles from './Module.module.css';
class Module  extends Component{
    render(){
        return(
           
                <div className={styles.div1}>
                    <h1 className={styles.heading}>Module page</h1>
                    <h2>Welcome to IEC</h2>
                    <h2 className={styles.paraCSS}>Cource offered</h2>
                    <p className="">Fullstack Java</p>
                    <p className="">Fullstack html</p>
                </div>
            
        )
    }
}
export default Module;