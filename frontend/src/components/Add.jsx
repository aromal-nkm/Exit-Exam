import React from 'react'

const Add = () => {
    const navigate = useNavigate()
     const [form, setForm]=useState({
      Description:'',
      Status:''
    })
      const onInputChange = (e) => {
           setForm({ ...form,[e.target.name]: e.target.value });
       };
           const location = useLocation()
      let sendData=()=>{
            if(location.state!= null){
            axios.put('http://localhost:4000/todo/edit'+location.state.todo._id,form).then((res)=>{
               alert('Data updated');
               navigate('/home')
              }).catch((error)=>{
                console.log(error);
              })
            }
            else{
              axios.post('http://localhost:4000/todo/add',form).then((res)=>{
                 navigate('/home')
               }).catch((error)=>{
               console.log(error)
              })
             }
           }
           useEffect(()=>{
        if(location.state!=null){
              setForm({...form,
                
                Description:location.state.todo.Description,
                Status:location.state.todo.Status,
    
        
         })
         }
         },[])

  return (
    <>
    <Box
      component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
       autoComplete="off"
    >

      <TextField id="outlined-basic" label="name" variant="outlined" name="Description" value={form.Description} onChange={onInputChange}/><br />
      <TextField id="outlined-basic" label="category" variant="outlined" name="Status" value={form.Status} onChange={onInputChange}/> <br />

      <Button variant="contained" onClick={sendData}>Submit</Button>
      
    </Box>
   
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Add