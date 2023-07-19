
const items = `['Active','Test']`;
const last_n_periods = dataform.projectConfig.vars.sub_no_usage_last_n_periods;
var metrics_query = "";
for (let i = 1; i <= last_n_periods; i++) {
  var pInfo = get_period_info(-i);
  metrics_query += "SUM(case when sc.period_end_date = DATE('" + pInfo.period_end_date + "') then "+
  "(sc.subscription_count - sc.recenty_activated_sub_zero_usage_count) "+
  " else 0 end) as "+ pInfo.month_name + ",\n";
}

publish(
    "org_subscription_no_usage_last_n_months",
    {
        type: "view",
        schema: "finance"
    }
).query(ctx => 
`
select 
    acct.parent_account_name,
    o.name,
    acct.kore_industry,
    acct.account_owner,
    sc.state,
    ${metrics_query} 
    o.org_urn
from ${ctx.ref("org","stg_organization")} o
    left join ${ctx.ref("org_subscription_no_usage_count")} sc on o.org_urn = sc.org_urn
    left join org.sf_cpro_account acct on o.org_urn = acct.org_urn
    where o.status = 'Active'
    group by   
    acct.parent_account_name,  
    acct.kore_industry,
    acct.account_owner,
    o.name,
    o.org_urn,
    sc.state

`);


