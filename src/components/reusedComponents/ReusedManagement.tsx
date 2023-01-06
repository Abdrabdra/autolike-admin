import {Box, Button, CircularProgress, Grid, IconButton, ListItem, ListItemText, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, {FC, useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import CreateWindow from "../../pages/Management/ManagementSection/HobbyTab/ListHobby/CreateWindow";
import RemoveWindow from "../../pages/Management/ManagementSection/HobbyTab/ListHobby/RemoveWindow";
import {ICreateManagementBody, IManagementResponse} from "../../redux/store/rtk-api/city-rtk/city.type";
import {useNavigate} from "react-router-dom";


type Props = {
    fetch: any
    create: any
    remove?: any
    elem: string
}

const ReusedManagement: FC<Props> = ({fetch, create, remove, elem}) => {
    const navigate = useNavigate()
    const {
        data: items,
        isLoading: isItemLoading,
        isError: isItemError,
        refetch
    } = fetch("")
    const [deleteHobby, {
        isLoading: removeLoading,
        isError: removeError,
        isSuccess: removeSuccess,
        error: removeErrorMessage
    }] = remove()
    const [createHobby, {
        isLoading: createLoading,
        isError: createError,
        isSuccess: createSuccess,
        error: createErrorMessage
    }] = create()
    const [isOpen, setOpen] = useState(false)
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isAlert, setAlert] = useState(false)
    const handleDelete = () => {
        setAlert(true)
        deleteId && deleteHobby(deleteId).then((res: any) => {
            refetch()
        })
    }
    const handleCreate = (data: ICreateManagementBody) => {
        setAlert(true)
        createHobby(data).then((res: any) => {
            refetch()
        })
    }

    const handleFormatWords = (word: string) => {
        if (word === 'Город') return 'города'
        else if (word === 'Хадис') return 'категорий хадиса'
        else return word.toLowerCase()
    }


    return (
        <>
            {isItemLoading && <CircularProgress/>}
            {isItemError && <div>Произошла ошибка!</div>}
            {isOpen && elem !== 'Город' && <RemoveWindow closeWindow={() => {
                setOpen(false)
                setAlert(false)
            }} isWindowOpen={isOpen} isSuccess={removeSuccess}
                                                         isLoading={removeLoading}
                                                         isError={removeError}
                                                         label={`Вы действительно хотите удалить ${elem}?`}
                                                         handleFunction={handleDelete} error={
                // @ts-ignore
                removeErrorMessage?.data?.message} isAlert={isAlert}/>}
            {isCreateDialogOpen &&
                <CreateWindow closeWindow={() => {
                    setCreateDialogOpen(false)
                    setAlert(false)
                }} isWindowOpen={isCreateDialogOpen}
                              isSuccess={createSuccess} isLoading={createLoading}
                              isError={createError} label={`Создание ${handleFormatWords(elem)}`}
                              handleFunction={handleCreate} error={
                    // @ts-ignore
                    createErrorMessage?.data?.message} placeholder={"Напишите название..."}
                              isAlert={isAlert}
                              elem={elem}/>}
            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Typography sx={{fontSize: "20px", mb: "5px", color: "primary.main", fontWeight: 400}}>Список
                    всех {elem === 'Город' && 'городов'} {elem === 'Хадис' && 'категорий хадисов'}</Typography>
                <Button
                    variant="contained"
                    onClick={() => setCreateDialogOpen(true)}
                    sx={{width: "160px", height: "45px", fontSize: "12px"}}
                    endIcon={<AddIcon/>}

                >
                    Создать {elem === 'Хадис' ? 'категорию хадиса' : elem}
                </Button>
            </Box>
            <Grid container direction={"column"}>
                {items && items.map((item: IManagementResponse, ind: number) => {
                    return <Grid item key={ind} sx={{width: "500px", borderBottom: "1px solid #2398AB"}}>
                        <ListItem
                            secondaryAction={
                                elem !== 'Город' && <>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon onClick={() => {
                                            setOpen(true)
                                            setDeleteId(item.id)
                                        }} sx={{color: "primary.main", mr: "20px"}}
                                        />
                                    </IconButton>
                                    {elem === 'Хадис' && <Button
                                        sx={{
                                            width: "150px",
                                            height: "30px",
                                            background: "rgba(35, 152, 171, 0.3)",
                                            borderRadius: "5px",
                                            "&:hover": {
                                                background: "rgba(35, 152, 171, 1)",
                                            },
                                        }}

                                    >
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontSize: "14px",
                                                fontWeight: "700",
                                                textTransform: "capitalize"
                                            }}
                                            onClick={() => navigate(`/app/management/hadith/hadithes/${item.id}`)}
                                        >
                                            Перейти к хадисам
                                        </Typography>
                                    </Button>}

                                </>

                            }
                        >
                            <ListItemText
                                primary={`${ind + 1}. ${elem === 'Хадис' ? item.title : item.value}`}
                                sx={{color: "primary.main", fontSize: "20px", fontWeight: 400,}}
                            />
                        </ListItem>
                    </Grid>
                })}
            </Grid>
        </>

    );
};

export default ReusedManagement;
