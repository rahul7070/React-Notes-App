import { Box, Typography } from "@mui/material";
import Note from "./Note";
import { NoteObject } from "../models/note";

interface INotesProps {
    notes:NoteObject[]
    deleteNote : (id: number) => void
}

const Notes :React.FC<INotesProps>= ({notes, deleteNote})=>{
    return (
        <Box>
            <Typography variant="h5">Notes</Typography>
            <div style={{width:100 , display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
                {
                    notes.map((note)=>
                        (<Note key={note.id} note={note} deleteNote={deleteNote}/>)
                    )
                }
            </div>
        </Box>
    )
}

export default Notes;