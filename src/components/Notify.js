import React, {useEffect, useState} from 'react';
import { isEqual } from "lodash";

function Notify({budgetList, setBudgetList}) {
    const [ prevBudgetList, setPrevBudgetList ] = useState(budgetList);
    const [ message, setMessage ] = useState("");
    const [ isVisible, setIsVisible ] = useState(false);
    const [ messageType, setMessageType ] = useState(false);

    useEffect(() => {
        console.log(budgetList);
        if (prevBudgetList.length < budgetList.length) {
            setMessage("아이템이 추가되었습니다.");
            setMessageType("created")
            setIsVisible(true);
        } else if (prevBudgetList.length > budgetList.length) {
            setMessage("아이템이 삭제되었습니다.");
            setMessageType("deleted")
            setIsVisible(true);
        } else if (!isEqual(prevBudgetList, budgetList)){
            setMessage("아이템이 수정되었습니다.");
            setMessageType("modified")
            setIsVisible(true);
        }

        setPrevBudgetList(budgetList);
    }, [budgetList]);

    const getStyle = (isVisible, messageType) => {
        return {
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            padding: "3px",
            display: isVisible ? "inline" : "none",
            backgroundColor: messageType === "deleted" ? "red" : "green"
        }
    }

    return (
        <div style={getStyle(isVisible, messageType)}>
            { message }
        </div>
    );
}

export default Notify;