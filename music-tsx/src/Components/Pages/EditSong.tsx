import { BottomNavigation, BottomNavigationAction, IconButton, TextField } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../backButton/BackButton";
import {CssTextField } from './Style/StylePages';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Gener, Song } from "../Song";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect, useState } from "react";


export default function EditSong(props: any) {

    const schema = Yup.object().shape({
        title: Yup.string().required("Enter the title of song "),
        artist: Yup.string().required("Enter artist song name"),
        gener: Yup.string().required("Select gener from the options below"),
        length: Yup.number().positive().required("Enter length of the song"),
        price: Yup.number().positive().required("Enter price for the song"),
      });
      const { register, handleSubmit, formState: { errors }, reset } = useForm({
          resolver: yupResolver(schema)
        });
      const onSubmitHandler = (data:any) => {
        console.log({ data });
        reset();
      };
    const navigate = useNavigate();
    let idSong = useParams();
    const theme = createTheme();
    const [currSong, setCurrSong] = useState<Song>(new Song("","",Gener.CLASSICAL,0,0));

    useEffect(() => {
        props.getSongById(idSong.title)
        .then((data:any) => {
            setCurrSong(data)
        })
    }, [])   
    const handleSubmitEdit = () => {
        handleSubmit(onSubmitHandler);
        props.editSong(idSong.title, currSong)
        navigate('/');
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '60px', fontFamily: 'Cooper Black', color: 'purple' }}>Edit song</h1>
            <hr />
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <CssTextField {...register("title")} placeholder="Title" type="text" required
                                name='titleName' value={currSong.title} id="outlined-basic" label="Title" variant="outlined" margin="dense" onChange={e => currSong.title = e.target.value} />
                            <br />
                            <CssTextField {...register("artist")} placeholder="Artist" type="text" required
                                label="Artist name" value={currSong.artist} id="outlined-basic" variant="outlined" margin="dense" onChange={(e) => { currSong.artist = e.target.value }} />
                            <br />
                            <Box sx={{ width: 225 }}>
                            <FormControl fullWidth>
                                <InputLabel {...register("gener")} placeholder="Gener" required id="demo-simple-select-label">Gener</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={currSong.gener}
                                label="Gener"
                                onChange={(e: SelectChangeEvent<Gener>) => {
                                    setCurrSong({...currSong, gener: e.target.value as Gener});
                                    }}>
                                <MenuItem value={Gener. ROCK}>ROCK</MenuItem>
                                <MenuItem value={Gener.POP}>POP</MenuItem>
                                <MenuItem value={Gener.RAP}>RAP</MenuItem>
                                <MenuItem value={Gener.CLASSICAL}>CLASSICAL</MenuItem>
                                <MenuItem value={Gener.FUNK}>FUNK</MenuItem>
                                <MenuItem value={Gener.SOUL}>SOUL</MenuItem>
                                <MenuItem value={Gener.HIPHOP}>HIPHOP</MenuItem>
                                </Select>
                            </FormControl>
                            </Box>
                            <CssTextField {...register("length")} placeholder="Length" type="number" required
                                id="outlined-basic" value={currSong.length} label="Length" variant="outlined" margin="dense" onChange={e => currSong.length = parseInt(e.target.value)} />
                            <br />
                            <CssTextField {...register("price")} placeholder="Price" type="number" required
                                id="outlined-basic" value={currSong.price} label="Price" variant="outlined" margin="dense" onChange={e => currSong.price = parseInt(e.target.value)} />
                            <br />
                            <BottomNavigation sx={{ width: 240 }}>
                                <BottomNavigationAction onClick={handleSubmitEdit} label="Add" value="Add" icon={<IconButton style={{ color: 'purple' }} aria-label="add" size="large"><AddTaskIcon fontSize="inherit"></AddTaskIcon></IconButton>} />
                            </BottomNavigation>
                            <BackButton />
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <hr />
        </>

    )
}