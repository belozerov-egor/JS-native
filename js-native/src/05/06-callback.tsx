import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }
    const saveUser = () => {
        alert("you save")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age change" + e.currentTarget.value)
    }

    const focusLost = () => {
        console.log('focus lost')
    }


    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLost}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button onClick={deleteUser}>delete</button>
        </div>
    )
}