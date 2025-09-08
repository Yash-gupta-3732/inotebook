import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const state = {
        name:"yash",
        class:"4th year"
    }

    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;