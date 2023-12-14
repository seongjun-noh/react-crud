import React from 'react';

function TotalCost({budgetList}) {
    const totalCost = budgetList.reduce((acc, data) =>
        acc + Number(data.cost), 0);

    return (
        <div className="text-3xl text-end">
            총 지출: { totalCost }원
        </div>
    );
}

export default TotalCost;