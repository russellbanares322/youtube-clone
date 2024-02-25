export const isInputFilled = (inputValue: string) => {
    const emptyInputValue = inputValue.trim().length === 0;

    if(!emptyInputValue){
        return true
    }

    return false
}