import React from "react";
import Translate from "react-translate-component";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import FormattedAsset from "../Utility/FormattedAsset";
import utils from "common/utils";
import classNames from "classnames";
import BalanceComponent from "../Utility/BalanceComponent";
import WalletApi from "rpc_api/WalletApi";
import WalletDb from "stores/WalletDb";
import FormattedPrice from "../Utility/FormattedPrice";
import counterpart from "counterpart";
import AssetStore from "stores/AssetStore";
import assetUtils from "common/asset_utils";
import AccountApi from "api/accountApi";
import Apis from "rpc_api/ApiInstances";
let wallet_api = new WalletApi();

import AccountSelector from "../Account/AccountSelector";
import AmountSelector from "../Utility/AmountSelector";
import map_test from "test/serialize_test";

@BindToChainState()
export default class IssueModal extends React.Component {
    static propTypes = {
        asset_to_dividend: ChainTypes.ChainAsset.isRequired,
        payer:ChainTypes.ChainAccount.isRequired,
        assets: React.PropTypes.array
    };
    static defaultProps = {
        minimum_amount:0
    };
    constructor(props) {
        super(props);
        this.state = {
            asset_to_dividend:props.asset_to_dividend,
            asset_dividend:props.asset_dividend,
            payer:props.payer,
            minimum_amount: props.minimum_amount,
            dividend_per_amount: props.dividend_per_amount,
            payer_id: null,
            discription:""
        };
    }
    onMinimumAmountChanged({amount}) {
        this.setState({minimum_amount: amount});
    }
    onDividendAmountChanged({amount,asset}) {
        this.setState({dividend_per_amount:amount});
        this.setState({asset_dividend:asset})
    }

    onPayerAccountChanged(payer) {
        let state = payer ? {payer: payer.get('name'), payer_id: payer.get('id')} : {payer_id: null};
        this.setState(state);
    }

    onPayerChanged(payer) {
        this.setState({payer: payer, payer_id: null});
    }
    onDiscriptionChanged(){

    }
    //_onSubmit(value)
    //{
    //    let _receivers=value;
    //    //_receivers=AccountApi.get_satisfied_account_balance(this.state.asset_to_dividend.get("id"),minimum_amount);
    //    let holders_amount=value.length;
    //    //AccountApi.get_satisfied_holder(this.state.asset_to_dividend.get("id"),minimum_amount,this._on);
    //    var tr = wallet_api.new_transaction();
    //    tr.add_type_operation("dividend", {
    //        fee: {
    //            amount: 0,
    //            asset_id: 0
    //        },
    //        "if_show":true,
    //        "issuer": this.state.payer_id,
    //        "shares_asset":this.state.asset_to_dividend.get("id"),
    //        "holder_amount":holders_amount,
    //        "dividend_asset":this.state.asset_dividend.get("id"),
    //        "min_shares":this.state.minimum_amount,
    //        "value_per_shares":this.state.dividend_per_amount,
    //        "receivers":_receivers,
    //        "description":""
    //    });
    //    console.log("dividend",tr.operations);
    //    return WalletDb.process_transaction(tr, null, true).then(result => {
    //        console.log("asset issue result:", result);
    //        // this.dispatch(account_id);
    //        return true;
    //    }).catch(error => {
    //        console.error("asset issue error: ", error);
    //        return false;
    //    });
    //}
    onSubmit() {
        let precision_shares= utils.get_asset_precision(this.state.asset_to_dividend.get("precision"));
        let precision_dividend= utils.get_asset_precision(this.state.asset_dividend.get("precision"));
        let minimum_amount = this.state.minimum_amount.replace(/,/g, "");
        let dividend_per_amount = this.state.dividend_per_amount.replace(/,/g, "");
        let asset_id=this.state.asset_to_dividend.get("id");
        let payer_id=this.state.payer_id;
        //let _receivers=this.props.dividend.get(receivers);
        minimum_amount *= precision_shares;
        dividend_per_amount*=precision_dividend;
        //AccountApi.get_satisfied_account_balance(this.state.asset_to_dividend.get("id"),minimum_amount,this._onSubmit);
        Apis.instance().db_api().exec("get_satisfied_account_balance", [
            asset_id,minimum_amount
        ]).then(v=>{
            let holders_amount=v.length;
            var tr = wallet_api.new_transaction();

            for (let i=0;i<holders_amount;i++ ){
                v[i][1]=v[i][1]/minimum_amount*dividend_per_amount;
            }
            tr.add_type_operation("dividend_hidden_operation", {
                fee: {
                    amount: 0,
                    asset_id: 0
                },
                "issuer": payer_id,
                //"shares_asset":this.state.asset_to_dividend.get("id"),
                //"dividend_asset":this.state.asset_dividend.get("id"),
                min_shares:{
                    amount: minimum_amount,
                    asset_id: this.state.asset_to_dividend.get("id")
                },
                dividend_per_shares:{
                    amount:dividend_per_amount,
                    asset_id:this.state.asset_dividend.get("id")
                },
                holder_amount:holders_amount,
                block_no:0,
                description:"test"
            });
            console.log("dividend",tr.operations);
            return WalletDb.process_transaction(tr, null, true).then(result => {
                console.log("dividend:", result);
                // this.dispatch(account_id);
                return true;
            }).catch(error => {
                console.error("asset issue error: ", error);
                return false;
            });
        });
    }

    render() {
        let asset_to_dividend = this.props.asset_to_dividend.get('id');
        let asset_symbol=(this.props.asset_to_dividend.get('symbol'));
        let payer=this.props.payer;
        let x=(this.state.minimum_amount===0)? " ": this.state.minimum_amount;
        let dividend_translate=counterpart.translate("account.dividend.dividend_per",{amounts: x})+" "+this.props.asset_to_dividend.get('symbol');
        let account_balances = payer.get("balances").toJS();
        let assets = Object.keys(account_balances).sort(utils.sortID);

        //dividend_translate=dividend_translate+asset_symbol;
        //console.log(typeof (dividend_translate));
        //console.log(dividend_translate);
        //console.log(<Translate content=account.dividend.dividend_per />);
        //console.log(this.state.minimum_amount);
        //console.log(this.props.asset_to_dividend.get('symbol'));
        return ( <form className="grid-block vertical full-width-c;ontent">
            <div className="content-block">
                <AccountSelector
                    label={"account.dividend.payer"}
                    accountName={payer.get('name')}
                    onAccountChanged={this.onPayerAccountChanged.bind(this)}
                    onChange={this.onPayerChanged.bind(this)}
                    account={payer}
                    disableActionButton={true}
                    tabIndex={1}
                />
            </div>
            <div className="content-block">
                <AmountSelector label="account.dividend.minimum_amount"
                                    transation_para="amounts=x"
                                    amount={this.state.minimum_amount}
                                    onChange={this.onMinimumAmountChanged.bind(this)}
                                    asset={ asset_to_dividend  }
                                    assets={[asset_to_dividend]}
                                    tabIndex={2}/>
                </div>
            <div className="content-block">
                <AmountSelector
                                label={dividend_translate}
                                dis_translation={true}
                                amount={this.state.dividend_per_amount}
                                onChange={this.onDividendAmountChanged.bind(this)}
                                asset={asset_to_dividend }
                                assets={assets}
                                tabIndex={3}/>
            </div>
            <div className="content-block">
                <input
                    type="text"
                    value={this.state.discription}
                    //onChange={this.setState({discription:this.value}) }
                    tabIndex={4}/>

            </div>
            <div className="content-block button-group">
                    <input
                        type="submit"
                        className="button success"
                        onClick={this.onSubmit.bind(this, this.state.to, this.state.amount )}
                        value={counterpart.translate("account.dividend.dividend_submit")}
                        tabIndex={5}
                    />

                    <div
                        className="button"
                        onClick={this.props.onClose}
                        tabIndex={6}
                    >
                        {counterpart.translate("cancel")}
                    </div>
            </div>
        </form> );
    }
}

export default IssueModal
