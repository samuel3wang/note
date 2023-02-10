import IconButton from '@mui/material/IconButton';
import NotesIcon from '@mui/icons-material/Notes';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Outer() {
  return (
    <div className="h-20 flex items-center justify-center bg-blue-500 w-screen">
      <a href='https://www.linkedin.com/in/samuel3wang/'>
        <IconButton>
          <LinkedInIcon fontSize="large" htmlColor='white'/>
        </IconButton>
      </a>
      <a href='https://github.com/samuel3wang/'>
        <IconButton >
          <GitHubIcon fontSize="large" htmlColor='white' className='mx-3'/>
        </IconButton>
      </a>
      <a href='https://hackmd.io/@kmx5moqzQWWvI_5ozlA2xQ/'>
        <IconButton >
          <NotesIcon fontSize="large" htmlColor='white'/>
        </IconButton>
      </a>
    </div>
  );
}