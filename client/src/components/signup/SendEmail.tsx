import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const SendEmail = () => {
  return (
    <div className="p-10 w-full h-full flex flex-col justify-center items-center">
      <EmailRoundedIcon 
        sx={{ color:"#F54D42" ,  fontSize: 250  }} 
      />
      <h1 className='text-[#F54D42] font-bold text-2xl'> You will recieve an email for your cridantials and use them to sign in to the platform</h1>
    </div>
  )
}

export default SendEmail