import React from 'react';
import ButtonComponent from "./ButtonComponent";

function BudgetList({ budgetList, setBudgetList, id, setId, expenseItems, setExpenseItems, cost, setCost }) {

    const modifyBtnHandler = (id, expenseItems, cost) => {
        setId(id);
        setExpenseItems(expenseItems)
        setCost(cost)
    }

    const deleteBtnHandler = (id) => {
        let newBudgetList = budgetList.filter(data => data.id !== id);
        setBudgetList(newBudgetList);
    }

    const listClearBtnClickHandler = () => {
        setBudgetList([]);
    }

    return (
        <div className="flex flex-col gap-3">
            {budgetList.map((data) => (
                <div key={data.id} className="flex flex-row w-full border-2 border-solid border-gray-200 p-2 gap-3 hover:scale-105 hover:duration-150">
                    <div className="w-1/2">
                        {data.expenseItems}
                    </div>
                    <div className="w-1/2 flex flex-row justify-between">
                        <div className="text-end min-w-fit">
                        {data.cost}
                        </div>
                        <div className="flex flex-row gap-3">
                            <button onClick={() => modifyBtnHandler(data.id, data.expenseItems, data.cost)}>
                                수정
                            </button>
                            <button onClick={() => deleteBtnHandler(data.id)}>
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <ButtonComponent
                title="목록 지우기"
                onClickHandler={listClearBtnClickHandler}
            />
        </div>
    );
}

export default BudgetList;