import { BottomNavigation, BottomNavigationAction, IconButton } from '@mui/material';
import { AddCircle, BorderColor, DeleteOutline, ReplayCircleFilled, Search, SearchOffRounded, SearchSharp } from '@mui/icons-material';
import { Link, useNavigate,useSearchParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { StyledTableCell,StyledTableRow } from './Style/StylePages';
import InputBase from '@mui/material/InputBase';


export default function SongsLandingPage(props:any):JSX.Element {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({ replace: 'true' });
    const handleSearchByArtist = () => {
        props.getSongsByArtist(searchParams.get("filter"));
    }

      return(
        <div>
            <div style={{fontSize:'80px', textAlign: 'center',fontFamily:'Cooper Black', color:'purple'}}>Songs</div>
            <br/>
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}>
            <InputBase style={{color:"purple"}}
                name = "SearchByArtistInput"
                id="outlined-basic"
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search song by artist"
                inputProps={{ 'aria-label': 'Search song by artist' }}
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                let filter = event.target.value;
                if (filter) {
                    setSearchParams({ filter }, { replace: true });
                } else {
                    setSearchParams({}, { replace: true });
                }
            }}
            />  
            </Paper>         
            <IconButton onClick={handleSearchByArtist} color="secondary" type="submit" sx={{ ml:8,p: '10px' }} aria-label="search">
                <IconButton style={{color:"purple"}} aria-label="add" size="medium"><SearchSharp fontSize="inherit"></SearchSharp></IconButton>
            </IconButton>
            <IconButton onClick={props.getSongs} color="secondary" sx={{ p: '10px' }}>
                <ReplayCircleFilled style={{color:"purple"}}/>
            </IconButton>
            <hr/>   
            <TableContainer component={Paper}>
                <Table style={{alignItems: 'center',justifyContent: 'center'}}
                 sx={{ minWidth: 650 }}>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Title</StyledTableCell>
                            <StyledTableCell>Artist</StyledTableCell>
                            <StyledTableCell>Gener</StyledTableCell>
                            <StyledTableCell>Length</StyledTableCell>
                            <StyledTableCell>Price</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </StyledTableRow>
                        <br/>
                    </TableHead>
                <TableBody>
                { props.songsArr.map((song:any) => (
                    <StyledTableRow key={song.id} hover>
                    <StyledTableCell>{song.title}</StyledTableCell>
                    <StyledTableCell>{song.artist}</StyledTableCell>
                    <StyledTableCell>{song.gener}</StyledTableCell>
                    <StyledTableCell>{song.length}</StyledTableCell>
                    <StyledTableCell>{song.price}</StyledTableCell>
                    <StyledTableCell>
                        <BottomNavigation sx={{ width: 30 }}>
                            <BottomNavigationAction onClick={() => props.deleteSong(song.id)} label="Remove" value="Remove"
                             icon={<IconButton style={{color:'purple'}} aria-label='remove' size='medium'><DeleteOutline fontSize='inherit'></DeleteOutline></IconButton>}/>
                            <BottomNavigationAction onClick={() => {navigate(`/songs/toEdit/${song.id}`) }} label="Edit" value="Edit" icon={<IconButton style={{color:'purple'}} aria-label='edit' size='medium'><BorderColor fontSize='inherit'></BorderColor></IconButton>} />
                        </BottomNavigation>  
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
            <hr/>
            <Link to="/songs/toAdd"> 
                <BottomNavigation>
                    <BottomNavigationAction onClick={() => { navigate('/songs/toAdd') }} label="Add" value="Add" icon={<IconButton style={{color:'purple'}} aria-label='add' size='large'><AddCircle fontSize='inherit'></AddCircle></IconButton>} />
                </BottomNavigation>
            </Link>
        </div>
    )
}
