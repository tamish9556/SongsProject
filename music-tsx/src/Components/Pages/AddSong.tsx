import { BottomNavigation, BottomNavigationAction, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Gener, Song} from "../Song";
import {useState} from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import BackButton from "../backButton/BackButton";
import { CssTextField } from './Style/StylePages';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function AddSong(props:any) {

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
  const [newSong, setNewSong] = useState(new Song('', '',Gener.CLASSICAL,0,0));
  const handleSubmitAdd = () => {
    handleSubmit(onSubmitHandler);
    props.addNewSong(newSong);
    navigate('/');
  };

  const theme = createTheme();

  return(
      <>
          <h1 style={{textAlign:'center',fontSize:'60px',fontFamily:'Cooper Black', color:'purple'}}>Add song</h1>
          <hr/>
          <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{marginTop: 8,display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
              <Box component="form" noValidate sx={{ mt: 1 }}>
              <CssTextField {...register("title")} placeholder="Title" type="text" required
                name='titleName' id="outlined-basic" label="Title" variant="outlined" margin="dense" onChange={e => setNewSong({...newSong, title:e.target.value})}/>
                <br/>
                <CssTextField {...register("artist")} placeholder="Artist" type="text" required
                  label="Artist name" variant="outlined" margin="dense" onChange={e => setNewSong({...newSong, artist:e.target.value})}/>
                <br/>
                <Box sx={{ width: 225 }}>
                  <FormControl fullWidth>
                    <InputLabel {...register("gener")} placeholder="Gener" required id="demo-simple-select-label">Gener</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={newSong.gener}
                      label="Gener"
                      onChange={(e: SelectChangeEvent<Gener>) => {
                        setNewSong({ ...newSong, gener: e.target.value as Gener });
                      }}
                    >
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
                  id="outlined-basic" label="Length" variant="outlined" margin="dense" onChange={e => setNewSong({...newSong, length:parseInt(e.target.value)})}/>
                <br/>
                <CssTextField {...register("price")} placeholder="Price" type="number" required
                  id="outlined-basic" label="Price" variant="outlined" margin="dense" onChange={e => setNewSong({...newSong, price:parseInt(e.target.value)})}/>
                <br/>
                  <BottomNavigation sx={{ width: 240 }}>
                    <BottomNavigationAction onClick={handleSubmitAdd} label="Add" value="Add" icon={<IconButton style={{color:"purple"}} aria-label="add" size="large"><AddTaskIcon fontSize="inherit"></AddTaskIcon></IconButton> } />
                  </BottomNavigation>
                  <BackButton/>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
          <hr/>
      </>
  )
}