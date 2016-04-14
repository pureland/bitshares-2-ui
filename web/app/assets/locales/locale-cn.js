module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "Español",
        tr: "Turkish"
    },
    header: {
        title: "Graphene (石墨烯)钱包",
        dashboard: "概览",
        explorer: "浏览",
        exchange: "交易",
        payments: "支付",
        logout: "注销",
        settings: "设置",
        current: "当前账户",
        create_account: "创建账户",
        create_asset: "创建资产",
        lock: "锁定钱包",
        unlock: "解锁",
        account: "账户",
        help: "帮助",
        locked_tip: "钱包已锁定，点击解锁。",
        unlocked_tip: "钱包已解锁，点击锁定。",
        update_asset: "更新资产"
    },
    account: {
        welcome: "欢迎使用 DevShares (自平台)系统",
        assets: "资产",
        market_value: "市值",
        hour_24: "日涨跌幅%",
        recent: "近期活动",
        name: "账户名",
        member: {
            stats: "资料",
            join: "加入于",
            reg: "注册人",
            ref: "推荐人",
            referrals: "被推荐人",
            rewards: "返现奖励",
            cashback: "返现",
            vested: "既得",
            ref_percentage: "推荐人奖励",
            network_percentage: "网络收取",
            fees_paid: "手续费总支出",
            fees_pending: "待结费用",
            fees_vested: "待解冻金额",
            in_orders: "委单冻结金额 %(core_asset)s ",
            unknown: "未知的会员",
            lifetime: "终身会员",
            basic: "普通会员",
            annual: "年度会员",
            registrar: "注册人",
            referrer: "推荐人",
            lifetime_referrer: "终身会员推荐人",
            membership: "会籍",
            fee_allocation: "手续费分配",
            upgrade_lifetime: "购买终身会籍",
            subscribe: "购买1年会籍",
            expires: "过期时间",
            membership_expiration: "会籍过期时间",
            fees_cashback: "手续费及现金返回",
            coindays: "币天",
            earned: "已完成币天",
            required: "要求的币天",
            remaining: "剩余解冻天数",
            claim: "立即领取",
            available: "可领取数量",
            referral_link: "你的推荐链接",
            referral_text: "分享此链接给你的朋友参与引荐计划"
        },
        connections: {
            known: "识别为",
            black: "被屏蔽"
        },
        asset: "资产",
        more: "查看更多",
        user_issued_assets: {
            symbol: "资产代码",
            name: "资产名称",
            description: "描述",
            max_supply: "最大供给量",
            precision: "精度",
            to: "发行到账户",
            details: "详细",
            market_fee: "交易手续费率",
            max_market_fee: "最大交易手续费",
            primary: "主要设定",
            optional: "可选设定",
            approx_fee: "资产创建费用预估",
            exists: "资产代码已存在",
            max_positive: "最大供应量必须是个大于0",
            core_exchange_rate: "手续费汇率",
            quote: "报价资产数量",
            quote_name: "报价资产",
            base: "基础资产数量",
            base_name: "基础资产",
            update_owner: "更新发行人",
            current_issuer: "当前发行人",
            new_issuer: "新发行人",
            flags: "旗标",
            charge_market_fee: "收取交易手续费",
            override_authority: "发行人可将资产收回",
            transfer_restricted: "所有转账必须通过发行人审核同意",
            disable_confidential: "禁止隐私交易",
            white_list: "要求资产持有人预先加入白名单",
            witness_fed_asset: "允许见证人提供喂价",
            committee_fed_asset: "允许理事会成员提供喂价",
            disable_force_settle: "禁止强制清算",
            global_settle: "允许发行人进行全局强制清算",
            advanced: "高级设定",
            need_asset: "这两个资产中至少有一个必须为 %(name)s",
            perm_warning: "警告：有些设定的禁用操作不可逆，生效后将无法重新启用。",
            issued_assets: "我发行的资产",
            "short": "短名 (最多32个字符)",
            condition: "条件 (最多60个字符)",
            expiry: "市场裁决日期",
            decimals: "小数点后位数",
            mpa: "智能币 SmartCoin",
            pm: "二元预测市场",
            bitasset_opts: "智能币 SmartCoin 选项",
            feed_lifetime_sec: "喂价有效时间（分钟）",
            minimum_feeds: "最少喂价数量",
            force_settlement_delay_sec: "强制清算发生前延迟时间（分钟）",
            force_settlement_offset_percent: "强制清算价格偏离百分比",
            maximum_force_settlement_volume: "强制清算最大数量（百分比）",
            backing: "做空时可抵押的资产类型",
            error_precision: "该资产的精度不同于 %(asset)s",
            error_invalid: "该资产不能使用",
            market: "关注的市场交易对"
        },
        dividend:{
            payer:"支付者",
            shares_asset:"股权资产",
            dividend_asset:"红利资产",
            minimum_amount:"最小持有量",
            dividend_per :"派红利每 %(amounts)s",
            dividend_submit:"分红"
        },
        perm: {
            active: "活跃权限",
            owner: "账户权限",
            memo_key: "备注密钥",
            publish: "保存修改",
            reset: "重置修改",
            add: "增加权限",
            type: "类型",
            key: "键/名字",
            weight: "权重",
            threshold: "阈值",
            confirm_add: "增加",
            cancel: "取消",
            add_permission_label: "输入账户名/公钥以及权重",
            account_name_or_key: "账户名或公钥",
            memo_public_key: "备注公钥",
            warning1: "活跃权限权重总和 %(weights_total)s 应不小于阀值设定 %(threshold)s",
            warning2: "账户权限权重总和 %(weights_total)s 应不小于阀值设定 %(threshold)s",
            warning3: "账户名被授权",
            warning4: "公钥已被授权",
            action: "操作",
            acct_or_key: " 账户名/公钥"
        },
        votes: {
            proxy_short: "代理投票",
            workers_short: "预算项目",
            proxy: "代理投票账户",
            no_proxy: "无代理",
            name: "账户名",
            info: "信息",
            votes: "得票",
            url: "主页",
            support: "支持",
            workers: "预算项目",
            publish: "保存修改",
            add_witness: "添加",
            remove_witness: "移除",
            remove_committee: "移除",
            add_committee: "添加",
            add_committee_label: "理事会成员",
            add_witness_label: "见证人",
            approve_worker: "赞成",
            reject_worker: "反对",
            worker_account: "申请账户",
            total_votes: "赞成票数",
            votes_against: "反对票数",
            daily_pay: "每日预算",
            max_pay: "最大预算",
            unclaimed: "未发放预算",
            status: {
                title: "我的立场",
                supported: "已支持",
                rejected: "已反对",
                neutral: "中立"
            },
            clear_proxy: "移除投票代理",
            start: "开始时间",
            end: "结束时间",
            daily: "每日",
            creator: "创建者",
            recycled: "循环",
            funding: "注资",
            total_budget: "预算总额",
            unused_budget: "未使用预算",
            "new": "新增预算项目",
            active: "活跃预算项目"
        },
        options: {
            num_witnesses: "信任见证人",
            num_committee: "信任理事会成员",
            memo_key: "备注公钥"
        },
        upgrade: "升级账户",
        unfollow: "取消关注",
        follow: "关注",
        pay: "支付",
        overview: "概述",
        history: "交易历史",
        payees: "收款人",
        permissions: "权限",
        voting: "投票",
        orders: "订单",
        select_placeholder: "选择账户...",
        errors: {
            not_found: "账户 %(name)s 不存在, 你确定输入正确么?",
            invalid: "非法的账户名",
            unknown: "未知的账户",
            not_yours: "不是你的账户"
        },
        deposit_withdraw: "充值/提现",
        collaterals: "抵押债仓",
        eq_value: "换算值",
        please_create_account: "请先创建账户",
        create_account: "创建账户",
        identicon: "身份标示图形",
        pay_from: "注册费支付账户",
        existing_accounts: "已有账户",
        bts_market: "交易市场",
        name_input: {
            name_is_taken: "账户名已经被使用",
            not_found: "账户未找到",
            premium_name_faucet: "你使用的是高级账户名。高级账户名的注册需要花费更多，因为无法通过免费水龙头服务进行注册。请选择其他名字，包含至少一个横杠、数字或者不含元音字母",
            premium_name_warning: "这是高级账户名。高级账户名的注册需要花费更多，因为无法通过免费水龙头服务进行注册。请选择其他名字，包含至少一个横杠、数字或者不含元音字母"
        },
        propose_from: "发起账户",
        percent: "供给占比",
        settle: "清算",
        no_orders: "暂无委单",
        as_collateral: "债仓",
        open_orders: "委单",
        total_value: "市值",
        asset_details: "资产详情",
        id: "账户 ID",
        whitelist: {
            title: "白名单",
            black: "黑名单",
            add: "加到白名单",
            add_black: "加到黑名单",
            empty: "%(account)s 没有设置白名单。",
            empty_black: "%(account)s 没有设置黑名单。",
            white_by: "被列白名单",
            black_by: "被列黑名单",
            empty_white_by: "%(account)s 未被列入任何白名单",
            empty_black_by: "%(account)s 未被列入任何黑名单"
        },
        vesting: {
            title: "待解冻余额",
            balance_number: "余额 #%(id)s",
            no_balances: "该账户无待解冻余额"
        },
        show_hidden: "显示已忽略资产",
        hide_hidden: "隐藏已忽略资产",
        ignore: "忽略",
        unignore: "取消忽略",
        show_ignored: "显示已忽略账户",
        hide_ignored: "显示已忽略账户"
    },
    transfer: {
        from: "来自",
        amount: "金额",
        to: "发往",
        memo: "备注消息",
        fee: "手续费",
        send: "发送",
        "final": "转账后余额",
        balances: "余额",
        errors: {
            req: "必填信息",
            pos: "数量必须大于0",
            valid: "请输入一个合法的大于0的半角数字",
            balance: "最终余额必须大于0",
            insufficient: "余额不足"
        },
        back: "返回",
        confirm: "确认发送",
        broadcast: "你的转账已经向网络广播",
        again: "发起新的转账",
        see: "查看我的转账记录",
        available: "可用余额: ",
        broadcasting: "交易广播中...",
        close: "关闭",
        pay_from: "支付自",
        memo_unlock: "解锁钱包以查看交易备注"
    },
    operation: {
        pending: " %(blocks)s 个区块待定",
        no_recent: "近期无交易",
        reg_account: "{registrar} 注册了账户 {new_account}",
        transfer: "{from} 发送 {amount} 到 {to}",
        proposal_create: "{account} 创建了拟议交易",
        proposal_update: "{account} 更新了拟议交易",
        proposal_delete: "{account} 删除了拟议交易",
        fill_order: "{account} 以 {price} 的价格购买了 {received}",
        vesting_balance_withdraw: "{account} 提取了解冻金额 {amount}",
        balance_claim: "{account} 领取了余额 {amount}",
        publish_feed: "{account} 发布了喂价 {price}",
        set_proxy: "{account} 设置 {proxy} 为他的投票代理",
        update_account: "{account} 更新了它的账户信息",
        limit_order_sell: "{account} 提交卖单，以 {price} 的价格卖出 {amount} ",
        limit_order_buy: "{account} 提交买单，以 {price} 的价格买入 {amount} ",
        call_order_update: "{account} 调整了 {debtSymbol} 债务 {debt} ，以及抵押 {collateral}",
        asset_reserve: "{account} 保留了 {amount}",
        asset_issue: "{account} 发行了 {amount} 到 {to}",
        asset_create: "{account} 创建了资产 {asset}",
        asset_update: "{account} 更新了资产 {asset}",
        lifetime_upgrade_account: "{account} 升级到终身会员",
        annual_upgrade_account: "{account} 升级到年度会员",
        unlisted_by: "{lister} 将 {listee} 移出清单",
        whitelisted_by: "{lister} 将 {listee} 加入白名单",
        blacklisted_by: "{lister} 将 {listee} 加入黑名单",
        limit_order_cancel: "{account} 取消了订单 #%(order)s",
        transfer_account: "{account} 所有权转移到 {to}",
        asset_update_feed_producers: "{account} 更新了资产 {asset} 的喂价者",
        asset_fund_fee_pool: "{account} 向 {asset} 手续费池注入 {amount}",
        asset_settle: "{account} 请求清算 {amount}",
        asset_global_settle: "{account} 请求以 {price} 的价格进行全局清算 {asset}",
        witness_create: "{account} 升级到见证人",
        witness_update: "{account} 更新了见证人信息",
        witness_pay: "提取见证人收入到账户",
        witness_receive: "Received witness from witness",
        worker_create: "{account} 创建了预算提案，请求每日支付 {pay}",
        dividend_hidden_operation:"分红 {amount_dvd} 每 {amount_share}",
        dividend_operation:"分红 {amount_dvd} 每 {amount_share}you{get_or_pay}{dvd_id}",
        selfer_object_create:"{account} 创建自账户",
        selfer_object_update:"{account} 升级自账户 ",
        condition_distribution_object_create:"{account} 创建策略 {summary}",
        c_d_input:"{account} 竞猜 {amount} {input}",
        c_d_settle:"{summary} 结果是 {input}"
    },
    transaction: {
        sent: "发送",
        to: "发往",
        received: "已接收",
        from: "来自",
        amount_sell: "出售数量",
        expiration: "过期时间",
        fill_or: "成交或取消",
        min_receive: "接收的最小数量",
        seller: "卖家",
        collateral: "保证金",
        coll_ratio: "原始保证金率",
        coll_maint: "维持保证金率",
        create_key: "创建一个公钥",
        create_asset: "资产创建",
        limit_order: "限价单",
        limit_order_buy: "提交限价买单 #%(num)s, 买入数量: %(buy_amount)s, 价格: ",
        limit_order_sell: "提交限价卖单 #%(num)s, 卖出数量: %(sell_amount)s, 价格: ",
        limit_order_cancel: "取消限价单",
        short_order: "空单",
        short_order_cancel: "取消空单",
        at: "@",
        coll_of: "保证金为",
        call_order_update: "更新保证金头寸",
        upgrade_account: "升级到终身会员账户",
        update_account: "更新账户",
        whitelist_account: "加入白名单",
        whitelisted_by: "加入到账户白名单",
        transfer_account: "转移账户",
        update_asset: "更新资产",
        update_feed_producers: "更新资产喂价人",
        feed_producer: "成为资产喂价人",
        asset_issue: "发行",
        was_issued: "收到资产",
        by: "来自",
        burn_asset: "销毁",
        fund_pool: "转入资产资金池",
        asset_settle: "请求资产清算",
        asset_global_settle: "请求全局资产清算",
        publish_feed: "资产喂价",
        committee_member_create: "创建理事会成员",
        witness_create: "创建见证人",
        witness_pay: "提取见证人收入到账户",
        witness_receive: "Received witness from witness",
        proposal_create: "创建提案",
        proposal_update: "更新提案",
        proposal_delete: "删除提案",
        withdraw_permission_create: "授予账户提取权限",
        withdraw_permission_update: "更新账户提取权限",
        withdraw_permission_claim: "主张账户提取权限",
        withdraw_permission_delete: "删除账户提取权限",
        paid: "支付",
        obtain: "获得",
        global_parameters_update: "更新全局参数",
        file_write: "写入文件",
        vesting_balance_create: "创建待解冻余额",
        "for": "为",
        vesting_balance_withdraw: "提取解冻资金",
        bond_create_offer: "创建债券要约",
        bond_cancel_offer: "取消债券要约",
        bond_accept_offer: "接受债券要约",
        bond_claim_collateral: "索取抵押物",
        bond_pay_collateral: "支付保证金",
        create_worker: "创建雇员，要求报酬为",
        custom: "创建自定义操作",
        order_id: "订单ID",
        trxTypes: {
            transfer: "转账",
            limit_order_create: "限价单",
            limit_order_cancel: "取消限价单",
            call_order_update: "更新订单",
            account_create: "创建账户",
            account_update: "更新账户",
            account_whitelist: "账户白名单",
            account_upgrade: "升级账户",
            account_transfer: "账户转移",
            asset_create: "创建资产",
            asset_update: "更新资产",
            asset_update_bitasset: "更新智能币",
            asset_update_feed_producers: "更新资产喂价者",
            asset_issue: "资产发行",
            dividend:"分红",
            asset_reserve: "销毁资产",
            asset_fund_fee_pool: "积存资产费用池",
            asset_settle: "资产结算",
            asset_global_settle: "全局资产清算",
            asset_publish_feed: "发布资产喂价",
            committee_member_create: "创建理事会成员",
            witness_create: "创建见证人",
            witness_withdraw_pay: "见证人取回报酬",
            proposal_create: "创建提案",
            proposal_update: "更新提案",
            proposal_delete: "删除提案",
            withdraw_permission_create: "创建提取权限",
            withdraw_permission_update: "更新提取权限",
            withdraw_permission_claim: "主张提取权限",
            withdraw_permission_delete: "删除提取权限",
            fill_order: "订单撮合",
            delegate_update_global_parameters: "全局参数更新",
            vesting_balance_create: "创建冻结账目余额",
            vesting_balance_withdraw: "提取解冻账户余额",
            worker_create: "创建雇员",
            custom: "自定义",
            assert: "断言操作",
            balance_claim: "领取余额",
            override_transfer: "优先覆盖转账",
            witness_update: "更新见证人",
            committee_member_update_global_parameters: "全局参数更新",
            transfer_to_blind: "向隐私账户转账",
            blind_transfer: "隐私转账",
            transfer_from_blind: "从隐私账户转出",
            committee_member_update: "更新理事会成员账户",
            asset_claim_fees: "领取资产手续费",
            dividend_hidden_operation:"分红",
            dividend_operation:"分红",
            selfer_object_create:"创建自用户",
            selfer_object_update:"升级自用户",
            condition_distribution_object_create:"创建策略",
            c_d_input:"竞猜",
            c_d_settle:"开奖"
        },
        confirm: "请确认交易",
        broadcast_success: "交易已向网络广播",
        transaction_confirmed: "交易已确认",
        broadcast_fail: "交易广播失败: %(message)s",
        balance_claim: "从余额ID #%(balance_id)s 中领取金额 %(balance_amount)s ",
        balance_owner: "余额所有者公钥",
        balance_id: "余额ID",
        deposit_to: "向账户存入",
        claimed: "领取总额",
        broadcasting: "交易广播中..",
        broadcasting_short: "交易广播中..",
        borrow_amount: "借入金额",
        funding_account: "出资账户",
        delta_collateral: "保证金变化",
        delta_debt: "债务变化",
        feed_price: "喂价",
        witness_update: "更新见证人账户",
        new_url: "网站",
        publisher: "发布人",
        lifetime_upgrade_account: "升级到终身会员",
        annual_upgrade_account: "升级到年度会员",
        market_fee: "市场手续费",
        max_market_fee: "最大市场手续费",
        blinding_factor: "隐私因子",
        outputs: "输出",
        inputs: "输入",
        feeGroups: {
            general: "一般费率",
            asset: "资产相关",
            market: "市场相关",
            account: "账户相关",
            business: "业务管理"
        },
        feeTypes: {
            _none: "免费",
            fee: "普通转账手续费",
            price_per_kbyte: "交易字节数，每千字节手续费",
            basic_fee: "普通用户名手续费",
            premium_fee: "高级用户名手续费",
            membership_annual_fee: "年度会籍",
            membership_lifetime_fee: "终身会籍",
            symbol3: "资产符号长度3位",
            symbol4: "资产符号长度4位",
            long_symbol: "更长的资产符号"
        },
        asset_claim_fees: "从 %(asset)s 资产手续费池中领取 %(balance_amount)s 资产手续费",
        settlement_date: "清算时间",
        set_proxy: "设置 %(proxy)s 为投票代理人",
        unlisted_by: "%(lister)s 从列表移除 %(listee)s",
        blacklisted_by: "%(lister)s 将 %(listee)s 加入黑名单",
        whitelist_states: {
            no_listing: "从列表移除",
            white_listed: "加入白名单",
            black_listed: "加入黑名单",
            white_and_black_listed: "加入白/黑名单"
        },
        asset_reserve: "保留资产数量"
    },
    explorer: {
        accounts: {
            title: "账户"
        },
        blocks: {
            title: "区块链",
            globals: "全局参数",
            recent: "最近区块",
            trx: "交易",
            block_times: "区块生成时间",
            recently_missed_blocks: "最近缺失的区块",
            trx_per_block: "交易数/区块",
            active_committee_members: "活跃理事会成员",
            active_witnesses: "活跃见证人",
            avg_conf_time: "交易平均确认时间",
            trx_per_sec: "每秒交易数",
            last_block: "上一个区块",
            current_block: "当前区块",
            block_time: "区块生成时间",
            transactions: "交易数"
        },
        block: {
            title: "区块",
            id: "区块 ID",
            witness: "见证人",
            count: "交易数",
            date: "区块生成时间",
            previous: "上一个区块",
            previous_secret: "上一个密文",
            next_secret: "下一个密文哈希值",
            op: "操作",
            trx: "交易",
            op_type: "操作类型",
            fee_payer: "手续费支付账户",
            key: "公钥",
            transactions: "交易数量",
            account_upgrade: "可升级账户",
            lifetime: "升级到终身会员账户",
            authorizing_account: "授权账户",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "可更新资产",
            common_options: "参数设定",
            new_options: "新的设定",
            new_producers: "新的喂价提供者",
            asset_issue: "发行数量",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "喂价",
            time: "时间"
        },
        assets: {
            title: "资产",
            market: "智能币 SmartCoins",
            user: "用户发行资产",
            symbol: "代码",
            id: "ID",
            issuer: "发行人",
            precision: "精度",
            prediction: "预测市场资产"
        },
        asset: {
            title: "资产",
            not_found: "资产 %(name)s 不存在",
            summary: {
                asset_type: "资产类型",
                issuer: "发行人",
                current_supply: "当前供给",
                stealth_supply: "隐私供给",
                market_fee: "交易市场费率",
                max_market_fee: "交易市场手续费上限"
            },
            price_feed: {
                settlement_price: "喂价",
                maintenance_collateral_ratio: "维持保证金比例",
                maximum_short_squeeze_ratio: "强制平仓比例上限",
                title: "喂价"
            },
            fee_pool: {
                core_exchange_rate: "汇率",
                pool_balance: "资金池余额",
                unclaimed_issuer_income: "发行人未申领收入",
                title: "手续费资金池",
                claim_fees: "领取手续费",
                fund_text: "手续费最终以%(core)s形态进行支付。手续费资金池用来承担从%(asset)s转换为%(core)s的费用，以便用户可以使用%(asset)s来支付手续费。",
                claim_text: "资产发行人可以在这里领取累积的资产手续费。"
            },
            permissions: {
                title: "权限",
                max_market_fee: "交易市场手续费上限",
                max_supply: "最大供给",
                blacklist_authorities: "黑名单职权实体",
                blacklist_markets: "禁止交易对市场",
                whitelist_authorities: "白名单职权实体",
                whitelist_markets: "允许交易对市场"
            },
            price_feed_data: {
                title: "喂价数据",
                settlement_price: "喂价",
                core_exchange_rate: "汇率",
                maintenance_collateral_ratio: "维持保证金比例",
                maximum_short_squeeze_ratio: "强制平仓比例上限",
                publisher: "发布人",
                published: "发布时间"
            }
        },
        witnesses: {
            title: "见证人",
            current: "当前见证人",
            participation: "参与率",
            pay: "每块奖励",
            budget: "剩余预算",
            next_vote: "投票更新时间",
            card: "卡片视图",
            table: "表格视图",
            rank: "排名",
            last_confirmed: "上次生成块",
            missed: "缺失块数"
        },
        committee_members: {
            title: "理事会",
            active: "理事会成员总数"
        },
        committee_member: {
            title: "理事会成员"
        },
        workers: {
            title: "预算项目"
        },
        proposals: {
            title: "提案"
        },
        account: {
            title: "账户"
        },
        fees: {
            type: "手续费类型",
            fee: "标准手续费",
            feeeq: "(相当于)",
            feeltm: "终身/年度会员手续费",
            feeltmeq: "(相当于)"
        }
    },
    settings: {
        inverseMarket: "市场交易对视角",
        unit: "显示记账单位",
        confirmMarketOrder: "市场订单要求确认",
        locale: "语言选择",
        confirm_yes: "总是",
        confirm_no: "从不",
        always_confirm: "总是要求确认",
        wallets: "钱包管理",
        connection: "API 服务器设定",
        add_ws: "添加新的 websocket API",
        remove_ws: "删除 websocket API",
        faucet_address: "水龙头地址",
        showSettles: "在深度图中显示清算订单",
        yes: "是",
        no: "否",
        walletLockTimeout: "钱包自动锁定时间（秒）",
        themes: "主题",
        darkTheme: "黑色主题",
        lightTheme: "白色主题",
        olDarkTheme: "Openledger黑",
        reset: "恢复默认值"
    },
    pagination: {
        newer: "更近",
        older: "更早"
    },
    footer: {
        title: "Graphene (石墨烯)",
        block: "最新区块",
        loading: "载入中...",
        backup: "需要备份",
        nosync: "区块链数据陈旧，请等待数据完成同步..",
        connection: "无连接",
        brainkey: "建议备份脑钱包密钥"
    },
    exchange: {
        price_history: "价格历史",
        order_depth: "市场深度",
        market_history: "市场历史",
        balance: "我的余额",
        lowest_ask: "最低卖价",
        highest_bid: "最高买价",
        total: "成交额",
        value: "数量",
        price: "价格",
        latest: "最新成交价",
        call: "赎回价格",
        volume: "成交量",
        spread: "买卖价差",
        quantity: "数量",
        buy: "买入",
        sell: "卖出",
        confirm_buy: "确认订单: 以 %(price_amount)s %(price_symbol)s 的价格，买入 %(buy_amount)s %(buy_symbol)s ",
        confirm_sell: "确认订单: 以 %(price_amount)s %(price_symbol)s 的价格，卖出 %(sell_amount)s %(sell_symbol)s ",
        settle: "喂价",
        core_rate: "转账手续费汇率",
        squeeze: "强制平仓价",
        maintenance: "维持保证金价",
        your_price: "你的强平触发价",
        receive: "获得",
        vertical: "垂直布局",
        horizontal: "水平布局",
        market_name: "市场名称",
        quote_supply: "报价资产供给量",
        base_supply: "基础资产供给量",
        more: "更多交易对",
        market: "交易对",
        history: "交易历史",
        my_history: "我的交易历史",
        vol_short: "量",
        volume_24: "日成交量",
        change: "涨跌幅",
        confirm: "你的订单价偏离当前价 %(diff)s% , 你确定么?",
        indicators: "技术指标",
        rsi: "相对强弱指数(rsi)",
        ema: "指数移动平均线(ema)",
        sma: "算数移动平均线(sma)",
        atr: "平均真实波幅(atr)",
        period: "周期 (天)",
        overbought: "超买",
        oversold: "超卖",
        index: "指数",
        my_bids: "我的买单",
        my_asks: "我的卖单",
        settle_orders: "清算单",
        asks: "卖单",
        bids: "买单",
        no_data: "暂无数据",
        time: "时间间隔",
        borrow: "借入",
        no_balance: "余额不足",
        invalid_amount: "数量错误",
        invalid_price: "价格错误",
        my_orders: "我的订单",
        show_bids: "显示所有买单",
        show_asks: "显示所有卖单",
        hide: "隐藏",
        "short": "做空",
        others: "其他",
        invert: "反转交易对价格",
        to_market: "前往交易市场",
        zoom: "缩放",
        zoom_all: "显示全部",
        settings: "图表选项"
    },
    markets: {
        title: "交易所",
        filter: "筛选",
        core_rate: "CORE 汇率",
        supply: "供应量",
        search: "搜索",
        base: "基准资产",
        market_search: "交易对市场搜索",
        preferred: "我收藏的市场"
    },
    wallet: {
        title: "钱包",
        confirm: "确认密码",
        password: "密码",
        existing_password: "已存在密码",
        change_password: "修改密码",
        change_wallet: "切换钱包",
        wallet_created: "钱包已创建",
        create_wallet: "创建新钱包",
        setup_wallet: "设置钱包",
        delete_wallet: "删除钱包",
        delete_confirm_line1: "你确定么？",
        delete_confirm_line2: "如果你不仔细阅读以下提示，可能发生无法预料的事情。",
        delete_confirm_line3: "本操作不可撤销",
        delete_wallet_name: "删除钱包 (%(name)s)",
        name: "钱包名字",
        create: "创建",
        console: "钱包管理控制台",
        create_backup: "创建钱包备份",
        create_backup_of: "为钱包 (%(name)s) 创建备份",
        import_backup: "导入钱包备份文件",
        restore_backup: "从钱包备份恢复",
        import_keys: "导入私钥",
        brainkey: "脑钱包密钥",
        new_wallet: "新建钱包",
        active_wallet: "当前钱包使用中",
        verified: "已验证",
        verify_prior_backup: "验证钱包备份文件",
        brainkey_not_verified: "脑钱包密钥未验证",
        cancel: "取消",
        reset: "重置",
        done: "完成",
        verify: "验证",
        invalid_format: "文件内容格式不符",
        enter_password: "请输入密码",
        download: "下载",
        new_wallet_name: "新钱包名字",
        wallet_exist: "同名钱包已存在，请选择不同名字",
        wallet_exist_with_name: "同名钱包(%(name)s)已存在，请选择不同名字",
        accept: "接受",
        ready_to_restore: "准备导入",
        restore_wallet_of: "导入名为 (%(name)s 的钱包)",
        restore_success: "已成功导入钱包 (%(name)s) ",
        change: "切换到钱包 (%(name)s)",
        balance_claims: "余额导入",
        backup_brainkey: "备份脑钱包密钥",
        downoad: "下载",
        import_20_notice1: "请先导入你的BTS 2.0+ 钱包备份文件",
        import_20_notice2: "(如果你有的话)",
        loading_balances: "余额读取中",
        no_balance: "无余额可导入",
        claim_balance: "导入余额",
        claim_balances: "导入余额",
        unclaimed: "未导入余额",
        unclaimed_vesting: "未导入余额 (解冻中)",
        no_accounts: "没有账户",
        brainkey_no_match: "脑钱包密钥不匹配，请重试",
        reenter_brainkey: "请再输入一遍脑钱包密钥",
        pwd4brainkey: "输入密码后显示脑钱包密钥",
        show_brainkey: "显示脑钱包密钥",
        brainkey_w1: "警告: 将密钥打印出来，或记录在纸上妥善保存。",
        brainkey_w2: "任何人获得你的脑钱包密钥信息将",
        brainkey_w3: "获得钱包中资金的使用权限。",
        custom_brainkey: "自定义脑钱包密钥 (高级)",
        last_backup: "上次备份",
        never_backed_up: "钱包尚未进行过备份",
        need_backup: "钱包需要备份",
        noneed_backup: "无需备份",
        import_bts1: "从BitShares 0.9.3c导入",
        import_keys_tool: "私钥导入工具",
        balance_claim_lookup: "查询余额"
    },
    borrow: {
        title: "%(asset_symbol)s 保证金头寸",
        no_valid: "无有效喂价 %(asset_symbol)s",
        coll_ratio: "保证金比例",
        adjust: "调整头寸",
        errors: {
            below: "保证金率低于维持保证金要求",
            collateral: "可用保证金不足"
        },
        close: "平仓",
        update: "调整",
        call_limit: "Market Call Limit"
    },
    modal: {
        issue: {
            to: "发行到",
            amount: "发行数量",
            submit: "发行资产"
        },
        withdraw: {
            amount: "提现金额",
            address: "提现到地址",
            submit: "提现"
        },
        ok: "确定",
        settle: {
            title: "请求清算资产%(asset)s",
            amount: "数量",
            submit: "清算资产"
        },
        deposit: {
            amount: "充值数量",
            submit: "充值"
        },
        reserve: {
            title: "储备（销毁）资产",
            amount: "数量",
            from: "账户",
            submit: "储备"
        }
    },
    init_error: {
        title: "系统初始化错误",
        ws_status: "Websocket 连接状态",
        retry: "重试",
        connected: "已连接",
        not_connected: "未连接",
        browser: "不支持的浏览器",
        browser_text: "你使用的浏览器(版本)未经过BitShares钱包软件的充分测试。强烈建议你备份钱包，并将其导入谷歌Chrome浏览器。今后进过我们充分测试后，你或许可以继续使用现在的浏览器。请了解相关风险。",
        understand: "我理解"
    },
    refcode: {
        claim: "领取",
        claim_refcode: "领取推荐码",
        refcode_optional: "推荐码 (可选)",
        enter_refcode: "输入推荐码"
    },
    gateway: {
        bridge: "桥接",
        gateway: "承兑商",
        symbol: "资产",
        deposit_to: "充值地址",
        balance: "余额",
        generate: "生成地址",
        deposit: "充值",
        withdraw: "提现",
        inventory: "库存",
        scan_qr: "扫描二维码，手机支付",
        transwiser: {
            gateway: "Transwiser",
            visit_weidian: "访问网店进行充值",
            deposit_title: "充值人民币到 %(asset)s",
            withdraw_title: "提现 %(asset)s 到人民币",
            alipay: "支付宝账户名",
            withdraw_note: "目前仅支持支付宝提现，将资产按1:1比例兑换成人民币发送到您的支付宝账户中",
            you_will_receive: "您将收到 %(amount)s 元人民币"
        },
        meta: {
            open_website: "访问官网"
        }
    },
    propose: "提议",
    cancel: "取消",
    fees: {
        title: "费率表"
    }
};
