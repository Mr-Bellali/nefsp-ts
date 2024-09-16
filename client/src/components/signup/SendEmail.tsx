import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const SendEmail = () => {
  return (
    <div className="p-10 w-full h-full bg-[#F54D42] flex flex-col justify-center items-center">
      <EmailRoundedIcon 
        sx={{ color:"white" ,  fontSize: 250  }} 
      />
      <h1 className='text-white font-bold text-2xl'> You will recieve an email for your cridantials and use them to sign in to the platform</h1>
    </div>
  )
}

export default SendEmail