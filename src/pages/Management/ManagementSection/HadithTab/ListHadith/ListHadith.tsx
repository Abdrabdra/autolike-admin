import {Box, Button, CircularProgress, Grid, IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {FC, useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import {
    useCreateHadithCategoryMutation, useDeleteHadithCategoryMutation,
    useGetHadithCategoryQuery
} from "../../../../../redux/store/rtk-api/hadis-rtk/hadithEndpoints";
import {ICreateHadithCategory, IHadithCategoryResponse} from "../../../../../redux/store/rtk-api/hadis-rtk/hadith.type";
import RemoveWindow from "../../HobbyTab/ListHobby/RemoveWindow";
import CreateWindow from "../../HobbyTab/ListHobby/CreateWindow";
import {ICreateManagementBody} from "../../../../../redux/store/rtk-api/city-rtk/city.type";


const ListHadith = () => {
    const {
        data: hadithes,
        isLoading: isLoading,
        isError: isError,
        refetch
    } = useGetHadithCategoryQuery("")
    const [deleteHadith, {
        isLoading: removeLoading,
        isError: removeError,
        isSuccess: removeSuccess,
        error: removeErrorMessage
    }] = useDeleteHadithCategoryMutation()
    const [createHadith, {
        isLoading: createLoading,
        isError: createError,
        isSuccess: createSuccess,
        error: createErrorMessage
    }] = useCreateHadithCategoryMutation()
    const [isOpen, setOpen] = useState(false)
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isAlert, setAlert] = useState(false)
    const handleDelete = () => {
        setAlert(true)
        deleteId && deleteHadith(deleteId).then((res: any) => {
            refetch()
        })
    }
    const handleCreate = (data: ICreateHadithCategory) => {
        setAlert(true)
        createHadith(data).then((res: any) => {
            refetch()
        })
    }

    return (
        <>
            {isLoading&&<CircularProgress/>}
            {isError&&<div>Произошла ошибка!</div>}
            {isOpen && <RemoveWindow closeWindow={() => {
                setOpen(false)
                setAlert(false)
            }} isWindowOpen={isOpen} isSuccess={removeSuccess}
                                                     isLoading={removeLoading}
                                                     isError={removeError} label={`Вы действительно хотите удалить категорию хадиса?`}
                                                     handleFunction={handleDelete} error={
                // @ts-ignore
                removeErrorMessage?.data?.message} isAlert={isAlert}/>}
            {isCreateDialogOpen &&
                <CreateWindow closeWindow={() => {
                    setCreateDialogOpen(false)
                    setAlert(false)
                }} isWindowOpen={isCreateDialogOpen}
                              isSuccess={createSuccess} isLoading={createLoading}
                              isError={createError} label={`Создание категорий хадиса`} handleFunction={handleCreate} error={
                    // @ts-ignore
                    createErrorMessage?.data?.message} placeholder={"Напишите название..."}
                              isAlert={isAlert}
                              elem={'хадис'}/>}
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography sx={{fontSize: "20px", mb: "5px", color: "primary.main", fontWeight: 400}}>Список
                    всех хадисов</Typography>
                <Button
                    variant="contained"
                    onClick={() => setCreateDialogOpen(true)}
                    sx={{width: "160px", height: "45px", fontSize: "12px"}}
                    endIcon={<AddIcon/>}

                >
                    Создать хадис
                </Button>
            </Box>
            <Grid container direction={"column"}>
                {hadithes && hadithes.map((item: IHadithCategoryResponse, ind: number) => {
                    return <Grid item key={ind} sx={{width: "500px", borderBottom: "1px solid #2398AB"}}>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon onClick={() => {
                                        setOpen(true)
                                        setDeleteId(item.id)
                                    }} sx={{color: "primary.main"}}
                                    />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={`${ind + 1}. ${item.title}`}
                                sx={{color: "primary.main", fontSize: "20px", fontWeight: 400,}}
                            />
                        </ListItem>
                    </Grid>
                })}
            </Grid>
        </>

    );
};

export default ListHadith;
