import React from 'react'
import Card from '@mui/material/Card';
 import CardActions from '@mui/material/CardActions';
 import CardContent from '@mui/material/CardContent';
 import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 import { Container, Grid, Stack } from '@mui/material';
 import  {useNavigate} from 'react-router-dom';
const TodoHome = () => {
  const [inputs ,setInputs] = useState([])
 const navigate = useNavigate()
  function updatetodo(todo){
    navigate('/add',{state:{todo}})
     }
       let deletetodo =(p)=>{
            axios.delete('http://localhost:4000/todo/delete/'+p).then((res)=>{
              window.location.reload()
             }
         //navigate /path
            ).catch((error)=>{
           console.log(error)
           })
          }
           useEffect(() => {
             axios.get('http://localhost:4000/todo/')
                 .then((res) => {
                     setInputs(res.data); 
             })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        }, []);
  return (
    <>     

<Container>
         <Grid container spacing={8}>    
               {inputs.map((input) => (
                   <Grid item key={input._id} xs={12} sm={6} md={4}>
                       <Card>
                          
                       <CardContent>
                         
                              
                                <Typography variant="h6" component="div">
                                    {input.Description}
                               </Typography>
                               <Typography variant="h6" component="div">
                                    {input.Status}
                                </Typography>
                               
                              

                                <Stack direction="row" spacing={4}>
                               <Button  variant="contained" color="success" onClick={()=>{updatetodo(input)}} >Add</Button>

                               <Button  variant="contained" color="error" onClick={()=>{deletetodo(input._id)}} >Delete</Button>

                                 </Stack>
                           </CardContent>
                        </Card>
                    </Grid>
               ))}
           </Grid>
         </Container>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     </>
  )
}

export default TodoHome