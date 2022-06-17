import React, {ChangeEvent, MouseEvent} from 'react';

const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }

    const saveUser = () => {
        console.log('save user')
    }
    const onNameChanged = () => {
        console.log('changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAge = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + e.currentTarget.value)
    }
// когда происходит событие генерируется объект события чтобы знать детали события он нам нужен в каком месте например кликнули? Была ли нажата клавиша Ctrl? И т.д кнопка вызывает колбек.....
    return (
        <div className="App">
                <textarea
                    onChange={onNameChanged}
                    onBlur={focusLostHandler}
                >Dimych</textarea>
            <input onChange={onAge}/>
            <button name={"delete"} onClick={deleteUser}>x</button>
            <button name={"save button"} onClick={saveUser}>x</button>
        </div>
    );
};

export default User;