import './App.css';
import InputContainer from "./components/InputContainer";
import BudgetList from "./components/BudgetList";
import {useEffect, useState} from "react";
import Notify from "./components/Notify";
import TotalCost from "./components/TotalCost";

function App() {
    const [ budgetList, setBudgetList ] = useState(JSON.parse(localStorage.getItem("budgetList")) || []);
    const [ id, setId ] = useState(null);
    const [ expenseItems, setExpenseItems ] = useState("");
    const [ cost, setCost ] = useState(0);

    useEffect(() => {
        localStorage.setItem("budgetList", JSON.stringify(budgetList));
    }, [budgetList])

    return (
        <div className="bg-orange-300 h-screen w-screen p-5 flex flex-col gap-3">
            <Notify
                budgetList={ budgetList }
                setBudgetList={setBudgetList}
            />
            <h1 className="text-3xl font-bold">
                예산 계산기
            </h1>
            <div className="flex flex-col bg-white p-5 gap-3">
                <InputContainer
                    budgetList={ budgetList }
                    setBudgetList={setBudgetList}
                    id={id}
                    setId={setId}
                    expenseItems={ expenseItems }
                    setExpenseItems={ setExpenseItems }
                    cost={ cost }
                    setCost={ setCost }
                />
                <BudgetList
                    budgetList={ budgetList }
                    setBudgetList={ setBudgetList }
                    id={id}
                    setId={setId}
                    expenseItems={ expenseItems }
                    setExpenseItems={ setExpenseItems }
                    cost={ cost }
                    setCost={ setCost }
                />
            </div>
            <TotalCost budgetList={ budgetList } />
        </div>
    );
}

export default App;
