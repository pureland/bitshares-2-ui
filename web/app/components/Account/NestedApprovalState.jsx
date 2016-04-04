import React from "react";
import ChainTypes from "../Utility/ChainTypes";
import BindToChainState from "../Utility/BindToChainState";
import Immutable from "immutable";
import utils from "common/utils";
import Icon from "../Icon/Icon";
import LinkToAccountById from "../Blockchain/LinkToAccountById";
import pu from "common/permission_utils";
import {cloneDeep} from "lodash";

@BindToChainState()
class AccountPermissionTree extends React.Component {

    static propTypes = {
        account: ChainTypes.ChainAccount.isRequired,
        accounts: ChainTypes.ChainAccountsList,
        indent: React.PropTypes.number.isRequired
    };

    static defaultProps = {
        indent: 0
    };

    render() {
        let {account, accounts, available, availableKeys, permission} = this.props;

        let isOK = permission.isAvailable(available);
        let isNested = permission.isNested();

        let status = [];
        status.push(
            <div key={account.get("id")} style={{width: "100%", paddingBottom: 5}}>
                <div
                    style={{
                        display: "inline-block",
                        paddingLeft: `${5 * this.props.indent}%`
                    }}
                >
                    <LinkToAccountById subpage="permissions" account={account.get("id")} />
                    {!isNested ? ` (${permission.weight})` : null}
                </div>
                <div className="float-right" style={{paddingLeft: 20, marginRight: 10}}>
                    {!isNested ? (
                    <span>
                        {isOK ? <Icon name="checkmark-circle" size="1x" className="success"/> :
                                <Icon name="cross-circle" size="1x" className="error"/>}
                    </span>) : (
                    <span className={isOK ? "success-text" : ""}>
                        {permission.getStatus(available, availableKeys)} / {permission.threshold}
                    </span>
                    )}
                </div>
            </div>
        );

        if (permission.isNested) {
            permission.accounts.forEach(subAccount => {
                status.push(
                    <AccountPermissionTree
                        key={subAccount.id}
                        indent={this.props.indent + 1}
                        account={subAccount.id}
                        accounts={subAccount.accounts}
                        permission={subAccount}
                        available={available}
                        availableKeys={availableKeys}
                    />
                );
            })

            if (permission.keys.length && permission.isNested()) {
                permission.keys.forEach(key => {
                    status.push(
                        <KeyPermissionBranch
                            key={key.id}
                            permission={key}
                            available={availableKeys}
                            indent={this.props.indent + 1}
                        />
                    );
                })
            }
        }

        return <div>{status}</div>;
    }
}

class KeyPermissionBranch extends React.Component {

    static propTypes = {
        indent: React.PropTypes.number.isRequired
    };

    static defaultProps = {
        indent: 0
    };

    render() {
        let {available, permission} = this.props;

        let isOK = permission.isAvailable(available);

        let status = [];
        status.push(
            <div key={permission.id} style={{width: "100%", paddingBottom: 5}}>
                <div
                    style={{
                        display: "inline-block",
                        paddingLeft: `${5 * this.props.indent}%`
                    }}
                >
                    <span>{permission.id.substr(0, 20 - 4 * this.props.indent)}... ({permission.weight})</span>
                </div>
                <div className="float-right" style={{paddingLeft: 20, marginRight: 10}}>
                    <span>
                        {isOK ? <Icon name="checkmark-circle" size="1x" className="success"/> :
                                <Icon name="cross-circle" size="1x" className="error"/>}
                    </span>
                </div>
            </div>
        );

        return <div>{status}</div>;
    }
}

class SecondLevel extends React.Component {

    render() {
        let {requiredPermissions, available, availableKeys, type} = this.props;

        let status = [];

        requiredPermissions.forEach(account => {
            status.push(
                <AccountPermissionTree
                    key={account.id}
                    account={account.id}
                    accounts={account.accounts}
                    permission={account}
                    available={available}
                    availableKeys={availableKeys}
                />
            );
        });

        return (
            <div>
                {status}
            </div>
        );
    }
}

@BindToChainState({keep_updating: true})
class FirstLevel extends React.Component {

    static propTypes = {
       required: ChainTypes.ChainAccountsList,
       available: ChainTypes.ChainAccountsList
    };

    static defaultProps = {
        type: "active",
        added: null,
        removed: null
    };

    constructor() {
        super();

        this.state = {
            requiredPermissions: []
        };

        this._updateState = this._updateState.bind(this);
    }

    componentWillMount() {
        this._updateState();

        ChainStore.subscribe(this._updateState);
    }

    componentWillUnmount() {
        ChainStore.unsubscribe(this._updateState);
    }

    _updateState() {
        let required = pu.listToIDs(this.props.required);
        let available = pu.listToIDs(this.props.available);

        this.setState({
            requiredPermissions: pu.unnest(required, this.props.type),
            required,
            available
        }); 
    }

    render() {
        let {type, proposal, added, removed, availableKeys} = this.props;
        let {requiredPermissions, required, available} = this.state;

        available = cloneDeep(available);
        availableKeys = availableKeys.toJS();

        if (added) {
            available.push(added);
            availableKeys.push(added);
        }

        if (removed) {
            if (available.indexOf(removed) !== -1) {
                available.splice(available.indexOf(removed), 1);
            }
            if (availableKeys.indexOf(removed) !== -1) {
                availableKeys.splice(availableKeys.indexOf(removed), 1);
            }
        }

        return (
            <SecondLevel
                type={type}
                added={added}
                removed={removed}
                required={required}
                available={available}
                availableKeys={availableKeys}
                requiredPermissions={requiredPermissions}
            />
        );
    }
}

@BindToChainState({keep_updating: true})
export default class ProposalWrapper extends React.Component {

    static propTypes = {
       proposal: ChainTypes.ChainObject.isRequired,
       type: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        type: "active",
        added: null
    };

    render() {
        let {proposal, type} = this.props;

        let available = proposal.get(`available_${type}_approvals`);
        let availableKeys = proposal.get(`available_key_approvals`);
        let required = proposal.get(`required_${type}_approvals`);

        return (
            <FirstLevel
                {...this.props}
                required={required}
                available={available}
                availableKeys={availableKeys}
            />
        );
    }
}