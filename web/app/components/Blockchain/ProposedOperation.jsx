import React from "react";
import FormattedAsset from "../Utility/FormattedAsset";
import {Link, PropTypes} from "react-router";
import classNames from "classnames";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import {operations} from "chain/chain_types";
import market_utils from "common/market_utils";
import utils from "common/utils";
import LinkToAccountById from "../Blockchain/LinkToAccountById";
import LinkToAssetById from "../Blockchain/LinkToAssetById";
import BindToChainState from "../Utility/BindToChainState";
import FormattedPrice from "../Utility/FormattedPrice";
import ChainTypes from "../Utility/ChainTypes";
import ChainStore from "api/ChainStore";
import account_constants from "chain/account_constants";
import Icon from "../Icon/Icon";
import MemoText from "./MemoText";
import TranslateWithLinks from "../Utility/TranslateWithLinks";

require("./operations.scss");

let ops = Object.keys(operations);
let listings = account_constants.account_listing;

class TransactionLabel extends React.Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.color !== this.props.color ||
            nextProps.type !== this.props.type
        );
    }
    render() {
        let trxTypes = counterpart.translate("transaction.trxTypes");
        let labelClass = classNames("label", this.props.color || "info");
        return (
            <span className={labelClass}>
                {trxTypes[ops[this.props.type]]}
            </span>
        );
    }
}

class Row extends React.Component {
    static contextTypes = {
        history: PropTypes.history
    };

    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this);
    }

    showDetails(e) {
        e.preventDefault();
        this.context.history.pushState(null, `/block/${this.props.block}`);
    }

    render() {
        let {block, fee, color, type, hideDate, hideFee, hideOpLabel} = this.props;

        fee.amount = parseInt(fee.amount, 10);
        let endDate = counterpart.localize(new Date(this.props.expiration), { format: 'short' });

        return (
            <div style={{padding: "5px 0"}}>
                {hideOpLabel ? null : (
                    <span className="left-td">
                        <a href onClick={this.showDetails}>
                            <TransactionLabel color={color} type={type} />
                        </a>
                    </span>)}
                <span>
                    {this.props.info}&nbsp;
                    {hideFee ? null : (
                        <span className="facolor-fee">
                            (<FormattedAsset amount={fee.amount} asset={fee.asset_id} /> fee)
                        </span>)}
                </span>
                {this.props.expiration ? (
                    <div style={{paddingTop: 5, fontSize: "0.85rem"}}>
                        <span><Translate content="proposal.expires" />: {endDate}</span>
                    </div>) : null}
            </div>
        );
    }
}

class ProposedOperation extends React.Component {

    static defaultProps = {
        op: [],
        current: "",
        block: null,
        hideDate: false,
        hideFee: false,
        hideOpLabel: false,
        csvExportMode: false
    };

    static propTypes = {
        op: React.PropTypes.array.isRequired,
        current: React.PropTypes.string,
        block: React.PropTypes.number,
        hideDate: React.PropTypes.bool,
        hideFee: React.PropTypes.bool,
        csvExportMode: React.PropTypes.bool
    };

    // shouldComponentUpdate(nextProps) {
    //     return utils.are_equal_shallow(nextProps.op, this.props.op);
    // }

    linkToAccount(name_or_id) {
        if(!name_or_id) return <span>-</span>;
        return utils.is_object_id(name_or_id) ?
            <LinkToAccountById account={name_or_id}/> :
            <Link to={`/account/${name_or_id}/overview`}>{name_or_id}</Link>;
    }

    linkToAsset(symbol_or_id) {
        if(!symbol_or_id) return <span>-</span>;
        return utils.is_object_id(symbol_or_id) ?
            <LinkToAssetById asset={symbol_or_id}/> :
            <Link to={`/asset/${symbol_or_id}`}>{symbol_or_id}</Link>;
    }

    render() {
        let {op, current, block} = this.props;
        let line = null, column = null, color = "info";
        
        switch (ops[op[0]]) { // For a list of trx types, see chain_types.coffee

            case "transfer":

                let memoComponent = null;

                if(op[1].memo) {
                    memoComponent = <MemoText memo={op[1].memo} />
                }

                color = "success";
                op[1].amount.amount = parseFloat(op[1].amount.amount);

                column = (
                    <span key={"transfer_" + this.props.key} className="right-td">
                        <TranslateWithLinks
                            string="proposal.transfer"
                            keys={[
                                {type: "account", value: op[1].from, arg: "from"},
                                {type: "amount", value: op[1].amount, arg: "amount", decimalOffset: op[1].amount.asset_id === "1.3.0" ? 5 : null},
                                {type: "account", value: op[1].to, arg: "to"}
                            ]}                                    
                        />
                        {memoComponent}
                    </span>
                );

                break;

            case "limit_order_create":
                color = "warning";

                let isAsk = market_utils.isAskOp(op[1]);

                column = (
                        <span>
                            <TranslateWithLinks
                                string={isAsk ? "proposal.limit_order_sell" : "proposal.limit_order_buy"}
                                keys={[
                                    {type: "account", value: op[1].seller, arg: "account"},
                                    {type: "amount", value: isAsk ? op[1].amount_to_sell : op[1].min_to_receive, arg: "amount"},
                                    {type: "price", value: {base: isAsk ? op[1].min_to_receive : op[1].amount_to_sell, quote: isAsk ? op[1].amount_to_sell : op[1].min_to_receive}, arg: "price"}
                                ]}                                    
                            />
                        </span>
                );
                break;


            case "limit_order_cancel":
                color = "cancel";
                column = (
                    <span>
                        {this.linkToAccount(op[1].fee_paying_account)}&nbsp;
                        <Translate component="span" content="transaction.limit_order_cancel" />
                        &nbsp;#{op[1].order.substring(4)}
                    </span>
                );
                break;

            case "short_order_cancel":
                color = "cancel";
                column = (
                    <span>
                        <Translate component="span" content="transaction.short_order_cancel" />
                        &nbsp;{op[1].order}
                    </span>
                );
                break;

            case "call_order_update":
                color = "warning";
                column = (
                    <span>
                        {this.linkToAccount(op[1].funding_account)}&nbsp;
                        <Translate component="span" content="transaction.call_order_update" />
                        &nbsp;{this.linkToAsset(op[1].delta_debt.asset_id)}
                    </span>
                );
                break;

            case "key_create":
                column = (
                        <span>
                            <Translate component="span" content="transaction.create_key" />
                        </span>
                );
                break;

            case "account_create":
                if (current === op[1].registrar) {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.reg_account" />
                            &nbsp;{this.linkToAccount(op[1].name)}
                        </span>
                    );
                } else {
                    column = (
                        <span>
                            {this.linkToAccount(op[1].name)}
                            &nbsp;<Translate component="span" content="transaction.was_reg_account" />
                            &nbsp;{this.linkToAccount(op[1].registrar)}
                        </span>
                    );
                }
                break;

            case "account_update":

                column = (
                    <span>
                        <TranslateWithLinks
                            string="proposal.update_account"
                            keys={[
                                {type: "account", value: op[1].account, arg: "account"},
                            ]}                                    
                        />
                    </span>
                );

                break;

            case "account_whitelist":

                let label = op[1].new_listing === listings.no_listing ? "unlisted_by" :
                              op[1].new_listing === listings.white_listed ? "whitelisted_by" :
                              "blacklisted_by";
                column = (
                    <span>
                        <BindToChainState.Wrapper lister={op[1].authorizing_account} listee={op[1].account_to_list}>
                            { ({lister, listee}) =>
                                <Translate
                                    component="span"
                                    content={"transaction." + label}
                                    lister={lister.get("name")}
                                    listee={listee.get("name")}
                                />

                            }
                        </BindToChainState.Wrapper>
                    </span>
                )
                // if (current === op[1].authorizing_account) {
                //     column = (
                //         <span>
                //             <Translate component="span" content="transaction.whitelist_account" />
                //             &nbsp;{this.linkToAccount(op[1].account_to_list)}
                //         </span>
                //     );
                // } else {
                //     column = (
                //         <span>
                //             <Translate component="span" content="transaction.whitelisted_by" />
                //             &nbsp;{this.linkToAccount(op[1].authorizing_account)}
                //         </span>
                //     );
                // }
                break;

            case "account_upgrade":
                if( op[1].upgrade_to_lifetime_member ) {
                   column = (
                       <span>
                       {this.linkToAccount(op[1].account_to_upgrade) } &nbsp;
                           <Translate component="span" content="transaction.lifetime_upgrade_account" />
                       </span>
                   );
                } else {
                   column = (
                       <span>
                       {this.linkToAccount(op[1].account_to_upgrade) } &nbsp;
                           <Translate component="span" content="transaction.annual_upgrade_account" />
                       </span>
                   );

                }
                break;

            case "account_transfer":
                column = (
                    <span>
                        <Translate component="span" content="transaction.transfer_account" />
                        &nbsp;{this.linkToAccount(op[1].account_id)}
                        <Translate component="span" content="transaction.to" />
                        &nbsp;{this.linkToAccount(op[1].new_owner)}
                    </span>
                );
                break;

            case "asset_create":
                color = "warning";
                column = (
                    <span>
                        {this.linkToAccount(op[1].issuer)}&nbsp;
                        <Translate component="span" content="transaction.create_asset" />
                        &nbsp;{this.linkToAsset(op[1].symbol)}
                    </span>
                );
                break;

            case "asset_update":
            case "asset_update_bitasset":
                color = "warning";
                column = (
                    <span>
                        <Translate component="span" content="transaction.update_asset" />
                        &nbsp;{this.linkToAsset(op[1].asset_to_update)}
                    </span>
                );
                break;

            case "asset_update_feed_producers":
                color = "warning";

                if (current === op[1].issuer) {
                    column = (
                        <span>
                            {this.linkToAccount(op[1].issuer)}&nbsp;
                            <Translate component="span" content="transaction.update_feed_producers" />
                            &nbsp;{this.linkToAsset(op[1].asset_to_update)}
                        </span>
                    );
                } else {
                    column = (
                        <span>
                            {this.linkToAccount(op[1].issuer)}&nbsp;
                            <Translate component="span" content="transaction.feed_producer" />
                            &nbsp;{this.linkToAsset(op[1].asset_to_update)}
                        </span>
                    );
                }
                break;

            case "asset_issue":
                color = "warning";
                op[1].asset_to_issue.amount = parseInt(op[1].asset_to_issue.amount, 10);
                column = (
                    <span>
                        {this.linkToAccount(op[1].issuer)}
                        &nbsp;<Translate component="span" content="transaction.asset_issue" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].asset_to_issue.amount} asset={op[1].asset_to_issue.asset_id} />
                        &nbsp;<Translate component="span" content="transaction.to" />
                        &nbsp;{this.linkToAccount(op[1].issue_to_account)}
                    </span>
                );
                break;

            case "asset_burn":
                color = "cancel";
                column = (
                    <span>
                        <Translate component="span" content="transaction.burn_asset" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount_to_burn.amount} asset={op[1].amount_to_burn.asset_id} />
                    </span>
                );
                break;

            case "asset_fund_fee_pool":
                color = "warning";
                let asset = ChainStore.getAsset( op[1].asset_id );
                if( asset ) asset = asset.get( "symbol" );
                else asset = op[1].asset_id;
                column = (
                    <span>
                        {this.linkToAccount(op[1].from_account)} &nbsp;
                        <Translate component="span" content="transaction.fund_pool"  asset={asset} />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount} asset="1.3.0" />
                    </span>
                );
                break;

            case "asset_settle":
                color = "warning";
                column = (
                    <span>
                        <Translate component="span" content="transaction.asset_settle" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount.amount} asset={op[1].amount.asset_id} />
                    </span>
                );
                break;

            case "asset_global_settle":
                color = "warning";
                column = (
                    <span>
                        <Translate component="span" content="transaction.asset_global_settle" />
                        &nbsp;{this.linkToAsset(op[1].asset_to_settle)}
                        &nbsp;<Translate component="span" content="transaction.at" />
                        &nbsp;<FormattedPrice
                                style={{fontWeight: "bold"}}
                                quote_amount={op[1].price.quote.amount}
                                quote_asset={op[1].price.quote.asset_id}
                                base_asset={op[1].price.base.asset_id}
                                base_amount={op[1].price.base.amount}
                            />
                    </span>
                );
                break;

            case "asset_publish_feed":
                color = "warning";
                column = (
                    <span>
                        {this.linkToAccount(op[1].publisher)}&nbsp;
                        <Translate component="span" content="transaction.publish_feed" />
                        &nbsp;<FormattedPrice
                            base_asset={op[1].feed.settlement_price.base.asset_id}
                            quote_asset={op[1].feed.settlement_price.quote.asset_id}
                            base_amount={op[1].feed.settlement_price.base.amount}
                            quote_amount={op[1].feed.settlement_price.quote.amount}
                        />
                    </span>
                );
                break;

            case "witness_create":
                column = (
                    <span>
                        <Translate component="span" content="transaction.witness_create" />
                        &nbsp;{this.linkToAccount(op[1].witness_account)}
                    </span>
                );

                break;

            case "witness_update":
                column = (
                    <span>
                        <Translate component="span" content="transaction.witness_update" />
                        &nbsp;{this.linkToAccount(op[1].witness_account)}
                    </span>
                );

                break;

            case "witness_withdraw_pay":
                console.log("witness_withdraw_pay:", op[1].witness_account);
                if (current === op[1].witness_account) {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.witness_pay" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount} asset={"1.3.0"} />
                            <Translate component="span" content="transaction.to" />
                            &nbsp;{this.linkToAccount(op[1].witness_account)}
                        </span>
                    );
                } else {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.received" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount} asset={"1.3.0"} />
                            <Translate component="span" content="transaction.from" />
                            &nbsp;{this.linkToAccount(op[1].witness_account)}
                        </span>
                    );
                }
                break;

            case "proposal_create":
                column = (
                    <span>
                        <Translate component="span" content="transaction.proposal_create" />
                    </span>
                );
                break;

            case "proposal_update":
                column = (
                    <span>
                        <Translate component="span" content="transaction.proposal_update" />
                    </span>
                );
                break;

            case "proposal_delete":
                column = (
                    <span>
                        <Translate component="span" content="transaction.proposal_delete" />
                    </span>
                );
                break;

            case "withdraw_permission_create":
                column = (
                    <span>
                        <Translate component="span" content="transaction.withdraw_permission_create" />
                        &nbsp;{this.linkToAccount(op[1].withdraw_from_account)}
                        <Translate component="span" content="transaction.to" />
                        &nbsp;{this.linkToAccount(op[1].authorized_account)}
                    </span>
                );
                break;

            case "withdraw_permission_update":
                column = (
                    <span>
                        <Translate component="span" content="transaction.withdraw_permission_update" />
                        &nbsp;{this.linkToAccount(op[1].withdraw_from_account)}
                        <Translate component="span" content="transaction.to" />
                        &nbsp;{this.linkToAccount(op[1].authorized_account)}
                    </span>
                );
                break;

            case "withdraw_permission_claim":
                column = (
                    <span>
                        <Translate component="span" content="transaction.withdraw_permission_claim" />
                        &nbsp;{this.linkToAccount(op[1].withdraw_from_account)}
                        <Translate component="span" content="transaction.to" />
                        &nbsp;{this.linkToAccount(op[1].withdraw_to_account)}
                    </span>
                );
                break;

            case "withdraw_permission_delete":
                column = (
                    <span>
                        <Translate component="span" content="transaction.withdraw_permission_delete" />
                        &nbsp;{this.linkToAccount(op[1].withdraw_from_account)}
                        <Translate component="span" content="transaction.to" />
                        &nbsp;{this.linkToAccount(op[1].authorized_account)}
                    </span>
                );
                break;

            case "fill_order":
                color = "success";
                o = op[1];
                column = (
                        <span>
                            {this.linkToAccount(op[1].account_id)}&nbsp;
                            <Translate component="span" content="transaction.paid" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].pays.amount} asset={op[1].pays.asset_id} />
                            &nbsp;<Translate component="span" content="transaction.obtain" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].receives.amount} asset={op[1].receives.asset_id} />
                            &nbsp;<Translate component="span" content="transaction.at" />
                            &nbsp;<FormattedPrice base_asset={o.pays.asset_id} base_amount={o.pays.amount}
                                                  quote_asset={o.receives.asset_id} quote_amount={o.receives.amount}  />
                        </span>
                );
                break;

            case "global_parameters_update":
                column = (
                    <span>
                        <Translate component="span" content="transaction.global_parameters_update" />
                    </span>
                );
                break;

            case "file_write":
                column = (
                    <span>
                        <Translate component="span" content="transaction.file_write" />
                    </span>
                );
                break;

            case "vesting_balance_create":
                column = (
                    <span>
                        &nbsp;{this.linkToAccount(op[1].creator)}
                        <Translate component="span" content="transaction.vesting_balance_create" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount.amount} asset={op[1].amount.asset_id} />
                        &nbsp;{this.linkToAccount(op[1].owner)}
                    </span>
                );
                break;

            case "vesting_balance_withdraw":
                column = (
                    <span>
                        {this.linkToAccount(op[1].owner)}&nbsp;
                        <Translate component="span" content="transaction.vesting_balance_withdraw" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount.amount} asset={op[1].amount.asset_id} />
                    </span>
                );
                break;

            case "bond_create_offer":
                column = (
                    <span>
                        <Translate component="span" content="transaction.bond_create_offer" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount.amount} asset={op[1].amount.asset_id} />
                    </span>
                );
                break;

            case "bond_cancel_offer":
                column = (
                    <span>
                        <Translate component="span" content="transaction.bond_cancel_offer" />
                        &nbsp;{op[1].offer_id}
                    </span>
                );
                break;

            case "bond_accept_offer":
                if (current === op[1].lender) {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.bond_accept_offer" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount_borrowed.amount} asset={op[1].amount_borrowed.asset_id} />
                            <Translate component="span" content="transaction.to" />
                            &nbsp;{this.linkToAccount(op[1].borrower)}
                        </span>
                    );
                } else if (current === op[1].borrower) {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.bond_accept_offer" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount_borrowed.amount} asset={op[1].amount_borrowed.asset_id} />
                            <Translate component="span" content="transaction.from" />
                            &nbsp;{this.linkToAccount(op[1].lender)}
                        </span>
                    );
                }
                break;

            case "bond_claim_collateral":
                if (current === op[1].lender) {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.bond_pay_collateral" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].collateral_claimed.amount} asset={op[1].collateral_claimed.asset_id} />
                            <Translate component="span" content="transaction.to" />
                            &nbsp;{this.linkToAccount(op[1].claimer)}
                        </span>
                    );
                } else if (current === op[1].claimer) {
                    column = (
                        <span>
                            <Translate component="span" content="transaction.bond_claim_collateral" />
                            &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].collateral_claimed.amount} asset={op[1].collateral_claimed.asset_id} />
                            <Translate component="span" content="transaction.from" />
                            &nbsp;{this.linkToAccount(op[1].lender)}
                        </span>
                    );
                }
                break;

            case "worker_create":
                column = (
                    <span>
                        <Translate component="span" content="transaction.create_worker" />
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].daily_pay} asset={"1.3.0"} />
                    </span>
                );
                break;


            case "balance_claim":
                color = "success";
                op[1].total_claimed.amount = parseInt(op[1].total_claimed.amount, 10);
                column = (
                    <span>
                        {this.linkToAccount(op[1].deposit_to_account)}&nbsp;
                        <BindToChainState.Wrapper asset={op[1].total_claimed.asset_id}>
                           { ({asset}) =>
                                   <Translate
                                       component="span"
                                       content="transaction.balance_claim"
                                       balance_amount={utils.format_asset(op[1].total_claimed.amount, asset)}
                                       balance_id={op[1].balance_to_claim.substring(5)}
                                   />
                           }
                       </BindToChainState.Wrapper>
                    </span>
                );
                break;

            case "committee_member_create":
                column = (
                    <span>
                        <Translate component="span" content="transaction.committee_member_create" />
                        &nbsp;{this.linkToAccount(op[1].committee_member_account)}
                    </span>
                );
                break;

            case "transfer_to_blind":
                column = (
                    <span>
                        {this.linkToAccount(op[1].from)}
                        &nbsp;<Translate component="span" content="transaction.sent"/>
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount.amount} asset={op[1].amount.asset_id} />
                    </span>
                );
                break;

            case "transfer_from_blind":
                column = (
                    <span>
                        {this.linkToAccount(op[1].to)}
                        &nbsp;<Translate component="span" content="transaction.received"/>
                        &nbsp;<FormattedAsset style={{fontWeight: "bold"}} amount={op[1].amount.amount} asset={op[1].amount.asset_id} />
                    </span>
                );
                break;

            case "asset_claim_fees":
                color = "success";
                op[1].amount_to_claim.amount = parseInt(op[1].amount_to_claim.amount, 10);
                column = (
                    <span>
                        {this.linkToAccount(op[1].issuer)}&nbsp;
                        <BindToChainState.Wrapper asset={op[1].amount_to_claim.asset_id}>
                           { ({asset}) =>
                                   <Translate
                                       component="span"
                                       content="transaction.asset_claim_fees"
                                       balance_amount={utils.format_asset(op[1].amount_to_claim.amount, asset)}
                                       asset={asset.get("symbol")}
                                   />
                           }
                       </BindToChainState.Wrapper>
                    </span>
                );
                break;

            case "committee_member_update_global_parameters":
                column = (
                    <span>
                        <TranslateWithLinks
                            string="proposal.committee_member_update_global_parameters"
                            keys={[
                                {type: "account", value: "1.2.0", arg: "account"}
                            ]}                                                    
                        />
                    </span>
                );
                break;

            case "custom":
                column = (
                    <span>
                        <Translate component="span" content="transaction.custom" />
                    </span>
                );
                break;

            default:
                console.log("unimplemented op:", op);
                column = (
                    <span>
                        <Link to={`/block/${block}`}>#{block}</Link>
                    </span>

                );
        }

        if (this.props.csvExportMode) {
            const globalObject = ChainStore.getObject("2.0.0");
            const dynGlobalObject = ChainStore.getObject("2.1.0");
            const block_time = utils.calc_block_time(block, globalObject, dynGlobalObject)
            return (
                <div key={this.props.key}>
                    <div>{block_time ? block_time.toLocaleString() : ""}</div>
                    <div>{ops[op[0]]}</div>
                    <div>{column}</div>
                    <div><FormattedAsset amount={parseInt(op[1].fee.amount, 10)} asset={op[1].fee.asset_id} /></div>
                </div>
            );
        }

        line = column ? (
            <Row
                index={this.props.index}
                block={block}
                type={op[0]}
                color={color}
                fee={op[1].fee}
                hideDate={this.props.hideDate}
                hideFee={this.props.hideFee}
                hideOpLabel={this.props.hideOpLabel}
                info={column}
                expiration={this.props.expiration}
            >
            </Row>
        ) : null;



        return (
            line ? line : <div></div>
        );
    }
}

export default ProposedOperation;
