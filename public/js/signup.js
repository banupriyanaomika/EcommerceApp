

 const signup=async(un,em,mn,pw)=>{
     await axios({
         method:"POST",
         url:"http://localhost:3000/api/v1/views",
         data:{
             username,
             email
         }
        })
        }

document.querySelector('#form-signup').addEventListener('submit', e => {
    e.preventDefault();

    const username = document.getElementbyId('un').value;
    const email=document.getElementById('em').value;
    const mobileno = document.getElementbyId('mn').value;
    const password=document.getElementById('pw').value;
    signup(username,email,mobileno,password);

})