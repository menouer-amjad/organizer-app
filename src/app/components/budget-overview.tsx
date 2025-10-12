export default function BudgetOverview() {
    return(
        <div>
            <div className="stats stats-vertical shadow mr-4">
                <div className="stat">
                    <div className="stat-title">Revenus</div>
                    <div className="stat-value text-primary">5000</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Dépenses</div>
                    <div className="stat-value text-error">4,200</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Epargnés</div>
                    <div className="stat-value text-success">800</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
            </div>
            <div className="stats stats-vertical shadow">
                <div className="stat">
                    <div className="stat-title">Revenus</div>
                    <div className="stat-value text-primary">5000</div>
                    <div className="stat-desc text-primary">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Dépenses</div>
                    <div className="stat-value text-error">4,200</div>
                    <div className="stat-desc text-error">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Epargnés</div>
                    <div className="stat-value text-success">800</div>
                    <div className="stat-desc text-success">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    )
}