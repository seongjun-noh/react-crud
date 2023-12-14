import React from 'react';
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";

function InputContainer({ budgetList, setBudgetList, id, setId, expenseItems, setExpenseItems, cost, setCost }) {
    const submitHandler = (e) => {
        e.preventDefault();
        const newBudget = {
            id: Date.now(),
            expenseItems: expenseItems,
            cost: cost
        }
        setBudgetList(prev => [...prev, newBudget]);
        setExpenseItems("");
        setCost(0);
    }

    const modifyHandler = (e) => {
        e.preventDefault();
        const newBudgetList = budgetList.map(data => {
            if(data.id === id) {
                return {
                    id: id,
                    expenseItems: expenseItems,
                    cost: cost
                }
            } else {
                return data;
            }
        })
        setBudgetList(newBudgetList);
        setId(null);
        setExpenseItems("");
        setCost(0);
    }

    return (
        <form className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 [&>div]:grow [&>div]:w-full">
            <InputComponent
                title="지출 항목"
                placeholder="예) 렌트비"
                type="text"
                value={ expenseItems }
                setValue={ setExpenseItems }
            />
            <InputComponent
                title="비용"
                type="number"
                value={ cost }
                setValue={ setCost }
            />
            </div>
            <ButtonComponent
                title= {id ? "수정" : "제출"}
                onClickHandler={id ? modifyHandler : submitHandler}
            >
            </ButtonComponent>
        </form>
    );
}

export default InputContainer;