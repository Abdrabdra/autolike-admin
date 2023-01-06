import {Box, Button, Grid, IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {
    useCreateHobbyMutation,
    useDeleteHobbyMutation,
    useGetHobbiesQuery
} from "../../../../../redux/store/rtk-api/hobby-rtk/hobbyEndpoints";
import {ICreateHobbyBody, IHobbyResponse} from "../../../../../redux/store/rtk-api/hobby-rtk/hobby.type";
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import CreateWindow from "./CreateWindow";
import RemoveWindow from "./RemoveWindow"


const ListHobby = () => {
    const {
        data: hobbies,
        isLoading: isHobbiesLoading,
        isError: isHobbiesError,
        isSuccess: isHobbiesSuccess,
        refetch
    } = useGetHobbiesQuery("")
    const [deleteHobby, {isLoading, isError, isSuccess, error}] = useDeleteHobbyMutation()
    const [createHobby, {
        isLoading: createLoading,
        isError: createError,
        isSuccess: createSuccess,
        error: createErrorMessage
    }] = useCreateHobbyMutation()
    // const [isOpen, setOpen] = useState(false)
    // const [isCreateDialogOpen, setCreateDialogOpen] = useState(false)
    // const [deleteId, setDeleteId] = useState<number | null>(null)
    // const handleDelete = () => {
    //     deleteId && deleteHobby(deleteId).then(res=>{
    //         refetch()
    //     })
    // }
    // const handleCreate = (data: ICreateHobbyBody) => {
    //     createHobby(data).then(res=>{
    //         refetch()
    //     })
    // }
    // useEffect(()=>{
    //  refetch()
    // })

    return (
        <>
            {/*{isOpen && <RemoveWindow closeWindow={() => setOpen(false)} isWindowOpen={isOpen} isSuccess={isSuccess}*/}
            {/*                         isLoading={isLoading}*/}
            {/*                         isError={isError} label={"Вы действительно хотите удалить хобби?"}*/}
            {/*                         handleFunction={handleDelete} error={*/}
            {/*    // @ts-ignore*/}
            {/*    error?.data?.message}/>}*/}
            {/*{isCreateDialogOpen &&*/}
            {/*    <CreateWindow closeWindow={() => setCreateDialogOpen(false)} isWindowOpen={isCreateDialogOpen}*/}
            {/*                  isSuccess={createSuccess} isLoading={createLoading}*/}
            {/*                  isError={isError} label={"Создание хобби"} handleFunction={handleCreate} error={*/}
            {/*        // @ts-ignore*/}
            {/*        createErrorMessage?.data?.message} placeholder={"Напишите название..."}/>}*/}
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography sx={{ fontSize: "20px", mb: "5px", color:"primary.main", fontWeight:400 }}>Список всех хобби</Typography>
                <Button
                    variant="contained"
                    onClick={()=> {

                    }}
                    sx={{width: "160px", height: "45px", fontSize: "12px"}}
                    endIcon={<AddIcon/>}

                >
                    Создать хобби
                </Button>
            </Box>

            <Grid container direction={"column"}>
                {hobbies && hobbies.map((hobby: IHobbyResponse, ind) => {
                    return <Grid item key={ind} sx={{width: "500px", borderBottom:"1px solid #2398AB"}}>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon onClick={() => {
                                        // setOpen(true)
                                        // setDeleteId(hobby.id)
                                    }}
                                    sx={{color:"primary.main"}}
                                    />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={`${ind + 1}. ${hobby.value}`}
                                sx={{color:"primary.main",fontSize:"20px", fontWeight:400,}}
                            />
                        </ListItem>
                    </Grid>
                })}
            </Grid>
        </>

    );
};

export default ListHobby;



