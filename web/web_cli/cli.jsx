import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Apis from "rpc_api/ApiInstances";
import {object_type} from "chain/chain_types";
import { Router, Link, Route ,browserHistory} from 'react-router';

class cli extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commands: "",
            command:"",
            paras:[],
            result: ""

        };
    }
    _oncommand(event){
        let value=event.target.value;
        let paras=value.split(" ");
        //let command=commands[0];
        let command=paras.shift();
        this.setState({
            commands:value,
            command:command,
            paras:paras
        });
    }
    object_to_string(obj,str,deep=1){
        if( deep=1){var str="";}
        var ent="\n";
        var blank="  ";
        var bracket="]"+ent;
        for (let i=0;i<deep;i++){
            blank+=blank;
        }
        let keys=Object.keys(obj);
        for (let i=0;i<keys.length;i++ ){
            let k=keys[i];
            let v=obj[k];
            if (typeof(v)==="object"){
                str=this.object_to_string(v,str,deep+1);}
            else
            if( i===0)
            {blank="["+ent+blank;}
            else{blank="  ";}
            if(i===(keys.length-1))
                str=str+blank+k+": "+v+ent+bracket;
            else
                str=str+blank+k+": "+v+ent;
        }
        return str
    }
    _onkeypress() {
        //console.log("command",this.state.command,"paras",this.state.paras);
        let str="";
        Apis.instance().db_api().exec(this.state.command,this.state.paras).then(result=>{
            console.log(result);
            let re_str=this.object_to_string(result,str);
            this.setState({result:re_str});
        });
    }
    render() {
        return (
            <div className="nav">
                <div>
                <span>command</span>
                </div>

                <input
                    size="200"
                    type="text"
                    onkeydown={this._onkeypress.bind(this)}
                    value={this.state.commands}
                    onChange={this._oncommand.bind(this)}
                />
                <input
                    type="button"
                    value="ok"
                    onClick={this._onkeypress.bind(this)}
                />
                <div>
                <span>output</span>
                </div>
                <textarea rows="20" cols="100" value={this.state.result}>{this.state.result}</textarea>
            </div>
        );
    }
};
export default cli;

//let routes = (
//    <Route path="/" component={App}>
//    </Route>
//);
//ReactDOM.render(<Router history={browserHistory} routes={routes}/>, document.getElementById("content"));